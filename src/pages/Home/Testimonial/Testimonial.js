import React from 'react';
import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
    const comments = [
        { _id: 1, comment: "I am really fascinated by their service. They are sincere and helpful in providing services. Let this process of giving their services continue in this way so that we will benefit, our society will benefit, our country will benefit in all respects.", img: people1, name: "AB Arif", address: "Gobindaganj, Gaibandha" },
        { _id: 2, comment: "I am really fascinated by their service. They are sincere and helpful in providing services. Let this process of giving their services continue in this way so that we will benefit, our society will benefit, our country will benefit in all respects.", img: people2, name: "AB Binu", address: "Gobindaganj, Gaibandha" },
        { _id: 3, comment: "I am really fascinated by their service. They are sincere and helpful in providing services. Let this process of giving their services continue in this way so that we will benefit, our society will benefit, our country will benefit in all respects.", img: people3, name: "Nurani", address: "Gobindaganj, Gaibandha" }
    ]
    return (
        <div className='mb-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-xl text-secondary'>Testimonial</p>
                    <h1 className='text-4xl text-accent font-bold'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    comments.map(singleComment => <TestimonialCard
                        key={singleComment._id}
                        singleComment={singleComment}
                    />)
                }
            </div>
        </div>
    );
};

export default Testimonial;