import React from 'react';
import './education.css'; // Предполагается, что у вас есть файл CSS со стилями для Education

const Education = () => {
  return (
    <div className='education'>
      <h1>EDUCATION</h1>
      <div className="education-section">
        <h2>GEEKBRAINS</h2>
        <p>Junior Developer</p>
        <p>09.2022 — 04.2023</p>
      </div>
      <div className="online-trainings">
        <h2>ONLINE TRAININGS</h2>
        <ul>
          <li>aiogram</li>
          <li>Django</li>
          <li>JavaScript</li>
          {/* Добавьте остальные элементы */}
        </ul>
      </div>
      <div className="education-dates">
        <p>04.2023 — PRESENT</p>
      </div>
    </div>
  );
};

export default Education;
