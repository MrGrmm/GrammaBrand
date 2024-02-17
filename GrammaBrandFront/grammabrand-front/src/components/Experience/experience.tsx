import React, { useState, useEffect, RefObject } from 'react';
import axios from 'axios';
import './experience.css'; // Убедитесь, что путь до файла с CSS корректный

interface ExperienceProps {
  experienceRef: RefObject<HTMLDivElement>;
}

interface ExperienceData {
  position: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;

}


const Experience: React.FC<ExperienceProps> = ({ experienceRef }) => {
  const [experienceData_a, setExperienceData_a] = useState<ExperienceData | null>(null);
  const [experienceData_b, setExperienceData_b] = useState<ExperienceData | null>(null);
  const [experienceData_c, setExperienceData_c] = useState<ExperienceData | null>(null);


  const createListItems = (input: string | undefined) => {
    if (!input) return null;
    return input.split('.').map((item, index) => (
      <li key={index}>{item.trim()}</li>
    ));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
                // Получаем данные MySelf
        const ExperienceResponse_a = await axios.get('http://127.0.0.1:8000/api/experience/');
        setExperienceData_a(ExperienceResponse_a.data[0]);

        const ExperienceResponse_b = await axios.get('http://127.0.0.1:8000/api/experience/');
        setExperienceData_b(ExperienceResponse_b.data[1]);

        const ExperienceResponse_c = await axios.get('http://127.0.0.1:8000/api/experience/');
        setExperienceData_c(ExperienceResponse_c.data[2]);

      } catch (error) {
        console.error('There was an error fetching the myself data', error);
      }
    };

    fetchData();
  }, []);

  const position_a = experienceData_a?.position
  const company_a = experienceData_a?.company
  const start_date_a = experienceData_a?.start_date
  const end_date_a = experienceData_a?.end_date
  const listItems_a = createListItems(experienceData_a?.description);

  const position_b = experienceData_a?.position
  const company_b = experienceData_a?.company
  const start_date_b = experienceData_a?.start_date
  const end_date_b = experienceData_a?.end_date
  const listItems_b = createListItems(experienceData_b?.description);

  const position_c = experienceData_a?.position
  const company_c = experienceData_a?.company
  const start_date_c = experienceData_a?.start_date
  const end_date_c = experienceData_a?.end_date
  const listItems_c = createListItems(experienceData_c?.description);


  // Используйте переданный ref вместо создания нового
  return (
    <div ref={experienceRef}>
      <div className='experience'>
        <h1>EXPERIENCE</h1>
        <div className="experience-item">
          <h2>{position_a} — {company_a}</h2>
          <h6>{start_date_a} — {end_date_a} (IT)</h6>
          <ul>
            {listItems_a}
          </ul>
          <h2>{position_b} — {company_b}</h2>
          <h6>{start_date_b} — {end_date_b} (MD)</h6>
          <ul>
            {listItems_b}
          </ul>
          <h2>{position_c} — {company_c}</h2>
          <h6>{start_date_c} — {end_date_c} (MD)</h6>
          <ul>
            {listItems_c}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
