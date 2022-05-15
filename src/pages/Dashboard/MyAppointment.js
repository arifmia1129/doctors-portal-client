import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            });
    }, [user])

    if (loading) {
        return <Loading />
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((a, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.time}</td>
                            <td>{a.treatment}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;