import React from 'react';
import './DoctorCard.css';

function DoctorCard ({ name, speciality, experience, ratings }) {
    
    return (
        <div className='container'>
            <div>{name}</div>
            <div>{speciality}</div>
            <div>{experience} years experience</div>
            <div>Ratings: {ratings}</div>
        </div>
    );
};

export default DoctorCard;
