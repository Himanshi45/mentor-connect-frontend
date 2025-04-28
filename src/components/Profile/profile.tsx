import React, { useState } from 'react';
import './profile.css';

const MentorProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Emily Johnson");
  const [email, setEmail] = useState("emily.johnson@example.com");
  const [about, setAbout] = useState("UI/UX Designer with 5 years of experience. Passionate about crafting user-friendly experiences.");
  const [experience, setExperience] = useState("5+ years of experience in UX/UI design, working with top-tier companies.");
  const [location, setLocation] = useState("San Francisco, CA");
  const [availability, setAvailability] = useState("Available for 10 hours/week");
  const [skills, setSkills] = useState(["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "User Research"]);
  const imageUrl = "https://randomuser.me/api/portraits/women/45.jpg";

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="profileCard">
        <img src={imageUrl} alt="Mentor Avatar" className="avatar" />

        {isEditing ? (
          <div className="editForm">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="inputField"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="inputField"
            />
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="About"
              className="textareaField"
            />
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience"
              className="inputField"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="inputField"
            />
            <input
              type="text"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="Availability"
              className="inputField"
            />
            <button className="saveButton" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <>
            <h2 className="name">{name}</h2>
            <p className="email">{email}</p>
            <p className="about">{about}</p>
            <p className="experience"><strong>Experience:</strong> {experience}</p>
            <p className="location"><strong>Location:</strong> {location}</p>
            <p className="availability"><strong>Availability:</strong> {availability}</p>
            <div className="skills">
              {skills.map((skill) => (
                <span key={skill} className="skillTag">
                  {skill}
                </span>
              ))}
            </div>
            <button className="editButton" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MentorProfile;
