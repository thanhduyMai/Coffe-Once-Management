import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import StaffList from './components/StaffList';


import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [section, setSection] = useState('');

  return (
    <Router>
      <div className="app min-h-screen flex flex-col">
        {user && <Header user={user} onLogout={() => { setUser(null); setSection(''); }} />}
        <div className="flex flex-1">
          {user && <Sidebar onSelect={setSection} user={user} />}
          <main className="main-content flex-1 p-6 bg-[#f5f5f5]">
            <Routes>
              <Route
                path="/"
                element={user ? <MainContent section={section} user={user} /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={<LoginPage setUser={setUser} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/stafflist" element={<StaffList />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
