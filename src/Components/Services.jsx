import React from "react";
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {

    return(
        <div className="get_started_container">
            <div className="image-container">
                <Link to="/instant-consultation" className="link_box">
                    <img src={`${process.env.PUBLIC_URL}/service_image_1.jpg`} className="service_image" alt="instant consultation" />
                    <h4>Instant Consultation</h4>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/booking-consultation" className="link_box">
                <img src={`${process.env.PUBLIC_URL}/service_image_2.jpg`} className="service_image" alt="instant consultation" />
                    <h4>Booking Consultation</h4>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/SelfCheckup" className="link_box">
                <img src={`${process.env.PUBLIC_URL}/service_image_3.jpg`} className="service_image" alt="instant consultation" />
                    <h4>Self Checkup</h4>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/HealthTips" className="link_box">
                <img src={`${process.env.PUBLIC_URL}/service_image_4.jpg`} className="service_image" alt="instant consultation" />
                    <h4>Health Tips and Guildance</h4>
                </Link>
            </div>
        </div>
    )
};

export default Services;