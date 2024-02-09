import Header from './components/Header/header';
import Myself from './components/Myself/myself';
import Experience from './components/Experience/experience';
import Language from './components/Language/language';
import Footer from './components/Footer/footer';
import Education from './components/Education/education';
import Blog from './components/Blog/blog';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const myselfRef = useRef<HTMLDivElement>(null);


  return (
      <div className="App">
        {/* Передаем оба ref в Header */}
        <Header experienceRef={experienceRef} myselfRef={myselfRef} />
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <main className="main">
          {/* Привязываем ref к Myself */}
          <Myself myselfRef={myselfRef} />        <div className="vertical-line"></div>
        <div className="education">
          <Education />
        </div>
        <Experience experienceRef={experienceRef} /> {/* Передаем ref в Experience */}
        <div className="language">
          <Language />
        </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;