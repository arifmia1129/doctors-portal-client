import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
    return (

        <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            <InfoCard img={clock} cardTitle="Opening Hours" cardBody="9 A.M - 9 P.M" bgColor="bg-gradient-to-r from-secondary to-primary" />
            <InfoCard img={location} cardTitle="Visit Our Location" cardBody="Gobindaganj, Gaibandha." bgColor="bg-accent" />
            <InfoCard img={phone} cardTitle="Contact Us Now" cardBody="+8801849676331" bgColor="bg-gradient-to-r from-secondary to-primary" />
        </div>
    );
};

export default InfoCards;