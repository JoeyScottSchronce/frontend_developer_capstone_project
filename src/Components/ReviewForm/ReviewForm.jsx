import React, { useState } from 'react';
import { DoctorFiles } from '/DoctorCard/DisplayDoctors';
import './ReviewForm.css';

const data = DoctorFiles;

const currentReviews = [{ id: 1, name: "Dr. Ben Howell", specialty: " General physician", feedback: ' Great work, very helpful', reviewGiven: true }]

const ReviewForm = () => {
  const [reviews, setReviews] = useState(currentReviews);

  const handleFeedback = (id) => {
    alert(`Provide feedback for doctor with ID: ${id}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Doctor Name</th>
          <th>Doctor Specialty</th>
          <th>Provide feedback</th>
          <th>Review Given</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review, index) => (
          <tr key={review.id}>
            <td>{index + 1}</td>
            <td>{review.name}</td>
            <td>{review.specialty}</td>
            <td><button onClick={() => handleFeedback(review.id)}>Submit Review</button></td>
            <td>{review.reviewGiven ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewForm;
