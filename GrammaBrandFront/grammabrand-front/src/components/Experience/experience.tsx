import React, { RefObject } from 'react';
import './experience.css'; // Убедитесь, что путь до файла с CSS корректный

interface ExperienceProps {
  experienceRef: RefObject<HTMLDivElement>;
}

const Experience: React.FC<ExperienceProps> = ({ experienceRef }) => {

  // Используйте переданный ref вместо создания нового
  return (
    <div ref={experienceRef}>
      <div className='experience'>
        <h1>EXPERIENCE</h1>
        <div className="experience-item">
          <h2>FULLSTACK DEVELOPER</h2>
          <p>02.2022 — PRESENT (IT)</p>
          <ul>
            <li>Designed the database. VA/PIP</li>
            <li>Creating back-end (Django). VA/PIP</li>
            {/* Добавьте остальные элементы */}
          </ul>
          <h2>FULLSTACK DEVELOPER</h2>
          <p>02.2022 — PRESENT (IT)</p>
          <ul>
            <li>Designed the database. VA/PIP</li>
            <li>Creating back-end (Django). VA/PIP</li>
            {/* Добавьте остальные элементы */}
          </ul>
          <h2>FULLSTACK DEVELOPER</h2>
          <p>02.2022 — PRESENT (IT)</p>
          <ul>
            <li>Designed the database. VA/PIP</li>
            <li>Creating back-end (Django). VA/PIP</li>
            {/* Добавьте остальные элементы */}
          </ul>
        </div>
        {/* Добавьте остальные блоки опыта */}
      </div>
    </div>
  );
};

export default Experience;
