import React from 'react';
import chair from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero lg:mt-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={chair} className="image-full rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6">We want to make you laugh. I want to see your beautiful smile. I want to show your beautiful smile to the world. Let's laugh together.</p>
                    <button className="btn btn-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;