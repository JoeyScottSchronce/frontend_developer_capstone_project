import React from 'react';
import './DoctorCard.css';
import DoctorCard from './DoctorCard.jsx';

const DoctorFiles = [
    { name: "Dr. John Doe", speciality: "Cardiology", experience: "15 years", rating: "4.8" },
    { name: "Dr. Jane Smith", speciality: "Dermatology", experience: "10 years", rating: "4.5" },
    { name: "Dr. Emily Johnson", speciality: "Pediatrics", experience: "8 years", rating: "4.7" },
    { name: "Dr. Michael Brown", speciality: "Neurology", experience: "12 years", rating: "4.6" },
    { name: "Dr. Sarah Davis", speciality: "Oncology", experience: "7 years", rating: "4.9" },
    { name: "Dr. William Wilson", speciality: "Orthopedics", experience: "20 years", rating: "4.4" },
    { name: "Dr. Lisa Clark", speciality: "Endocrinology", experience: "9 years", rating: "4.3" },
    { name: "Dr. James Martinez", speciality: "Gastroenterology", experience: "13 years", rating: "4.5" },
    { name: "Dr. Mary Anderson", speciality: "Ophthalmology", experience: "6 years", rating: "4.6" },
    { name: "Dr. Robert Lewis", speciality: "Psychiatry", experience: "11 years", rating: "4.7" }
];

function DoctorList() {
    return (
        <div>
            {DoctorFiles.map((doctor, index) => (
                <DoctorCard 
                    key={index}
                    name={doctor.name}
                    speciality={doctor.speciality}
                    experience={doctor.experience}
                    rating={doctor.rating}
                />
            ))}
        </div>
    );
}

export default DoctorList;
