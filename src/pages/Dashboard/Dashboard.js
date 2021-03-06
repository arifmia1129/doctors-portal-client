import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="drawer drawer-mobile">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-xl md:text-3xl font-bold text-primary my-3'>Welcome to Your Dashboard</h1>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48  text-base-content">
                        <li><Link to="/dashboard">My Appointment</Link></li>
                        <li><Link to="/dashboard/review">My Review</Link></li>
                        {
                            admin && <>
                                <li><Link to="/dashboard/user">All User</Link></li>
                                <li><Link to="/dashboard/add-doctor">Add Doctor</Link></li>
                                <li><Link to="/dashboard/manage-doctors">Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;