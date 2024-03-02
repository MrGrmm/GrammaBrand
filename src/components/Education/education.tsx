import React, { useState, useEffect, RefObject } from 'react';
import axios from 'axios';
import './education.css'; // Предполагается, что у вас есть файл CSS со стилями для Education


interface EducationProps {
  educationRef?: RefObject<HTMLDivElement>;
}
// Определите типы для данных MySelf
interface EducationData {
  institution: string;
  degree?: string;
  start_date: string;
  end_date: string;
  description: string; // сделайте это поле необязательным, если оно может отсутствовать
}


const Education: React.FC<EducationProps> = ({ educationRef }) => {
  const [educationData_a, setEducationData_a] = useState<EducationData | null>(null);
  const [educationData_b, setEducationData_b] = useState<EducationData | null>(null);

  const createListItems = (input: string | undefined) => {
    if (!input) return null;
    return input.split(',').map((item, index) => (
      <li key={index}>{item.trim()}</li>
    ));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
                // Получаем данные MySelf
        const educationResponse_a = await axios.get('http://127.0.0.1:8000/api/education/');
        setEducationData_a(educationResponse_a.data[0]);

        const educationResponse_b = await axios.get('http://127.0.0.1:8000/api/education/');
        setEducationData_b(educationResponse_b.data[1]);

      } catch (error) {
        console.error('There was an error fetching the myself data', error);
      }
    };

    fetchData();
  }, []);


  const institution_a = educationData_a?.institution
  const degree_a = educationData_a?.degree
  const start_date_a = educationData_a?.start_date
  const end_date_a = educationData_a?.end_date

  const institution_b = educationData_b?.institution
  const listItems = createListItems(educationData_b?.description);
  const start_date_b = educationData_b?.start_date
  const end_date_b = educationData_b?.end_date


  return (
    <div ref={educationRef} className='education'>
      <h1>EDUCATION</h1>
      <div className="education-section">
        <h2>{institution_a}</h2>
        <p>{degree_a}</p>
        <h6>{start_date_a} — {end_date_a}</h6>
      </div>
      <div className="online-trainings">
        <h2>{institution_b}</h2>
        <ul>
          {listItems}
          {/* Добавьте остальные элементы */}
        </ul>
      </div>
      <div className="education-dates">
        <h6>{start_date_b} — {end_date_b}</h6>
      </div>
    </div>
  );
};

export default Education;
