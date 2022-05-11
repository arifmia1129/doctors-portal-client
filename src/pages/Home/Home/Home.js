import React from 'react';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <DentalCare />
            <AppointmentBanner />
            <Testimonial />
            <ContactForm />
        </div>
    );
};

export default Home;