import React, { useState, useEffect, RefObject } from 'react';
import axios from 'axios';
import './language.css'; // Убедитесь, что путь до файла с CSS корректный


interface LanguageProps {
  languageRef?: RefObject<HTMLDivElement>;
}
// Определите типы для данных MySelf
interface LanguageData {
  language: string;
  proficiency: string;

}


const Language: React.FC<LanguageProps> = ({ languageRef }) => {
  const [languageData_a, setLanguageData_a] = useState<LanguageData | null>(null);
  const [languageData_b, setLanguageData_b] = useState<LanguageData | null>(null);
  const [languageData_c, setLanguageData_c] = useState<LanguageData | null>(null);
  const [languageData_d, setLanguageData_d] = useState<LanguageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const languageResponse_a = await axios.get('http://127.0.0.1:8000/api/language/');
        setLanguageData_a(languageResponse_a.data[0]);

        const languageResponse_b = await axios.get('http://127.0.0.1:8000/api/language/');
        setLanguageData_b(languageResponse_b.data[1]);

        const languageResponse_c = await axios.get('http://127.0.0.1:8000/api/language/');
        setLanguageData_c(languageResponse_c.data[2]);

        const languageResponse_d = await axios.get('http://127.0.0.1:8000/api/language/');
        setLanguageData_d(languageResponse_d.data[3]);

      } catch (error) {
        console.error('There was an error fetching the myself data', error);
      }
    };

    fetchData();
  }, []);


  const language_a = languageData_a?.language
  const proficiency_a = languageData_a?.proficiency
  const language_b = languageData_b?.language
  const proficiency_b = languageData_b?.proficiency
  const language_c = languageData_c?.language
  const proficiency_c = languageData_c?.proficiency
  const language_d = languageData_d?.language
  const proficiency_d = languageData_d?.proficiency


  return (
    <div ref={languageRef}className='language'>
      <h1>LANGUAGE</h1>
      <ul>
      <li>{language_a} <span className="proficiency">{proficiency_a}</span></li>
      <li>{language_b} <span className="proficiency">{proficiency_b}</span></li>
      <li>{language_c} <span className="proficiency">{proficiency_c}</span></li>
      <li>{language_d} <span className="proficiency">{proficiency_d}</span></li>
      </ul>
    </div>
  );
};

export default Language;
