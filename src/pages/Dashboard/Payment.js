import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0drqHjlyVvU0H8WCq85L5S01GNgzi6FPnNqOCaYjqhSDHM985EIVLVhiw6nFnMCGSQDYowAf8tPHF1qhtBvNzh0071TRQkRm');

const Payment = () => {
    const { aId } = useParams();
    const { data: appointment, isLoading } = useQuery(["payment", aId], () => fetch(`https://lit-inlet-69073.herokuapp.com/booking/${aId}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    const { treatment, price, time, date, patientName } = appointment;
    return (
        <div>
            <h2 className="text-xs md:text-2xl text-secondary font-bold my-3">Please confirm your appointment with payment:</h2>
            <div class=" border-red-300 border-2 p-5 rounded-lg my-3 lg:max-w-md max-w-sm">
                <h2 class="text-xl text-orange-700 font-bold">Your appointment details:</h2>
                <p className='text-primary font-bold'>Hello, {patientName}</p>
                <ul>
                    <li><span className='font-bold'>Appointment for:</span> {treatment}</li>
                    <li><span className='font-bold'>Price:</span> {price}</li>
                    <li><span className='font-bold'>Date:</span> {date}</li>
                    <li><span className='font-bold'>Time:</span> {time}</li>
                </ul>
            </div>
            <div className='md:max-w-md max-w-sm border-red-300 border-2 p-5 rounded-lg'>
                <h2 className="text-xl font-bold text-primary mb-3">Payment method:</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;