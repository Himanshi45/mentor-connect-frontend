import React, { useState } from 'react';
import './Mentees.css'; // We'll improve CSS too.

const MentorRequests: React.FC = () => {
  const [mentees, setMentees] = useState([
    {
      name: 'John Doe',
      age: 22,
      location: 'New York, NY',
      email: 'john.doe@example.com',
      skills: ['JavaScript', 'React', 'Node.js'],
      bio: 'Aspiring front-end developer with a passion for clean, efficient code.',
      imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      issue: 'Struggling with React state management.',
      meetingRequested: true,
      meetingTime: '',
      meetingLink: '',
      meetingAccepted: false,
    },
    {
      name: 'Jane Smith',
      age: 24,
      location: 'Los Angeles, CA',
      email: 'jane.smith@example.com',
      skills: ['Python', 'Machine Learning', 'Data Science'],
      bio: 'Data scientist with a background in AI and machine learning research.',
      imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
      issue: 'Need guidance on ML model deployment.',
      meetingRequested: true,
      meetingTime: '',
      meetingLink: '',
      meetingAccepted: false,
    },
    {
      name: 'Michael Brown',
      age: 25,
      location: 'Chicago, IL',
      email: 'michael.brown@example.com',
      skills: ['Java', 'Spring Boot', 'SQL'],
      bio: 'Backend developer focusing on enterprise applications.',
      imageUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
      issue: 'Need help with database optimization.',
      meetingRequested: false,
      meetingTime: '',
      meetingLink: '',
      meetingAccepted: false,
    },
    {
      name: 'Sarah Williams',
      age: 21,
      location: 'San Francisco, CA',
      email: 'sarah.williams@example.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      bio: 'Junior web developer with a passion for responsive design.',
      imageUrl: 'https://randomuser.me/api/portraits/women/47.jpg',
      issue: 'Struggling with responsive layouts.',
      meetingRequested: false,
      meetingTime: '',
      meetingLink: '',
      meetingAccepted: false,
    },
  ]);

  const [successMessage, setSuccessMessage] = useState('');

  const acceptRequest = (index: number) => {
    const updatedMentees = [...mentees];
    updatedMentees[index].meetingRequested = false;
    updatedMentees[index].meetingAccepted = true;
    setMentees(updatedMentees);
    setSuccessMessage(`Meeting link sent successfully to ${updatedMentees[index].name}!`);

    // Clear the success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="requestsContainer">
      <h2 className="requestsTitle">Mentee Profiles & Meeting Requests</h2>
      
      {successMessage && <div className="successMessage">{successMessage}</div>}

      <div className="requestsList">
        {mentees.map((mentee, index) => (
          <div key={index} className="menteeCard">
            <img src={mentee.imageUrl} alt={mentee.name} className="menteeAvatar" />
            <h3 className="menteeName">{mentee.name}</h3>
            <p className="menteeBio">{mentee.bio}</p>
            <div className="menteeDetails">
              <p><strong>Location:</strong> {mentee.location}</p>
              <p><strong>Skills:</strong> {mentee.skills.join(', ')}</p>
              <p><strong>Email:</strong> {mentee.email}</p>
              <p><strong>Issue:</strong> {mentee.issue}</p>
            </div>

            {!mentee.meetingAccepted && (
              <div className="acceptMeeting">
                <input
                  type="datetime-local"
                  value={mentee.meetingTime}
                  onChange={(e) => setMentees(
                    mentees.map((item, idx) =>
                      idx === index ? { ...item, meetingTime: e.target.value } : item
                    )
                  )}
                />
                <input
                  type="url"
                  placeholder="Meeting Link"
                  value={mentee.meetingLink}
                  onChange={(e) => setMentees(
                    mentees.map((item, idx) =>
                      idx === index ? { ...item, meetingLink: e.target.value } : item
                    )
                  )}
                />
                <button
                  onClick={() => acceptRequest(index)}
                  className="acceptButton"
                  disabled={!mentee.meetingTime || !mentee.meetingLink}
                >
                  Accept Meeting
                </button>
              </div>
            )}

            {mentee.meetingAccepted && (
              <div className="meetingDetails">
                <p><strong>Meeting Scheduled:</strong> {mentee.meetingTime}</p>
                <p><strong>Meeting Link:</strong> <a href={mentee.meetingLink} target="_blank" rel="noopener noreferrer">Join Here</a></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorRequests;
