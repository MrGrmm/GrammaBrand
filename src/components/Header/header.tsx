import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import './header.css';


interface HeaderProps {
  experienceRef: RefObject<HTMLDivElement>;
  myselfRef: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ experienceRef, myselfRef }) => {
  // Функция для прокрутки к компоненту Experience
  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Функция для прокрутки к компоненту Myself
  const scrollToMyself = () => {
    myselfRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <Link to="/">
        <img src="header_logo_112x112.png" alt="Logo" className="header__logo_112x112" />
      </Link>
      <div className="header_logo">
        <div className="logo_part_s">ION</div>
        <div className="logo_part_f">GRAMMA</div>
      </div>
      <nav className="header__navigation">
        {/* Используйте компонент Link для внутренней навигации */}
        <Link to="/blog" className="blog">Blog</Link>
        <button className='about_me' onClick={scrollToMyself}>About me</button> {/* Обновленный обработчик для About Me */}
        <button className='about_exp' onClick={scrollToExperience}>About exp</button>
        <Link to="/projects" className="projects">Projects</Link>
        <Link to="/contact" className="contact">Contact</Link>
      </nav>

    </header>
  );
};

export default Header;
