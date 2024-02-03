import React from 'react';
import Header from './components/Header/header';
import Myself from './components/Myself/myself';
import Experience from './components/Experience/experience';
import Language from './components/Language/language';
import Footer from './components/Footer/footer';
import Education from './components/Education/education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Myself />
        <div className="vertical-line"></div>
        <div className="left-content">
          <Experience />
          <Education />
          {/* Другие компоненты левой части */}
        </div>
        <div className="right-content">
          <Language />
          {/* Другие компоненты правой части */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
