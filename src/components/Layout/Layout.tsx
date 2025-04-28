// components/Layout/Layout.tsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Layout.css'; // Sidebar + Layout CSS

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="layout-wrapper">
      <aside className="sidebar">
        <div className="logo">🎓 MentorConnect</div>
        <nav>
          <ul>
            <li onClick={() => handleNavigation('/HomePage')}>🏠 Home</li>
            <li onClick={() => handleNavigation('/PostPage')}>✍️ Post</li>
            <li onClick={() => handleNavigation('/Meeting')}>📅 Meetings</li>
            <li onClick={() => handleNavigation('/Mentees')}>👥 Mentees</li>
            <li onClick={() => handleNavigation('/chat')}>💬 Chat</li>
            <li onClick={() => handleNavigation('/Profile')}>👤 Profile</li>
          </ul>
        </nav>
      </aside>

      <main className="layout-content">
        <Outlet /> {/* 👈 Very important */}
      </main>
    </div>
  );
};

export default Layout;
