import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

function LandingPage() {
    return (
    <div>
        <section className="hero-section">
            <div>
            <div data-aos="fade-up" className="flex-hero">
                
                <h1>
                    Your Health<br/>
                    <span className="text-gradient">
                    
                    Our Responsibility
                    </span>
                </h1>
                    <div className="blob-cont">
                        <div className="blue blob"></div>
                    </div>
                    <div className="blob-cont">
                        <div className="blue1 blob"></div>
                    </div>

                <Link to="/Services">
                    <button className="button">Get Started</button>
                </Link>

                <h4 className='peer-review-message'>
                    If you are a peer grading this Capstone Project, please read the "Getting Started" section of my README.md file on GitHub for the instructions to launch this application correctly.
                    The server functionality will not work correctly if you do not follow the instructions in the README.md file.
                </h4>
                    
            </div>
    
            </div>
        </section>
    </div>
    );
}

export default LandingPage;