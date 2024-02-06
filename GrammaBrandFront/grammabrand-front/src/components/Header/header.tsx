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
      {/* Если у вас есть логотип как изображение */}
      <img src="header_logo_112x112.png" alt="Logo" className="header__logo-img" />
      <div className="header__logo">
        <span>ION GRAMMA</span> {/* Теперь текст обернут в span */}
      </div>
      <nav className="header__navigation">
        {/* Используйте компонент Link для внутренней навигации */}
        <Link to="/blog">Blog</Link>
        <button onClick={scrollToMyself}>About Me</button> {/* Обновленный обработчик для About Me */}
        <button onClick={scrollToExperience}>About exp</button>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
