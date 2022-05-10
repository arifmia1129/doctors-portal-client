import React from 'react';
import Service from '../Service/Service';
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";


const Services = () => {
    const services = [
        { id: 1, img: img1, name: "Fluoride Treatment", description: "We provide services to you in such a way that you are healthy and satisfied. We have a panel of specialist doctors to provide these services. So you can safely accept any of our services." },
        { id: 2, img: img2, name: "Cavity Filling", description: "We provide services to you in such a way that you are healthy and satisfied. We have a panel of specialist doctors to provide these services. So you can safely accept any of our services." },
        { id: 3, img: img1, name: "Teeth Whitening", description: "We provide services to you in such a way that you are healthy and satisfied. We have a panel of specialist doctors to provide these services. So you can safely accept any of our services." }
    ]
    return (
        <div className='my-10'>
            <div className='text-center'>
                <p className='text-secondary font-bold'>OUR SERVICES</p>
                <h3 className='text-accent text-3xl'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;