import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ServiceCard from './ServiceCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='my-20'>
            <div>
                <h3 className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />
            }
        </div>
    );
};

export default AvailableAppointment;