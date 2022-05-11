import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentTopBanner = ({ date, setDate }) => {
    return (
        <div className="hero bg-[url('/src/assets/images/bg.png')] bg-cover lg:py-20">
            <div className="hero-content flex-col lg:flex-row-reverse px-0">
                <div className='lg:px-36'>
                    <img src={chair} alt="banner-img" className="image-full rounded-lg shadow-2xl" />
                </div>
                <div>
                    <DayPicker
                        className='mx-auto lg:pl-20'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentTopBanner;