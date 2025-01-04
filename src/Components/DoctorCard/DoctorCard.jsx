import React from 'react';
import './DoctorCard.css';

function DoctorCard({ name, speciality, experience, rating }) {
    return (
        <div className='container'>
            <div>{name}</div>
            <div>{speciality}</div>
            <div>{experience} years experience</div>
            <div>Ratings: {rating}</div>
            <div>
                <button className='book-appointment-btn'>
                    <div>Book Appointment</div>
                    <div>No Booking Fee</div>
                </button>
            </div>
        </div>
    );
}

export default DoctorCard;
