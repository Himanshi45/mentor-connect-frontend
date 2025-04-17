import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have a CSS file for styling
import HomePage from '../HomePage/HomePage';
import Meeting from '../Meeting/Meeting';

const data = [
  { day: 1, posts: 0, meetings: 0 },
  { day: 2, posts: 0, meetings: 0 },
  { day: 11, posts: 0, meetings: 1 },
  { day: 12, posts: 2, meetings: 3 },
];

const activities = [
  { type: 'LOGIN', detail: 'User signed in', time: '12th June 2022, 7:05 pm' },
  { type: 'COMMENT CREATED', detail: 'Posted a new comment', time: '12th June 2022, 3:27 pm' },
  { type: 'LOGIN', detail: 'User signed in', time: '12th June 2022, 2:45 pm' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="logo">🎓 Mentor</div>
        <nav>
          <ul>
            <li onClick={() => handleNavigation('/HomePage')}>🏠 Home</li>
            <li>✍️ Post</li>
            <li onClick={() => handleNavigation('/Meeting')}>📅 Meetings</li>
            <li>👥 Mentees</li>
            <li>💬 Chat</li>
            <li>👤 Profile</li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-content">
        <h2>Welcome back, Himanshi Rathore!</h2>

        <div className="stats">
          <div className="card red">
            <span style={{ fontSize: '1.5rem' }}>🎓</span>
            <div>
              <h3>1</h3>
              <p>Total Mentees</p>
            </div>
          </div>
          <div className="card purple">
            <span style={{ fontSize: '1.5rem' }}>✍️</span>
            <div>
              <h3>5</h3>
              <p>Total Posts</p>
            </div>
          </div>
          <div className="card blue">
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <div>
              <h3>3</h3>
              <p>Total Comments</p>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="posts" stroke="#8884d8" />
            <Line type="monotone" dataKey="meetings" stroke="#82ca9d" />
          </LineChart>
        </div>

        <div className="activity-log">
          <h4>Activities last 7 days</h4>
          <ul>
            {activities.map((act, i) => (
              <li key={i}>
                <strong>{act.type}</strong>
                <p>{act.detail}</p>
                <span>{act.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
