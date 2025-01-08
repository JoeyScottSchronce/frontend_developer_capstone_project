import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

import Services from './Components/Services';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components//BookingConsultation';

import DisplayDoctors from './Components/DoctorCard/DisplayDoctors'; // Delete this before pushing to prod

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/DisplayDoctors" element={<DisplayDoctors />} /> {/* Delete this before pushing to prod */}

          <Route path="/Services" element={<Services />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
        {/*  <Route path="/tips_and_guildance" element={<HealthTipsGuildance />} />  
          <Route path="/self_checkup" element={<SelfCheckUp />} />  */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
