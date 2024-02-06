import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Убедитесь, что файл стилей подключен правильно

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact-info">
        <p>Italia, Venice, Mestre</p>
        <p>gramma1997ion@gmail.com</p>
        <p>+39555459823</p>
      </div>
      <div className="footer__logo">
        <Link to="/">
          <img src="footer_logo_name.svg" alt="ION GRAMMA" />
        </Link>
      </div>
      <div className="footer__social-links">
        {/* Здесь должны быть иконки или текстовые ссылки на ваши социальные сети */}
        {/* Например: */}
        <a href="https://www.linkedin.com/in/ion-gramma-74516b29a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/MrGrmm/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="http://t.me/MrGrmm/" target="_blank" rel="noopener noreferrer">Telegram</a>
      </div>
      <div className="footer__activation">
        {/* Элемент для активации, если это кнопка или ссылка */}
        <a href="/activation-link">Click to open link</a>
      </div>
    </footer>
  );
};

export default Footer;
