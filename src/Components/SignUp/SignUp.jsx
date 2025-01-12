import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import "./SignUp.css";

function SignUp() {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState({}); // State to show error messages

    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Reset error messages
        setShowerr({});

        // Check if the password is at least 8 characters long
        if (password.length < 8) {
            setShowerr((prevErrors) => ({
                ...prevErrors,
                password: "Password must be at least 8 characters long"
            }));
            return;
        }

        // Check if phone number is valid (exactly 10 digits)
        if (!/^\d{10}$/.test(phone)) {
            setShowerr((prevErrors) => ({
                ...prevErrors,
                phone: "Phone number invalid"
            }));
            return;
        }

        // API Call to register user
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                }),
            });

            // Check if the response status is 403
            if (response.status === 403) {
                setShowerr((prevErrors) => ({
                    ...prevErrors,
                    email: "Email already registered"
                }));
                return;
            }

            const json = await response.json(); // Parse the response JSON

            if (json.authtoken) {
                // Store user data in session storage
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);
                // Redirect user to home page
                navigate("/");
                window.location.reload(); // Refresh the page
            } else {
                if (json.errors) {
                    // Update error state for specific fields
                    const newErrors = {};
                    for (const error of json.errors) {
                        newErrors[error.param] = error.msg;
                    }
                    setShowerr(newErrors);
                } else {
                    setShowerr({ general: json.error });
                }
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            setShowerr({ general: "An unexpected error occurred. Please try again." });
        }
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
    };

    return (
        <div className="sign-up-container">
            <div>
                <div className="sign-up-signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="sign-up-signup-text1"> Already a member? <span><Link to="/Login" style={{ color: '#2190FF' }}> Login</Link></span></div>
                <div className="sign-up-signup-page">
                    <form method="POST" onSubmit={register}>

                        <div className='sign-up-form-group'>
                            <label htmlFor="role">Role</label>
                            <select id="role" className="sign-up-form-control">
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                            </select>
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="sign-up-form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                            />
                            {showerr.name && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.name}</div>}
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                required className="sign-up-form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                            />
                            {showerr.phone && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.phone}</div>}
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="sign-up-form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                            />
                            {showerr.email && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.email}</div>}
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id="password"
                                required className="sign-up-form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                            {showerr.password && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.password}</div>}
                        </div>

                        <div className="sign-up-btn-group">
                            <button type="submit" className="sign-up-btn sign-up-btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" onClick={resetForm} className="sign-up-btn sign-up-btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
