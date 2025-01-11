import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children, setNotify }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
 //   const [doctorData, setDoctorData] = useState("");
    const [appointmentData, setAppointmentData] = useState("");

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
    //    const storedDoctorData = JSON.parse(sessionStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(sessionStorage.getItem('appointmentData'));
        
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
        
    //    if (storedDoctorData) {
    //        console.log('storedDoctorData is good')
    //        setDoctorData(storedDoctorData);
    //    }
        
        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
            setNotify(true);
        }
    }, [setNotify]);

    const handleCancellation = () => {
        setAppointmentData(undefined);
        setNotify(false);
    };

    useEffect(() => {
        setNotify(appointmentData !== "");
    }, [appointmentData, setNotify]);

    return (
        <>
        <div className='notification-container'>
            <Navbar />
            {children}
            { isLoggedIn && appointmentData && (
                <div className="notification">
                    <div className="notification-content">
                        <h3 className="notification-title">Appointment Details</h3>
                {/*        <p><strong>Doctor:</strong> {doctorData?.name}</p>
                        <p><strong>Specialty:</strong> {doctorData?.specialty}</p>      */}
                        <p><strong>Username:</strong> {username}</p>
                        <p><strong>Appointment Date:</strong> {appointmentData?.bookingDate}</p>
                        <p><strong>Time Slot:</strong> {appointmentData?.timeSlot}</p>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Notification;
