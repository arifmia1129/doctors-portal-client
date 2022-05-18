import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const { price, treatment, patientName, patientEmail, _id } = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [cardSuccess, setCardSuccess] = useState("");
    const [tnxId, setTnxId] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        setCardError(error?.message || "");

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            const payment = {
                appointmentId: _id,
                appointmentFor: treatment,
                patientName,
                patientEmail,
                tnxId: paymentIntent?.id
            }
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(payment)
            })
            setCardSuccess("Congrats! your payment is done! Stay with us! Thank you.");
            setTnxId(paymentIntent?.id);
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {
                cardError && <p className='text-red-500 mt-2'><small>{cardError}</small></p>
            }
            {
                cardSuccess &&
                <div>
                    <p className='my-3'>
                        <small className='text-green-500 mt-2'>{cardSuccess}</small>
                        <br />
                        <small className='text-orange-500 mt-2'>If you want to note! Tnx id: <span className='font-bold'>{tnxId}</span></small>
                    </p>

                </div>
            }

            <button className='btn btn-success btn-xs' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;