import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navLink = <>
        <li>
            <NavLink className={({ isActive }) =>
                isActive ? "bg-gradient-to-r from-secondary to-primary text-white" : ""
            } to="/home">Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                isActive ? "bg-gradient-to-r from-secondary to-primary text-white" : ""
            } to="/about">About</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                isActive ? "bg-gradient-to-r from-secondary to-primary text-white" : ""
            } to="/appointment">Appointment</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                isActive ? "bg-gradient-to-r from-secondary to-primary text-white" : ""
            } to="/reviews">Reviews</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) =>
                isActive ? "bg-gradient-to-r from-secondary to-primary text-white" : ""
            } to="/contact">Contact Us</NavLink>
        </li>

        {
            user &&
            <li>
                <NavLink className={({ isActive }) =>
                    isActive ? "bg-gradient-to-r from-secondary to-primary text-white" : ""
                } to="/dashboard">Dashboard</NavLink>
            </li>
        }
        <li>
            {
                user ?
                    <button onClick={() => signOut(auth)} className="btn btn-ghost">Sign Out</button>
                    :
                    <NavLink className={({ isActive }) =>
                        isActive ? "bg-gradient-to-r from-secondary to-primary text-white" : ""
                    } to="/login">Login</NavLink>
            }
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <NavLink className={({ isActive }) =>
                    isActive ? "bg-gradient-to-r from-secondary to-primary text-white btn btn-ghost normal-case text-xl" : "btn btn-ghost normal-case text-xl"
                } to="/">Doctors Portal</NavLink>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 relative right-1 p-2 shadow bg-base-100 rounded-box w-52">

                        {navLink}

                    </ul>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 absolute">
                    {navLink}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;