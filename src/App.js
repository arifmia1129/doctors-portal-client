import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Reviews from './pages/Reviews/Reviews';
import Contact from './pages/Contact/Contact';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/SignUp';
import RequireAuth from './pages/Authentication/RequireAuth';

function App() {
  return (
    <div className="max-w-7xl mx-auto lg:px-12 px-2">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
