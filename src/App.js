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
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReview from "./pages/Dashboard/MyReview";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Authentication/RequireAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor';


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

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='user' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='add-doctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
        </Route>

        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
