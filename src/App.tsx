import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Blog from './routes/Blog';
import BlogPost from './routes/BlogPost';
import Contact from './routes/Contact';
import Experience from './routes/Experience';
import NotFound from './routes/NotFound';
import Work from './routes/Work';

const App = () => (
  <Routes>
    <Route path="/blog/:blogId" element={<BlogPost />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/work" element={<Work />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/" element={<Blog />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
