/**
 * This Routes can be use to set the individual pages on clicking any tag or link.
 */

import React from 'react'
import { Routes, Route } from "react-router-dom";

import About from '../components/page/About'
import Contact from '../components/page/Contact';
import Developer from "../components/page/Developer";
import Gallery from "../components/page/Gallery";
import Hero from "../components/page/Hero";
import NoMatch from "../components/page/NoMatch";
import Projects from "../components/page/Projects";
import Resume from "../components/page/Resume";
import Students from "../components/page/Students";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="about" element={<About />} />
      <Route path="developer" element={<Developer />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
      <Route path="students" element={<Students />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
export default PublicRoutes; 