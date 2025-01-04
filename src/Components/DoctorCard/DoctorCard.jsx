import React from 'react';
import './DoctorCard.css';

function DoctorCard({ image, name, speciality, experience, rating }) {
    return (
        <div className='container'>
            <div><img src={image} alt="doctor" className="doctor_image"/></div>
            <div className="name">{name}</div>
            <div>{speciality}</div>
            <div>{experience} years of experience</div>
            <div>Ratings: {rating}</div>
            <button className='book-appointment-btn'>
                <div>Book Appointment</div>
                <div>No Booking Fee</div>
            </button>
        </div>
    );
}

export default DoctorCard;
