import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[url("/src/assets/images/footer.png")] bg-contain'>
            <footer className="footer p-10  text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="" className="link link-hover">Emergency Checkup</Link>
                    <Link to="" className="link link-hover">Monthly Checkup</Link>
                    <Link to="" className="link link-hover">Weekly Checkup</Link>
                    <Link to="" className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to="" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="" className="link link-hover">Cavity Filling</Link>
                    <Link to="" className="link link-hover">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <p>Gobindaganj, Gaibandha.</p>
                </div>

            </footer>
            <footer className="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by Doctors Portal</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;