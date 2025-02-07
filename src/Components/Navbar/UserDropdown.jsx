import React from "react";
import { Link } from "react-router-dom";
import "./UserDropdown.css";

function UserDropdown({ onItemClick }) {
    return (
        <div className="user-dropdown">
            <Link to="/frontend_developer_capstone_project/profile" onClick={onItemClick}>Profile</Link>
            <Link to="/frontend_developer_capstone_project/reports" onClick={onItemClick}>Reports</Link>
        </div>
    );
}

export default UserDropdown;
