import React, { useState } from 'react';
import "./FindDoctorSearch.css";

const doctorSpecialties = ["General Care", "Ear Nose and Throat", "Dermatologist"];

function FindDoctorSearch() {
    const [search, setSearch] = useState("");
    const [filteredSpecialties, setFilteredSpecialties] = useState(doctorSpecialties);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);
        setFilteredSpecialties(doctorSpecialties.filter(specialty => 
            specialty.toLowerCase().includes(query)
        ));
    };

    return (
        <div className="container">
            <h1>Search for a Doctor</h1>
            <input
                type='text'
                value={search}
                onChange={handleSearchChange}
                placeholder="Search specialties"
            />
            <ul>
                {filteredSpecialties.map((specialty, index) => (
                    <li key={index}>{specialty}</li>
                ))}
            </ul>
        </div>
    );
}

export default FindDoctorSearch;
