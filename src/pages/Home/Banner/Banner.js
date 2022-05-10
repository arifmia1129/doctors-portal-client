import React from 'react';
import chair from "../../../assets/images/chair.png";
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg-[url('/src/assets/images/bg.png')] bg-cover lg:py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='md:px-10'>
                    <img src={chair} alt="banner-img" className="image-full rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6">We want to make you laugh. I want to see your beautiful smile. I want to show your beautiful smile to the world. Let's laugh together.</p>
                    <PrimaryButton />
                </div>
            </div>
        </div>
    );
};

export default Banner;