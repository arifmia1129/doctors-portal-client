import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import doctor from "../../../assets/images/doctor.png";
import { Link } from 'react-router-dom';

const AppointmentBanner = () => {
    return (
        <div className="bg-[url('/src/assets/images/appointment.png')] bg-cover">
            <div className="hero lg:mt-44 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='hidden lg:block'>
                        <img className='mt-[-120px] mb-[-16px]' src={doctor} alt="treatment" />
                    </div>
                    <div className=''>
                        <p className='font-bold text-primary'>Appointment</p>
                        <div className="text-white">
                            <h1 className="lg:text-5xl text-4xl font-bold text-white">Make an appointment Today</h1>
                            <p className="py-6">If you want our best service, doctor and others please make sure doctor appointment. If you want to doctor appointment please click under the button and follow instruction. It's very simple step. So try now!</p>
                        </div>
                        <PrimaryButton><Link to="/appointment">Get Started</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;