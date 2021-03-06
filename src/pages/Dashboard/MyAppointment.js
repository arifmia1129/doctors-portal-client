import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://lit-inlet-69073.herokuapp.com/booking?email=${user?.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("token");
                    navigate("/login");
                }
                return res.json()
            })
            .then(data => {
                setAppointments(data);
            });
    }, [user, navigate])

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
                        <th>Payment</th>
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
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn-xs btn-error text-white font-bold rounded-lg'>Pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <span className=' text-green-300 font-bold'>Paid</span>
                                    <br />
                                    <span className=' text-green-300 font-bold'>Tnx:{a.tnxId}</span>
                                </div>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;