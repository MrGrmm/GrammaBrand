import React, { useState, useEffect, RefObject } from 'react';
import axios from 'axios';
import './myself.css';

interface MySelfProps {
  myselfRef?: RefObject<HTMLDivElement>;
}
// Определите типы для данных MySelf
interface MySelfData {
  id: number;
  full_name: string;
  email: string;
  address: string;
  telephone_number: number;
  about_myself: string; // сделайте это поле необязательным, если оно может отсутствовать
  stack: string; // сделайте это поле необязательным, если оно может отсутствовать
}

const MySelf: React.FC<MySelfProps> = ({ myselfRef }) => {
  const [mySelfData, setMySelfData] = useState<MySelfData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
                // Получаем данные MySelf
        const selfResponse = await axios.get('http://127.0.0.1:8000/api/myself/');
        setMySelfData(selfResponse.data[0]);

      } catch (error) {
        console.error('There was an error fetching the myself data', error);
      }
    };

    fetchData();
  }, []);



  
  const first_name = mySelfData?.full_name.split(' ')[0] || '';
  const last_name = mySelfData?.full_name.split(' ')[1] || '';
  const about_myself = mySelfData?.about_myself
  const stack_back = mySelfData?.stack.split(';')[0] || '';
  const stack_front = mySelfData?.stack.split(';')[1] || '';
  const stack_add = mySelfData?.stack.split(';')[2] || '';
  const stack_add_title = stack_add.split(':')[0] || ''
  const stack_add_text = stack_add.split(':')[1] || ''
  



  return (
    <div ref={myselfRef} className="myself">
      <img src="my_photo.jpg" alt="my_photo" className="myself_photo" />
      <div className="stack_text">

        <h2>Stack:</h2>
        <p>{stack_back}</p>
        <p>{stack_front}</p>
        <p>
          <span className="stack_label">{stack_add_title}: </span>
          <span className="stack_text_add">{stack_add_text}</span>
        </p>
      </div>

      <div className="fullname">
        <h1>{first_name.toUpperCase()}</h1>
        <h1>{last_name.toUpperCase()}</h1>
      </div>
      
      <div className="myself_text">
        <span className='ab'>ABOUT</span>
        <span className='ms'>MYSELF</span>
        <p>{about_myself}</p>
      </div>
      
    </div>
  );
};

export default MySelf;
