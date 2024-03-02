import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Импортируем Axios
import './footer.css'; // Убедитесь, что файл стилей подключен правильно


// Определите типы для данных MySelf
interface MySelfData {
  id: number;
  full_name: string;
  email: string;
  address: string;
  telephone_number: string;
  about_myself?: string; // сделайте это поле необязательным, если оно может отсутствовать
  stack?: string; // сделайте это поле необязательным, если оно может отсутствовать
}
// Дополните интерфейс для данных MyLink
interface MyLinkData {
  linkedin: string;
  github: string;
  telegram: string;
  facebook?: string
  // Дополните с остальными полями, если они есть
}

const Footer = () => {
  const [mySelfData, setMySelfData] = useState<MySelfData | null>(null);
  const [myLinkData, setMyLinkData] = useState<MyLinkData | null>(null); // Состояние для данных MyLink

  useEffect(() => {
    async function fetchData() {
      try {
        // Получаем данные MySelf
        const selfResponse = await axios.get('http://127.0.0.1:8000/api/myself/');
        setMySelfData(selfResponse.data[0]);

        // Получаем данные MyLink
        const linksResponse = await axios.get('http://127.0.0.1:8000/api/mylink/'); // Предполагается, что URL вашего API такой
        setMyLinkData(linksResponse.data[0]); // Предполагается, что API возвращает массив
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Вызываем функцию для получения данных о себе при загрузке компонента
  }, []);
  return (
    <footer className="footer">
      <div className="footer__contact-info">
        {mySelfData && (
          <div>
            <p>{mySelfData.address}</p>
            <p>{mySelfData.email}</p>
            <p>+{mySelfData.telephone_number}</p>
          </div>
        )}
      </div>
      <div className='footer__contact-img'>
        <img src="location.svg" alt='arrow'></img>
        <img src="gmail.svg" alt='arrow'></img>
        <img src="telephone.svg" alt='arrow'></img>
      </div>
      <div className="footer__logo">
        <Link to="/">
          <img src="footer_logo_name.svg" alt="ION GRAMMA" />
        </Link>
      </div>
      <div className="footer__social-links">
      {myLinkData && (
          <div>
            <a href={myLinkData.linkedin} target="_blank" rel="noopener noreferrer">
             <img src="linkedin.svg" alt="LinkedIn" />
            </a>
            <a href={myLinkData.github} target="_blank" rel="noopener noreferrer">
              <img src="github.svg" alt="GitHub" />
            </a>
            <a href={myLinkData.telegram} target="_blank" rel="noopener noreferrer">
              <img src="telegram.svg" alt="Telegram" />
            </a>
          </div>
        )}
      </div>
      <div className="footer__arrow">
        <h6>Click to open link</h6>
        <img src="right-arrow.svg" alt='arrow'></img>
      </div>
    </footer>
  );
};

export default Footer;
