// Import React hooks
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import "./Login.css";

function Login() {
    // State variables for email, password, and password visibility toggle
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Get navigation function from react-router-dom
    const navigate = useNavigate();

    // Check if user is already authenticated, then redirect to home page
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/frontend_developer_capstone_project");
        }
    }, []);

    // Function to handle login form submission
    const login = async (e) => {
        e.preventDefault();
        // Send a POST request to the login API endpoint
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        // Parse the response JSON
        const json = await res.json();
        if (json.authtoken) {
            // If authentication token is received, store it in session storage
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            // Redirect to home page and reload the window
            navigate('/frontend_developer_capstone_project');
            window.location.reload();
        } else {
            // Handle errors if authentication fails
            if (json.errors) {
                for (const error of json.errors) {
                    alert(error.msg);
                }
            } else {
                alert(json.error);
            }
        }
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login_container">
            {/* Div for login text */}
            <div className="login-text">
                <h2>Login</h2>
            </div>
            {/* Additional login text with a link to Sign Up page */}
            <div className="login-text1"> Are you a new member? <span><Link to="/frontend_developer_capstone_project/signup" style={{ color: '#2190FF' }}> Sign Up Here</Link></span>
            </div><br />

            {/* Div for login form */}
            <div className="login-form">
                <form onSubmit={login}>
                    {/* Form group for email input */}
                    <div className="login-form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="login-form-control"
                            placeholder="Enter your email"
                            aria-describedby="helpId"
                        />
                    </div>

                    {/* Form group for password input */}
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="login-form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                            <span className="password-toggle-text" onClick={toggleShowPassword}>
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>

                    {/* Button group for login and reset buttons */}
                    <div className="login-btn-group">
                        <button type="submit" className="login-btn login-btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                        <button type="reset" onClick={resetForm} className="login-btn login-btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                    <br />
                    {/* Additional login text for 'Forgot Password' option */}
                    <div className="forgot-password-text">
                    <Link to="/frontend_developer_capstone_project/password-reset" style={{ color: '#2190FF' }}> Forgot Password? </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
