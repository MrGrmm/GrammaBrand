import React, { RefObject } from 'react';
import './myself.css';

interface MyselfProps {
  myselfRef: RefObject<HTMLDivElement>;
}

const MySelf: React.FC<MyselfProps> = ({ myselfRef }) => {
  return (
    <div ref={myselfRef} className="myself">
      <img src="my_photo.jpg" alt="my_photo" className="myself_photo" />
      <div className="stack_text">
        {/* Текст и заголовки */}
        <h2>Stack:</h2>
        <p>beck-end:  Django (Python) </p>
        <p>front-end: React (TypeScript)</p>
        <p>additionally: C#, HTML, CSS,
                       aiogram, SQLite,
                      PostgreeSQL, Figma </p>
      </div>
      <div className="fullname">
        <h1>ION</h1>
        <h1>GRAMMA</h1>
      </div>
      <div className="myself_text">
        <h2>ABOUT MYSELF</h2>
        <p>Experienced in teamwork and sales,
        I possess skills in communication and strategic planning.
        I have experience in telemarketing, developing websites,
          and Telegram bots.
        Committed to continuous professional development,
          financial market analysis, and creativity</p>
      </div>
      
    </div>
  );
};

export default MySelf;
