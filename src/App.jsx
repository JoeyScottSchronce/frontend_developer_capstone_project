import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

import Services from './Components/Services';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components//BookingConsultation';

// Delete these before pushing to prod
import DisplayDoctors from './Components/DoctorCard/DisplayDoctors';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import ReviewForm from './Components/ReviewForm/ReviewForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
        {/*  <Route path="/tips_and_guildance" element={<HealthTipsGuildance />} />  
          <Route path="/self_checkup" element={<SelfCheckUp />} />  */}

          {/* Delete this before pushing to prod */}
          <Route path="/FindDoctorSearch" element={<FindDoctorSearch />} />
          <Route path="/DisplayDoctors" element={<DisplayDoctors />} />
          <Route path='/ReviewForm' element={<ReviewForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
