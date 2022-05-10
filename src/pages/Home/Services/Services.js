import React from 'react';
import Service from '../Service/Service';
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/fluoride.png";



const Services = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>
                <p className='text-secondary font-bold'>OUR SERVICES</p>
                <h3 className='text-accent text-3xl'>Services We Provide</h3>
            </div>
            <div>
                <Service />
            </div>
        </div>
    );
};

export default Services;