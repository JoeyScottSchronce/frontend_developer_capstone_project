import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"

function SignUp() {
    return (
        <div class="container"> {/* Main container with margin-top */}
            <div> {/* Grid layout for sign-up form */}
                <div class="signup-text"> {/* Title for the sign-up form */}
                    <h1>Sign Up</h1>
                </div> 
                {/* Text for existing members to log in */}
                <div class="signup-text1"> Already a member? <span><Link to="/Login"> Login</Link></span>
                </div>
                <div class="signup-page"> {/* Form for user sign-up */}
                    <form class="form"> {/* Start of the form */}
                        <div class="form-group"> {/* Form group for user's name */}
                            <label for="name">Name</label> {/* Label for name input field */}
                            <input
                            type="text"
                            name="name"
                            id="name"
                            required class="form-control"
                            placeholder="Enter your name"
                            aria-describedby="helpId"
                            /> {/* Text input field for name */}
                        </div>
                        <div class="form-group"> {/* Form group for user's phone number */}
                            <label for="phone">Phone</label> {/* Label for phone input field */}
                            <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required class="form-control"
                            placeholder="Enter your phone number"
                            aria-describedby="helpId"
                            /> {/* Tel input field for phone number */}
                        </div>
                        <div class="form-group"> {/* Form group for user's email */}
                            <label for="email">Email</label> {/* Label for email input field */}
                            <input
                            type="email"
                            name="email"
                            id="email"
                            required class="form-control"
                            placeholder="Enter your email"
                            aria-describedby="helpId"
                            /> {/* Email input field */}
                        </div>
                        <div class="form-group"> {/* Form group for user's password */}
                            <label for="password">Password</label> {/* Label for password input field */}
                            <input
                            name="password"
                            id="password"
                            required class="form-control"
                            placeholder="Enter your password"
                            aria-describedby="helpId"
                            /> {/* Password input field */}
                        </div>
                        <div class="btn-group"> {/* Button group for form submission and reset */}
                            <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> {/* Submit button */}
                            <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button> {/* Reset button */}
                        </div>
                    </form> {/* End of the form */}
                </div>
            </div>
        </div>
    )
};

export default SignUp;