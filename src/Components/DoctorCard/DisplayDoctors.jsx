import React from 'react';
import DoctorCard from './DoctorCard';
import "./DisplayDoctors.css"

const DoctorFiles = [
  { image:"https://pixabay.com/photos/doctor-gray-hair-experience-doctor-2337835/", name: "Dr. John Doe", speciality: "Cardiology", experience: 15, rating: 4.8 },
  { image:"https://pixabay.com/photos/doctor-hospital-medicine-crayfish-7261806/", name: "Dr. Jane Smith", speciality: "Dermatology", experience: 10, rating: 4.5 },
  { image:"https://pixabay.com/photos/woman-doctor-woman-doctor-medical-5321351/", name: "Dr. Emily Johnson", speciality: "Pediatrics", experience: 8, rating: 4.7 },
  { image:"https://pixabay.com/photos/doctor-patient-consultation-5710152/", name: "Dr. Michael Brown", speciality: "Neurology", experience: 12, rating: 4.6 },
  { image:"https://pixabay.com/photos/doctor-woman-professional-2157993/", name: "Dr. Sarah Davis", speciality: "Oncology", experience: 7, rating: 4.9 },
  { image:"https://pixabay.com/photos/doctor-patient-consultation-5710150/", name: "Dr. William Wilson", speciality: "Orthopedics", experience: 20, rating: 4.4 },
  { image:"https://pixabay.com/photos/nurse-medicine-doctor-hospital-2019420/", name: "Dr. Lisa Clark", speciality: "Endocrinology", experience: 9, rating: 4.3 },
  { image:"https://pixabay.com/photos/doctor-stethoscope-man-professional-5997504/", name: "Dr. James Martinez", speciality: "Gastroenterology", experience: 13, rating: 4.5 },
  { image:"https://pixabay.com/photos/doctor-physician-woman-stethoscope-6608006/", name: "Dr. Mary Anderson", speciality: "Ophthalmology", experience: 6, rating: 4.6 },
  { image:"https://pixabay.com/photos/doctor-surgeon-hospital-surgery-5707722/", name: "Dr. Robert Lewis", speciality: "Psychiatry", experience: 11, rating: 4.7 }
];

const DisplayDoctors = () => {
  return (
    <div className="doctor_list">
      {DoctorFiles.map((doctor, index) => (
        <DoctorCard
          key={index}
          image={doctor.image}
          name={doctor.name}
          speciality={doctor.speciality}
          experience={doctor.experience}
          rating={doctor.rating}
        />
      ))}
    </div>
  );
};

export default DisplayDoctors;
