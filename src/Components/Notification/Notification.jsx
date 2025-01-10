import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState("");
    const [appointmentData, setAppointmentData] = useState("");
    const [notify, setNotify] = useState(false);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(sessionStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(sessionStorage.getItem('appointmentData'));
        
        if (storedUsername) {  //confirmed
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
        
        if (storedDoctorData) {
            console.log('storedDoctorData is good')
            setDoctorData(storedDoctorData);
        }
        
        if (storedAppointmentData) {
            console.log('storedAppointmentData is good')
            setAppointmentData(storedAppointmentData);
            setNotify(true);
        }
    }, [isLoggedIn, username, doctorData, appointmentData]);

    const handleCancellation = () => {
        setAppointmentData(undefined);
        setNotify(false);
    };

    useEffect(() => {
        setNotify(appointmentData !== "");
    }, [appointmentData]);

    return (
        <>
        <h1 style={{ marginTop: '150px', border: '2px solid red', padding: '10px' }}>Testing one</h1>
        <div className='notification-container'>
        <h1 style={{ border: '2px solid red', padding: '10px' }}>Testing two</h1>
            <Navbar />
            {children}
            { isLoggedIn && appointmentData && notify && (
                <div className="notification">
                    <h1 style={{ border: '2px solid red', padding: '10px' }}>Testing three</h1>
                    <div className="notification-content">
                        <h3 className="notification-title">Appointment Details</h3>
                {/*        <p><strong>Doctor:</strong> {doctorData?.name}</p>
                        <p><strong>Specialty:</strong> {doctorData?.specialty}</p>      */}
                        <p><strong>Username:</strong> {username}</p>
                        <p><strong>Appointment Date:</strong> {appointmentData?.bookingDate}</p>
                        <p><strong>Time Slot:</strong> {appointmentData?.timeSlot}</p>
                        <button className="cancel-button" onClick={handleCancellation}>Cancel Booking</button>
                    </div>
                </div>
            )}
            <h1 style={{ border: '2px solid red', padding: '10px' }}>Testing four</h1>
        </div>
        </>
    );
};

export default Notification;
