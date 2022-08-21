import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import WorkPage from './pages/WorkPage';

const App = () => (
  <Routes>
    <Route path="/" element={<BlogPage />} />
    <Route path="blog" element={<BlogPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="experience" element={<ExperiencePage />} />
    <Route path="work" element={<WorkPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="*" element={<div>Nothing is going on here...</div>} />
  </Routes>
);

export default App;
