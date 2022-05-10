import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <NavLink className={({ isActive }) =>
                    isActive ? "bg-accent text-white btn btn-ghost normal-case text-xl" : "btn btn-ghost normal-case text-xl"
                } to="/">Doctors Portal</NavLink>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 relative right-1 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? "bg-accent text-white" : ""
                            } to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? "bg-accent text-white" : ""
                            } to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? "bg-accent text-white" : ""
                            } to="/appointment">Appointment</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? "bg-accent text-white" : ""
                            } to="/reviews">Reviews</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? "bg-accent text-white" : ""
                            } to="/contactUs">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? "bg-accent text-white" : ""
                            } to="/login">Login</NavLink>
                        </li>

                    </ul>
                </div>
            </div>



            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 absolute">
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "bg-accent text-white" : ""
                        } to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "bg-accent text-white" : ""
                        } to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "bg-accent text-white" : ""
                        } to="/appointment">Appointment</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "bg-accent text-white" : ""
                        } to="/reviews">Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "bg-accent text-white" : ""
                        } to="/contactus">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? "bg-accent text-white" : ""
                        } to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;