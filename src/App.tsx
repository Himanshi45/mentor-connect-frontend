import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectRoleCard from './components/SelectRoleCard';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'; 
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage/HomePage';
import Meeting from './components/Meeting/Meeting';
import PostPage from './components/Post/PostPage';
import Chat from './components/chat/chat';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectRoleCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/PostPage" element={<PostPage />} />
        <Route path="/chat" element={<Chat />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
