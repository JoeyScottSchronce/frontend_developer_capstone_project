import React, { useState } from 'react';
import "./FindDoctorSearch.css";
import doctorSpecialties from './doctorSpecialties';
import { useNavigate, Navigate } from 'react-router-dom';

function FindDoctorSearch() {
    const [search, setSearch] = useState("");
    const [filteredSpecialties, setFilteredSpecialties] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);
        setFilteredSpecialties(doctorSpecialties.filter(specialty =>
            specialty.toLowerCase().includes(query)
        ));
    };

    const navigate = useNavigate();
    const handleDoctorSelect = (specialty) => {
        setSearch(specialty);
        navigate(`/booking-consultation?specialty=${specialty}`);
        window.location.reload();
    }

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="container">
            <h1>Search for a Doctor</h1>
            <input
                type='text'
                value={search}
                onChange={handleSearchChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Search specialties"
            />
            {isFocused && filteredSpecialties.length > 0 && (
                <ul>
                    {filteredSpecialties.map((specialty, index) => (
                        <li className="specialty" key={index} onMouseDown={() => handleDoctorSelect(specialty)}>{specialty}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FindDoctorSearch;
