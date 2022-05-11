import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const ContactForm = () => {
    return (
        <div className='bg-[url("/src/assets/images/appointment.png")] bg-cover my-10 py-10'>
            <div className='text-center py-5'>
                <p className='text-primary font-medium'>Contact Us</p>
                <h3 className='text-white text-2xl md:text-4xl'>Stay Connected With Us</h3>
            </div>
            <div className='flex justify-center items-center'>
                <form action="">
                    <input type="email" placeholder="Email Address" className="input w-[250px] md:w-[400px]" />
                    <br />
                    <br />
                    <input type="text" placeholder="Subject" className="input w-[250px] md:w-[400px]" />
                    <br />
                    <br />
                    <textarea className="textarea w-[250px] md:w-[400px] h-[150px]" placeholder="Your message"></textarea>
                    <br />
                    <br />
                    <div className='flex justify-center items-center'>
                        <PrimaryButton><input type="submit" value="Submit" /></PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;