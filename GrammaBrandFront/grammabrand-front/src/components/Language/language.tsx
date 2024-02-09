import React from 'react';
import './language.css'; // Убедитесь, что путь до файла с CSS корректный

const Language = () => {
  return (
    <div className='language'>
      <h1>LANGUAGE</h1>
      <ul>
        <li>English (B2+)</li>
        <li>Italiano (B1)</li>
        <li>Romanian (native)</li>
        <li>Russian (native)</li>
      </ul>
    </div>
  );
};

export default Language;
