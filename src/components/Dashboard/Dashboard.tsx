import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have a CSS file for styling

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
            <li onClick={() => handleNavigation('/PostPage')}>✍️ Post</li>
            <li onClick={() => handleNavigation('/Meeting')}>📅 Meetings</li>
            <li>👥 Mentees</li>
            <li onClick={() => handleNavigation('/Chat')}>💬 Chat</li>
            <li>👤 Profile</li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-content">
        <h2>Welcome back, Himanshi Rathore!</h2>

        {/* Stats Cards */}
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

        {/* Activity Chart */}
        <div className="chart-section">
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="posts" />
            <Line type="monotone" dataKey="meetings" />
          </LineChart>
        </div>

        {/* Activity Log */}
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

        {/* How It Works */}
        <section className="how-it-works-section">
          <h2>How MentorConnect Works</h2>
          <div className="steps-container">
            <div className="step">
              <h3>1. Sign Up</h3>
              <p>Create your profile with your goals and interests.</p>
            </div>
            <div className="step">
              <h3>2. Match with a Mentor</h3>
              <p>We connect you with mentors who fit your needs.</p>
            </div>
            <div className="step">
              <h3>3. Start Learning</h3>
              <p>Schedule sessions, chat, and grow with expert guidance.</p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="success-stories-section">
          <h2>Success Stories</h2>
          <div className="story-card">
            <h3>Priya Sharma</h3>
            <p>From unsure graduate to full-time UI/UX Designer at a top firm, thanks to MentorConnect’s design mentorship.</p>
          </div>
          <div className="story-card">
            <h3>Rahul Mehta</h3>
            <p>Got his first Data Science job after receiving one-on-one mentoring on projects and interview prep.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h4>Is MentorConnect free?</h4>
            <p>Basic access is free. Premium plans offer advanced features and exclusive mentors.</p>
          </div>

          <div className="faq-item">
            <h4>Can I choose my mentor?</h4>
            <p>Yes! You can explore mentor profiles and choose the one that fits your goals best.</p>
          </div>

          <div className="faq-item">
            <h4>How do I schedule a session?</h4>
            <p>Once matched, go to the Meetings tab, pick a slot on the calendar, and confirm—it’s that easy!</p>
          </div>

          <div className="faq-item">
            <h4>What if I need to reschedule?</h4>
            <p>You can reschedule up to 24 hours before your session from the Meetings page without any penalty.</p>
          </div>

          <div className="faq-item">
            <h4>Do you offer group workshops?</h4>
            <p>Yes—check our Events page for upcoming group workshops and webinars hosted by top mentors.</p>
          </div>
        </section>


        {/* Newsletter */}
        <section className="newsletter-section">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for mentoring tips, events, and new features!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        {/* Partners Section with Horizontal Scroll */}
        <section className="partners-section">
          <h2>Our Trusted Partners</h2>
          <div className="partners-container flex overflow-x-auto space-x-6 py-4">
            {[
              {
                img: 'https://img.freepik.com/premium-photo/portrait-stylish-modern-young-men-background-city_160672-36431.jpg?w=740',
                desc: 'TechGenius - Empowering young coders with real-world projects and internships.'
              },
              {
                img: 'https://img.freepik.com/premium-photo/man-with-his-arms-crossed-front-blue-background_1018793-1066.jpg',
                desc: 'CareerBridge - Career acceleration support for college students across India.'
              },
              {
                img: 'https://img.freepik.com/free-photo/fashion-girl-walking-sspring-park_1157-21329.jpg',
                desc: 'SkillSprint - Upskilling platform for emerging technologies and digital tools.'
              },
              {
                img: 'https://img.freepik.com/premium-photo/portrait-stylish-modern-young-men-background-city_160672-36431.jpg?w=740',
                desc: 'TechGenius - Empowering young coders with real-world projects and internships.'
              },
              {
                img: 'https://img.freepik.com/premium-photo/portrait-stylish-modern-young-men-background-city_160672-36431.jpg?w=740',
                desc: 'TechGenius - Empowering young coders with real-world projects and internships.'
              },
              {
                img: 'https://img.freepik.com/premium-photo/man-with-his-arms-crossed-front-blue-background_1018793-1066.jpg',
                desc: 'CareerBridge - Career acceleration support for college students across India.'
              },
            ].map((partner, idx) => (
              <div key={idx} className="partner-card flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg p-4">
                <img src={partner.img} alt={`Partner ${idx + 1}`} className="w-full h-40 object-cover rounded-xl mb-4" />
                <p>{partner.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
