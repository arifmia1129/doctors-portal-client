import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl py-3">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary mx-auto font-bold">{name}</h2>
                <p className='uppercase'>
                    {
                        slots?.length ? slots[0] : <>
                            <span className='text-red-500'>Try another day.</span>
                        </>
                    }
                </p>
                <p className='uppercase'>
                    {
                        slots?.length > 1 ? `${slots?.length} spaces available` : `${slots?.length} space available`
                    }
                </p>
                <div className="card-actions justify-center py-2">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary text-white border-0 modal-button" >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;