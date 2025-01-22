import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Preferences from './components/Preferences';
import ChangePassword from './components/Password';
import AccountSettings from './components/Account';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/account-settings">Account Settings</Link>
        <Link to="/change-password">Change Password</Link>
        <Link to="/preferences">Preferences</Link>
      </nav>
      <Routes>
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
};

export default App;