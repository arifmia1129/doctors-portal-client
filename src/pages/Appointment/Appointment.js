import React, { useState } from 'react';
import AppointmentTopBanner from './AppointmentTopBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentTopBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
        </div>
    );
};

export default Appointment;