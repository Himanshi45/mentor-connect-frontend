import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './SelectRoleCard.css';

type Role = 'Admin' | 'Mentor' | 'Mentee';

interface Props {
  onNext?: (selectedRole: Role) => void;
}

const SelectRoleCard: React.FC<Props> = ({ onNext }) => {
  const [selectedRole, setSelectedRole] = useState<Role | ''>('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value as Role);
  };

  const handleNext = () => {
    if (selectedRole) {
      if (onNext) {
        onNext(selectedRole);
      }
      // Navigate to the SignIn page for Mentor or Admin
      navigate('/signin'); // Use navigate instead of history.push
    }
  };

  return (
    <div className="containerr">
    <div className="left-section">
        <h1 className="welcome-text">Welcome to Mentoring System</h1>
        <img
          src="https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148896824.jpg?t=st=1744871695~exp=1744875295~hmac=742e6dace4724406fb3b6b26738b9b3e59c93ff1278a05f358101ef0b0863a10&w=826"
          alt="Student Mentoring"
          className="fixed-image"
        />
      </div>
    <div className="right-container">
      <h2 className="role-title">Select your role</h2>
      <div className="role-options">
        {['Admin', 'Mentor', 'Mentee'].map((role) => (
          <label key={role} className="radio-label">
            <input
              type="radio"
              value={role}
              checked={selectedRole === role}
              onChange={handleChange}
              className="radio-input"
            />
            {role}
          </label>
        ))}
      </div>
      <button
        className="next-button"
        disabled={!selectedRole}
        onClick={handleNext}
      >
        Next →
      </button>
    </div>
    </div>
  );
};

export default SelectRoleCard;
