import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ServiceCard from './ServiceCard';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP");

    const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
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
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch} />
            }
        </div>
    );
};

export default AvailableAppointment;