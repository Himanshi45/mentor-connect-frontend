// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectRoleCard from './components/SelectRoleCard';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'; 
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage/HomePage';
import Meeting from './components/Meeting/Meeting';
import PostPage from './components/Post/PostPage';
import Profile from "./components/Profile/profile";
import Layout from "./components/Layout/Layout";
import Mentees from "./components/Mentees/Mentees"
import Chat from "./components/chat/chat"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public pages without sidebar */}
        <Route path="/" element={<SelectRoleCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected / private pages with sidebar */}
        <Route path="/" element={<Layout />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/PostPage" element={<PostPage />} />
          <Route path="/Meeting" element={<Meeting />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Mentees" element={<Mentees />} />
          <Route path ="/Chat" element={<Chat/>}/>

          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
