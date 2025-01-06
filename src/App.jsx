import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components//BookingConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import DisplayDoctors from './Components/DoctorCard/DisplayDoctors';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />  {/*confirmed*/}
        <Routes>
          <Route path="/" element={<LandingPage />} />  {/*confirmed*/}
          <Route path="/Login" element={<Login />} />   {/*confirmed*/}
          <Route path="/SignUp" element={<SignUp />} />   {/*confirmed*/}
          <Route path="/instant-consultation" element={<InstantConsultation />} />  {/*confirmed*/}
          <Route path="/booking-consultation" element={<BookingConsultation />} />  {/*confirmed*/}
          
          <Route path="/FindDoctorSearch" element={<FindDoctorSearch />} />
          <Route path="/DisplayDoctors" element={<DisplayDoctors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
