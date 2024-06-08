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
import { AppDispatch, RootState } from './app/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, updateViewer } from './features/viewerSlice';

interface Viewer {
  date: Date;
  counts_view: number;
}
let isFetchData = false;

function App() {
  // const [isFetchData, setIsFetchData] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector((state: RootState) => state.viewer?.status);
  // const error = useSelector((state: RootState) => state.viewer?.error);

  useEffect(() => {
    // console.log('status is', status);

    if (status === 'idle' && !isFetchData) {
      dispatch(fetchData());

      isFetchData = true;
    }
  }, [isFetchData]);

  const openWebsite = (link: string) => {
    window.open(link);
  };

  // const [count, setCount] = useState(0);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');
  const [showButton, setShowButton] = useState(false);
  const [dataStoredViewer, setDataStoredViewer] = useState<Viewer>({ date: new Date(), counts_view: 0 });

  // set years and months
  const [startDate] = useState(new Date('June 1, 2022'));
  const [startDateES] = useState(new Date('April 1, 2023'));
  const [currentDate] = useState(new Date());
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  const [yearsEs, setYearsEs] = useState(0);
  const [monthsEs, setMonthsEs] = useState(0);
  useEffect(() => {
    const diff = currentDate.getTime() - startDate.getTime();
    const diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    setYears(diffYears);
    setMonths(diffMonths);

    // Electronic Shell Co., Ltd.
    const diffEs = currentDate.getTime() - startDateES.getTime();
    const diffYearsEs = Math.floor(diffEs / (1000 * 60 * 60 * 24 * 365));
    const diffMonthsEs = Math.floor((diffEs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    setYearsEs(diffYearsEs);
    setMonthsEs(diffMonthsEs);
  }, [startDate, currentDate]);

  const isSameDay = (date1: Date, date2: Date) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  };

  const getStoredViewer = () => {
    const storedViewer: any = localStorage.getItem('viewer');
    const data: Viewer = JSON.parse(storedViewer);
    setDataStoredViewer(data);
  };

  useEffect(() => {
    const date = new Date();

    // เช็คว่ามีค่า language อยู่ใน localStorage หรือไม่
    const storedLanguage = localStorage.getItem('language');
    const storedViewer = localStorage.getItem('viewer');
    // ถ้าไม่มีค่า language ใน localStorage ให้ตั้งค่า language เป็น 'EN'
    if (!storedLanguage) {
      localStorage.setItem('language', 'EN');
    }
    if (!storedViewer) {
      const payload: Viewer = {
        date: date,
        counts_view: 1,
      };
      localStorage.setItem('viewer', JSON.stringify(payload));
    } else {
      let payload: Viewer = JSON.parse(storedViewer);
      const checkDate = isSameDay(payload.date, date);
      console.log('checkDate is', checkDate);

      if (checkDate && payload.counts_view < 22) {
        payload.counts_view = payload.counts_view + 1;
        localStorage.setItem('viewer', JSON.stringify(payload));
      }
      if (!checkDate) {
        payload.date = date;
        payload.counts_view = 1;
        localStorage.setItem('viewer', JSON.stringify(payload));
      }
    }
    getStoredViewer();
  }, []);

  useEffect(() => {
    if (dataStoredViewer.counts_view % 2 == 0 && dataStoredViewer.counts_view != 0 && dataStoredViewer.counts_view != 22) {
      // console.log('dataStoredViewer.counts_view is ', dataStoredViewer.counts_view);
      dispatch(updateViewer());
    }
  }, [dataStoredViewer.counts_view]);

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
          <WorkExperience openWebsite={openWebsite} language={language} years={years} months={months} yearsEs={yearsEs} monthsEs={monthsEs} />
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
