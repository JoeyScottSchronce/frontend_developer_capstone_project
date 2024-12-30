import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                {/* Navigation logo section */}
                <div className="nav__logo">
                    {/* Link to the home page */}
                    <Link to="/" style={{ textDecoration: 'none', paddingLeft: '15px' }}>
                        Stay Healthy
                        {/* Insert an SVG icon of a doctor with a stethoscope */}
                        <img src="https://cdn.pixabay.com/photo/2021/11/20/03/17/doctor-6810751_1280.png" alt="doctor with a stethoscope" height="35" width="35" style={{ fill: '#3685fb' }} />
                    </Link>
                </div>
                {/* Navigation icon section with an onClick event listener */}
                <div className="nav__icon"> {/* onClick={handleClick} */}
                    {/* Font Awesome icon for bars (hamburger menu) */}
                    <i className="fa fa-times fa fa-bars"></i>
                </div>

                {/* Unordered list for navigation links with 'active' className */}
                <ul className="nav__links active">
                    {/* List item for the 'Home' link */}
                    <li className="link">
                        <Link to="/LandingPage">Home</Link>
                    </li>
                    {/* List item for the 'Appointments' link */}
                    <li className="link">
                        <Link to="#">Appointments</Link>
                    </li>
                    {/* List item for the 'Sign Up' link with a button */}
                    <li className="link">
                        <Link to="/Sign_up">
                            <button className="btn1">Sign Up</button>
                        </Link>
                    </li>
                    {/* List item for the 'Login' link with a button */}
                    <li className="link">
                        <Link to="/Login">
                            <button className="btn1">Login</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
