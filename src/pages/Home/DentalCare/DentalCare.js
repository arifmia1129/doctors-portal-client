import React from 'react';
import { Link } from 'react-router-dom';
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';


const DentalCare = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:p-20'>
                    <img src={treatment} alt="treatment" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">We want to be different from others in all good ways. We serve better than others. We have better doctors, clinics, equipment, labs etc. than others. This is how we want to stay in your heart by providing good service. Good service is our only policy.</p>
                    <PrimaryButton><Link to="/appointment">Get Started</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;