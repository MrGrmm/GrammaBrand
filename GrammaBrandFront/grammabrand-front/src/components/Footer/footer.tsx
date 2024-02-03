import React from 'react';
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
        <img src="footer_logo_name.svg" alt="ION GRAMMA" />
      </div>
      <div className="footer__social-links">
        {/* Здесь должны быть иконки или текстовые ссылки на ваши социальные сети */}
        {/* Например: */}
        <a href="http://linkedin.com/in/yourprofile">LinkedIn</a>
        <a href="http://twitter.com/yourprofile">Twitter</a>
        <a href="http://facebook.com/yourprofile">Facebook</a>
      </div>
      <div className="footer__activation">
        {/* Элемент для активации, если это кнопка или ссылка */}
        <a href="/activation-link">Click to open link</a>
      </div>
    </footer>
  );
};

export default Footer;
