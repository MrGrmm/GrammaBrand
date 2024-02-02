import React from 'react';
import './header.css'; // Убедитесь, что путь до файла с CSS корректный

const Header = () => {
  return (
    <header className="header">
      {/* Если у вас есть логотип как изображение */}
      <img src="header_logo_112x112.png" alt="Logo" className="header__logo-img" />
      <div className="header__logo">ION GRAMMA</div> {/* Если логотип текстовый */}
      {/* Если у вас текстовый логотип */}
      {/* <div className="header__logo">ION GRAMMA</div> */}
      
      <nav className="header__navigation">
        {/* Элементы навигации */}
        <a href="/blog">Blog</a>
        <a href="/about-me">About me</a>
        <a href="/about-exp">About exp</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    
    </header>
  );
};

export default Header;
