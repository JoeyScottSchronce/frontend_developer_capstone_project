import React from "react";
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {

    return(
        <div className="get_started_container">
            <div className="instant">
                <Link to="/instant-consultation">
                    Instant Consultation
                </Link>
            </div>
            <div className="booking">
                <Link to="/booking-consultation">
                    Book an Appointment
                </Link>
            </div>
                    <div className="self_checkup">
                <Link to="/self-checkup">
                    Self Checkup
                </Link>
            </div>
            <div className="tips_and_guildance">
                <Link to="/tips_and_guildance">
                    Health Tips and Guildance
                </Link>
            </div>
        </div>
    )
};

export default Services;