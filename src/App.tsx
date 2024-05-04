import { useEffect, useRef, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/navber/NavBar';
import HomePage from './pages/home/HomePage';
import { SelectChangeEvent } from '@mui/material';
import AboutMe from './pages/AboutMe';
import WorkExperience from './pages/WorkExperience';
// import Cards from './pages/Cards';
import Skillset from './pages/Skillset';
import { ScrollEnum } from './enums/scroll.enum';
import Cv from './pages/Cv';
import { GoArrowUp } from 'react-icons/go';

function App() {
  // const [count, setCount] = useState(0);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');
  const [showButton, setShowButton] = useState(false);

  // set years and months
  const [startDate] = useState(new Date('June 1, 2022'));
  const [currentDate] = useState(new Date());
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  useEffect(() => {
    const diff = currentDate.getTime() - startDate.getTime();
    const diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    setYears(diffYears);
    setMonths(diffMonths);
  }, [startDate, currentDate]);

  useEffect(() => {
    // เช็คว่ามีค่า language อยู่ใน localStorage หรือไม่
    const storedLanguage = localStorage.getItem('language');
    // ถ้าไม่มีค่า language ใน localStorage ให้ตั้งค่า language เป็น 'EN'
    if (!storedLanguage) {
      localStorage.setItem('language', 'EN');
    }
  }, []);

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    // console.log('event.target.value is ', event.target.value);

    localStorage.setItem('language', event.target.value);
    setLanguage(event.target.value as string);
  };

  // set Ref Page
  const scrollHomeRef = useRef<any>(null);
  const scrollCvRef = useRef<any>(null);
  const scrollWorksRef = useRef<any>(null);
  const scrollAboutRef = useRef<any>(null);

  // ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่ม
  const handleButtonClick = (isScroll: string) => {
    // ให้ใช้ method scrollIntoView() บน ref.current
    if (isScroll == ScrollEnum.Home) {
      scrollHomeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == ScrollEnum.Cv) {
      scrollCvRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == ScrollEnum.Works) {
      scrollWorksRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == ScrollEnum.About) {
      scrollAboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // check Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openWebsite = (link: string) => {
    window.open(link);
  };

  return (
    <div style={{ fontFamily: 'THSarabunNew', fontSize: 22 }}>
      <NavBar handleChangeLanguage={handleChangeLanguage} handleButtonClick={handleButtonClick} language={language} />
      <div className="flex flex-col" style={{ fontFamily: 'THSarabunNew', fontSize: 18 }}>
        <div ref={scrollHomeRef}>
          <HomePage language={language} />
        </div>
        <div className="mt-2" />

        <AboutMe language={language} />
        <div className="mt-2" />
        <div ref={scrollWorksRef}>
          <WorkExperience openWebsite={openWebsite} language={language} years={years} months={months} />
        </div>
        <div className="mt-10" />
        <div ref={scrollAboutRef}>
          <Skillset openWebsite={openWebsite} language={language} />
        </div>
        <div className="mt-96" />
        <div ref={scrollCvRef}>
          <Cv />
        </div>
        {showButton && (
          <button
            className="text-base fixed bottom-4 right-4 z-10 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-opacity"
            onClick={() => {
              handleButtonClick(ScrollEnum.Home);
            }}
          >
            <div className="flex justify-center items-center">
              <GoArrowUp size={13} />
              Top
            </div>
          </button>
        )}

        {/* <h1 className="text-3xl font-bold ">Hello world!</h1> */}
      </div>
    </div>
  );
}

export default App;
