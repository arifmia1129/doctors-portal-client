import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { slots, name, _id } = treatment;

    const handleSubmit = (e) => {
        e.preventDefault();
        const timeSlot = e.target.slot.value;
        const bookingDetail = {
            treatment: name,
            time: timeSlot
        }
        console.log(bookingDetail);
        setTreatment(null);
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
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots?.map(slot => <option
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Type your name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Type email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Type phone no" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Confirm Book" className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;