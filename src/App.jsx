import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import ProfileCard from './Components/Profile/ProfileCard';
import Reports from './Components/ReportsLayout/ReportsLayout';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Services from './Components/Services';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import { NotificationProvider } from './Components/Notification/NotificationContext';
import HealthTips from './Components/HealthTips/HealthTips';
import SelfCheckup from './Components/SelfCheckup/SelfCheckup';
import PageNotFound from './Components/PageNotFound';

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
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path='/ReviewForm' element={<ReviewForm />} />
          <Route path='/HealthTips' element={<HealthTips />} />
          <Route path='/SelfCheckup' element={<SelfCheckup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
