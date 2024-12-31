import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDisplayed(true);
            } else {
                setIsDisplayed(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsDisplayed(!isDisplayed); 
    };

    const hideMenu = () => {
        if(window.innerWidth < 768) {
            setIsDisplayed(false);
        }
    };

    return (
        <div>
            <nav>
                {/* Navigation logo section */}
                <div className="nav__logo">
                    {/* Link to the home page */}
                    <Link to="/" onClick={toggleMenu}>
                        Stay Healthy
                        {/* Insert an SVG icon of a doctor with a stethoscope */}
                        <img src="https://cdn.pixabay.com/photo/2021/11/20/03/17/doctor-6810751_1280.png" alt="doctor with a stethoscope" height="35" width="35" />
                    </Link>
                </div>
                {/* Navigation icon section with an onClick event listener */}
                <div className="nav__icon" onClick={toggleMenu}>
                    {/* Font Awesome icon for bars (hamburger menu) */}
                    <i className={`fa ${isDisplayed ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Unordered list for navigation links with 'active' className */}
                {isDisplayed && (
                    <ul className="nav__links active">
                        {/* List item for the 'Home' link */}
                        <li className="link">
                            <Link to="/" onClick={hideMenu}>Home</Link>
                        </li>
                        {/* List item for the 'Appointments' link */}
                        <li className="link">
                            <Link to="#" onClick={hideMenu}>Appointments</Link>
                        </li>
                        {/* List item for the 'Sign Up' link with a button */}
                        <li className="link">
                            <Link to="/SignUp" onClick={hideMenu}>
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        {/* List item for the 'Login' link with a button */}
                        <li className="link">
                            <Link to="/Login" onClick={hideMenu}>
                                <button className="btn1">Login</button>
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
