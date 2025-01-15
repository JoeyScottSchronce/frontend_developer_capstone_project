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

                <h4>
                    Thank you so much for visiting my Capstone Project! Please have a look around, click on some buttons, and enjoy your stay.
                    When you're ready to see even more of my work, head on over to my
                    <a href="https://github.com/JoeyScottSchronce" target="_blank" rel="noopener noreferrer" alt='GitHub account link'> GitHub Portfolio </a>
                    and check out what else I've been up to. 
                </h4>
                    
            </div>
    
            </div>
        </section>
    </div>
    );
}

export default LandingPage;