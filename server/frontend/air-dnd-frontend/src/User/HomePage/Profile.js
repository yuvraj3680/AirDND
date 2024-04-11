import React, { useState } from 'react';
import './profile.css'; // Import your CSS file

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [showProfile, setShowProfile] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", { name, email, password, mobile });
        setIsEditing(false);
    };

    const handleShowProfile = () => {
        setShowProfile(true);
    };

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <button className="show-profile-btn" onClick={handleShowProfile}>Show Profile</button>
            {showProfile && (
                <div>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Password:</strong> {password}</p>
                    <p><strong>Mobile Number:</strong> {mobile}</p>
                </div>
            )}
            {isEditing && (
                <form onSubmit={handleSubmit} className="profile-form">
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />

                    <label htmlFor="mobile">Mobile Number:</label><br />
                    <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" value={mobile} onChange={(e) => setMobile(e.target.value)} required /><br /><br />

                    <input type="submit" value="Submit" className="submit-btn" />
                </form>
            )}
        </div>
    );
};

export default ProfilePage;
