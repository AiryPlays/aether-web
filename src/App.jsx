import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Splash from './pages/Splash.jsx';
import Careers from './components/Careers';
import CareersCompany from './pages/CareersCompany.jsx';
import Application from './pages/Application.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/:companyId" element={<CareersCompany />} />
      <Route path="/careers/:companyId/:positionId" element={<Application />} />
    </Routes>
  );
}

export default App;
