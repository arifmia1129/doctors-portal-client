import { success } from 'daisyui/src/colors';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { slots, name, _id, price } = treatment;
    const [user] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        const timeSlot = e.target.slot.value;
        const contact = e.target.phone.value;
        const bookingDetail = {
            treatmentId: _id,
            treatment: name,
            price,
            date: format(date, 'PP'),
            time: timeSlot,
            patientName: user.displayName,
            patientEmail: user.email,
            contact
        }

        // Send booking information to database
        fetch("https://lit-inlet-69073.herokuapp.com/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingDetail)
        })

            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Confirm your booking on, ${format(date, 'PP')}, ${timeSlot}`);
                }
                else {
                    toast.error(`Already have a booking on, ${data.date}, ${data.time}`);
                }
                refetch();
                setTreatment(null);
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn bg-secondary text-white border-0 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary">{treatment.name}</h3>
                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-5' onSubmit={handleSubmit}>
                        <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <input disabled type="text" value={`${price} tk only`} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots?.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name="name" readOnly value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" readOnly value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name="phone" placeholder="Type phone no" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Confirm Book" className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;