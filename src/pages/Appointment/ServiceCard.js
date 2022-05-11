import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const ServiceCard = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl py-3">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary mx-auto font-bold">{name}</h2>
                <p className='uppercase'>
                    {
                        slots?.length ? slots[0] : <>
                            <span className='text-red-500'>Try another space.</span>
                        </>
                    }
                </p>
                <p className='uppercase'>
                    {
                        slots?.length > 1 ? `${slots?.length} spaces available` : `${slots?.length} space available`
                    }
                </p>
                <div className="card-actions justify-center py-2">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;