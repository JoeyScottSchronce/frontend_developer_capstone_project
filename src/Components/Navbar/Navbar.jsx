import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setEmail('');
        window.location.reload();
    };

    useEffect(() => { 
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            setEmail(storedEmail);
        }
    }, []);

    useEffect(() => {
        if (email) {
            const extractedUsername = email.split('@')[0];
            setUsername(extractedUsername);
        }
    }, [email]);

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
        if (window.innerWidth < 768) {
            setIsDisplayed(false);
        }
    };

    return (
        <div>
            <nav>
                <div className="nav__logo">
                    <Link to="/">
                        Stay Healthy
                        <img src="https://cdn.pixabay.com/photo/2021/11/20/03/17/doctor-6810751_1280.png" alt="doctor with a stethoscope" height="35" width="35" />
                    </Link>
                </div>
                <div className="nav__icon" onClick={toggleMenu}>
                    <i className={`fa ${isDisplayed ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {isDisplayed && (
                    <ul className="nav__links active">
                        <li className="link">
                            <Link to="/" onClick={hideMenu}>Home</Link>
                        </li>
                        <li className="link">
                            <Link to="#" onClick={hideMenu}>Appointments</Link>
                        </li>
                        <li className="link">
                            <Link to="/healthblog" onClick={hideMenu}>Health Blog</Link>
                        </li>
                        <li className="link">
                            <Link to="/reviews" onClick={hideMenu}>Reviews</Link>
                        </li>
                        <li className="link">
                            <Link to="/InstantConsultation" onClick={hideMenu}>Instant Consultation</Link>
                        </li>
                        {isLoggedIn ? (
                            <>
                                <li className="Username">
                                    <span>{username}</span>
                                </li>
                                <li className="link">
                                    <button className="btn1" onClick={handleLogout}>Logout</button>
                                </li>
                            </> 
                        ) : (
                            <>
                                <li className="link">
                                    <Link to="/SignUp" onClick={hideMenu}>
                                        <button className="btn1">Sign Up</button>
                                    </Link>
                                </li>
                                <li className="link">
                                    <Link to="/Login" onClick={hideMenu}>
                                        <button className="btn1">Login</button>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
