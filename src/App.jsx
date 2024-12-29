import React from 'react';
import { BrowserRouter } from 'react-router-dom'; /* , Routes, Route */
import Navbar from './Components/Navbar/Navbar';
//import LandingPage from './Components/Landing_Page/LandingPage';
//import Login from './Components/Login/Login';
//import Signup from './Components/Sign_up/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/*<Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>*/}
      </BrowserRouter>
    </>
  );
}

export default App;
