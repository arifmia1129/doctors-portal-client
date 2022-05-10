import React from 'react';
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
        </div>
    );
};

export default Home;