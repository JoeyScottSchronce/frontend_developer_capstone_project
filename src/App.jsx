import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import ProfileCard from './Components/Profile/ProfileCard';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Services from './Components/Services';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import DisplayDoctors from './Components/DoctorCard/DisplayDoctors';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import { NotificationProvider } from './Components/Notification/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Notification />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<ProfileCard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path='/ReviewForm' element={<ReviewForm />} />
          {/* Delete these before pushing to prod */}
          <Route path="/FindDoctorSearch" element={<FindDoctorSearch />} />
          <Route path="/DisplayDoctors" element={<DisplayDoctors />} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
