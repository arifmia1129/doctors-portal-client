import React from 'react';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <DentalCare />
            <AppointmentBanner />
        </div>
    );
};

export default Home;