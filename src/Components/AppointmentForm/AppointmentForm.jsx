import React, { useState } from 'react';

function AppointmentForm({ doctorName, doctorSpeciality, onSubmit }) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [timeSlot, setTimeSlot] = useState(null);
  
    const handleSelection = (choice) => {
      setTimeSlot(choice);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
    };

    return(
        <form onSubmit={handleSubmit} className="">
        <div className="">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder='e.g. John Doe'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            placeholder='e.g. 8885551234'
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
};

export default AppointmentForm;