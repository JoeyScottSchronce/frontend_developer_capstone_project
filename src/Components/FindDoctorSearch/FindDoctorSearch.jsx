import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';


const searchOptions = [
    'Dentist',
    'Gynecologist/obstetrician',
    'General Physician',
    'Dermatologist',
    'Ear-nose-throat (ent) Specialist',
    'Homeopath',
    'Ayurveda'
]

const FindDoctorSearch = () => {
    const [seeResults, setSeeResults] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(searchOptions);
    const navigate = useNavigate();

    const handleSearch = (speciality) => {
        setSearchDoctor(speciality);
        setSeeResults(true);
        navigate(`/booking-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className='finddoctor'>
            <center>
                <h1>Search for a Doctor</h1>
                <div className="home-search-container" 
                style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div className="doctor-search-box">

                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search for a doctor"
                            onFocus={() => setSeeResults(false)}
                            onBlur={() => setSeeResults(true)}
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />
                        
                        <div className="search-doctor-input-results" hidden={seeResults}>
                            {
                                specialities.map(speciality =>
                                <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleSearch(speciality)}>
                                    <span>{speciality}</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearch