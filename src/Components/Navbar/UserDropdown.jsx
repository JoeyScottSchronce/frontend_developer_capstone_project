import React from "react";
import { Link } from "react-router-dom";
import "./UserDropdown.css";

function UserDropdown({ onItemClick }) {
    return (
        <div className="user-dropdown">
            <Link to="/Profile" onClick={onItemClick}>Profile</Link>
            <Link to="/Reports" onClick={onItemClick}>Reports</Link>
        </div>
    );
}

export default UserDropdown;
