import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserDropdown from './UserDropdown';

function Navbar() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);  // Reference for the dropdown
    const navigate = useNavigate();

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleMenu = () => {
        setIsDisplayed(!isDisplayed); 
    };

    const hideMenu = () => {
        if (window.innerWidth < 768) {
            setIsDisplayed(false);
        }
    };

    const handleNavigate = (path) => {
        navigate(`/${path}`);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleDropdownItemClick = () => {
        setIsDropdownVisible(false);
    };

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/frontend_developer_capstone_project/">
                    Stay Healthy
                    <img src="/doctor-with-stethoscope.jpg" alt="doctor with a stethoscope" height="35" width="35" />
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
                        <Link to="/Appointments" onClick={hideMenu}>Appointments</Link>
                    </li>
                    <li className="link">
                        <Link to="/HealthTips" onClick={hideMenu}>Health Blog</Link>
                    </li>
                    <li className="link">
                        <Link to="/ReviewForm" onClick={hideMenu}>Reviews</Link>
                    </li>
                    
                    {isLoggedIn ? (
                        <>
                            <li className='Username'>
                                <span onClick={toggleDropdown}>{username}</span>
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
            {isDropdownVisible && <UserDropdown ref={dropdownRef} onItemClick={handleDropdownItemClick}/>}
        </nav>
    );
}

export default Navbar;
