import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation";
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/InstantConsultation" element={<InstantConsultation />} />
          <Route path='/FindDoctorSearch' element={<FindDoctorSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
