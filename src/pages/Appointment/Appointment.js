import React from 'react';
import AppointmentTopBanner from './AppointmentTopBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentTopBanner />
            <AvailableAppointment />
        </div>
    );
};

export default Appointment;