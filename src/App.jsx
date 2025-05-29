import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import ServicesPage from './pages/services/ServicesPage';
import ContactPage from './pages/contactForm/contactForm';
import EmployeeLoginPage from './pages/employeeLogin/EmployeeLoginPage';  
import NotFoundPage from './pages/notFound/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/employee-login" element={<EmployeeLoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
