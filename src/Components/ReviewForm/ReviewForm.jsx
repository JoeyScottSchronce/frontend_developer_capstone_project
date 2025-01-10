import React, { useState } from 'react';
import './ReviewForm.css';

const currentReviews = [
    { id: 1, name: "Dr. Ben Howell", specialty: " General physician", feedback: ' Great work, very helpful', reviewGiven: true },
    { id: 2, name: "Dr. Ben Howell", specialty: " General physician", feedback: ' Great work, very helpful. Thanks for everything doctor.', reviewGiven: true },
    { id: 3, name: "Dr. Ben Howell", specialty: " General physician", feedback: ' Great work.', reviewGiven: true },
    { id: 4, name: "Dr. Ben Howell", specialty: " General physician", feedback: '', reviewGiven: false },

]

const ReviewForm = () => {
  const [reviews, setReviews] = useState(currentReviews);

  const handleFeedback = () => {
    alert(`Provide feedback for doctor`);
  };

  return (
    <div className='review-form-container'>
        <h1>Reviews</h1>
        <table>
            <thead>
            <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Specialty</th>
                <th className='provide-feedback'>Provide feedback</th>
                <th>Review Given</th>
                </tr>
            </thead>
            <tbody>
                {reviews.map((review, index) => (
                <tr key={review.id}>
                    <td>{index + 1}</td>
                    <td>{review.name}</td>
                    <td>{review.specialty}</td>
                    <td className='provide-feedback'>{review.feedback}</td>
                    <td>{review.reviewGiven ? 'Yes' : 'No'}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <button className='review-form-submit' onClick={() => handleFeedback()}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
