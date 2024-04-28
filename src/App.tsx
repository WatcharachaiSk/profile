import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/navber/NavBar';
import HomePage from './pages/home/HomePage';
import { SelectChangeEvent } from '@mui/material';
import AboutMe from './pages/home/AboutMe';

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // เช็คว่ามีค่า language อยู่ใน localStorage หรือไม่
    const storedLanguage = localStorage.getItem('language');
    // ถ้าไม่มีค่า language ใน localStorage ให้ตั้งค่า language เป็น 'EN'
    if (!storedLanguage) {
      localStorage.setItem('language', 'EN');
    }
  }, []);

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    console.log('event.target.value is ', event.target.value);

    localStorage.setItem('language', event.target.value);
    setLanguage(event.target.value as string);
  };

  return (
    <div style={{ fontFamily: 'THSarabunNew', fontSize: 22 }}>
      <NavBar handleChangeLanguage={handleChangeLanguage} language={language} />
      <div className="flex flex-col" style={{ fontFamily: 'THSarabunNew', fontSize: 18 }}>
        <HomePage language={language} />
        <div className='mt-2'/>
        <AboutMe language={language} />
        {/* <h1 className="text-3xl font-bold ">Hello world!</h1> */}
      </div>
    </div>
  );
}

export default App;
