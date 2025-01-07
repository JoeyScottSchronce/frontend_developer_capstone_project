import React from 'react';
import DoctorCard from './DoctorCard';
import "./DisplayDoctors.css"

export const DoctorFiles = [
    { image: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_1280.png", name: "Dr. John Doe", speciality: "Dentist", experience: 15, rating: 4.8 },
    { image: "https://cdn.pixabay.com/photo/2023/07/03/13/13/ai-generated-8104159_1280.jpg", name: "Dr. Jane Smith", speciality: "Gynecologist/Obstetrician", experience: 10, rating: 4.5 },
    { image: "https://cdn.pixabay.com/photo/2024/08/13/11/57/ai-generated-8965819_1280.png", name: "Dr. Emily Johnson", speciality: "General Physician", experience: 8, rating: 4.7 },
    { image: "https://cdn.pixabay.com/photo/2023/12/15/18/32/ai-generated-8451270_960_720.png", name: "Dr. Michael Brown", speciality: "Dermatologist", experience: 12, rating: 4.6 },
    { image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578393_960_720.png", name: "Dr. Sarah Davis", speciality: "Ear-Nose-Throat (ENT) Specialist", experience: 7, rating: 4.9 },
    { image: "https://cdn.pixabay.com/photo/2024/08/13/11/42/ai-generated-8965801_1280.png", name: "Dr. William Wilson", speciality: "Homeopath", experience: 20, rating: 4.4 },
    { image: "https://cdn.pixabay.com/photo/2024/03/29/03/30/ai-generated-8662131_960_720.png", name: "Dr. Lisa Clark", speciality: "Ayurveda", experience: 9, rating: 4.3 },
    { image: "https://cdn.pixabay.com/photo/2023/12/15/18/40/ai-generated-8451277_960_720.png", name: "Dr. James Martinez", speciality: "Dermatologist", experience: 13, rating: 4.5 },
    { image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578391_960_720.png", name: "Dr. Mary Anderson", speciality: "General Physician", experience: 6, rating: 4.6 },
    { image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578389_960_720.png", name: "Dr. Robert Lewis", speciality: "Homeopath", experience: 11, rating: 4.7 }
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
