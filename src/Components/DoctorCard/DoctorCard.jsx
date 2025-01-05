import React, { useState } from 'react';
import './DoctorCard.css';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';
import AppointmentForm from '../AppointmentForm/AppointmentForm'


function DoctorCard({ image, name, speciality, experience, rating }) {
    const [showForm, setShowForm] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const handleBooking = () => {
        setShowForm(true);
    };

    const handleCancel = (appointmentId) => {
        const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);
    };

    const handleSubmit = (appointmentData) => {
        const newAppointment = {
            id: uuidv4(),
            ...appointmentData,
        };
        
        const updatedAppointments = [...appointments, newAppointment];
        setAppointments(updatedAppointments);
        setShowForm(false);
    };

    return (
        <div className='container'>
            <div>
                <div><img src={image} alt="doctor" className="doctor_image"/></div>
                <div className="name">{name}</div>
                <div>{speciality}</div>
                <div>{experience} years of experience</div>
                <div>Ratings: {rating}</div>
            </div>    

            <div className="">
                <Popup
                    trigger={
                        <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
                            {appointments.length > 0 ? (
                                <div>Cancel Appointment</div>
                            ) : (
                                <div>Book Appointment</div>
                            )}
                            <div>No Booking Fee</div>
                        </button>
                    }

                    modal
                    open={showForm}
                    onClose={() => setShowForm(false)}
                >

                    {(close) => (
                        <div className="" style={{ height: '80vh', overflow: 'scroll' }}>
                            <div>
                                <div><img src={image} alt="doctor" className="doctor_image"/></div>
                                <div className="name">{name}</div>
                                <div>{speciality}</div>
                                <div>{experience} years of experience</div>
                                <div>Ratings: {rating}</div>
                            </div>
                            
                            {appointments.length > 0 ? (
                                <>
                                    <h3>Appointment Booked!</h3>
                                    {appointments.map((appointment) => (
                                        <div className="" key={appointment.id}>
                                            <p>Name: {appointment.name}</p>
                                            <p>Phone Number: {appointment.phoneNumber}</p>
                                            <p>Date of Appointment: {appointment.bookingDate}</p>
                                            <p>Time Slot: {appointment.timeSlot}</p>
                                            <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleSubmit} />
                            )}
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    );
}

export default DoctorCard;
