import { useEffect, useRef, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/navber/NavBar';
import HomePage from './pages/home/HomePage';
import { SelectChangeEvent } from '@mui/material';
import AboutMe from './pages/AboutMe';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataStoredViewer, setDataStoredViewer] = useState<Viewer>({ date: new Date(), counts_view: 0 });

  // set years and months
  const [startDate] = useState(new Date('June 1, 2022'));
  const [startDateES] = useState(new Date('Sep 1, 2025'));
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
    if (diffYearsEs == -1) {
      setYearsEs(0);
    } else {
      setYearsEs(diffYearsEs);
    }
    if (diffMonthsEs == -1) {
      setMonthsEs(0);
    } else {
      setMonthsEs(diffMonthsEs);
    }
  }, [startDate, currentDate]);

  const isSameDay = (date1: Date, date2: Date) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  };

  const getStoredViewer = () => {
    const storedViewer = localStorage.getItem('viewer');
    if (storedViewer) {
      const data: Viewer = JSON.parse(storedViewer);
      setDataStoredViewer(data);
    }
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
      dispatch(updateViewer()); // Initial count
    } else {
      const payload: Viewer = JSON.parse(storedViewer);
      const checkDate = isSameDay(payload.date, date);
      // console.log('checkDate is', checkDate);

      if (checkDate) {
        if (payload.counts_view < 22) {
          payload.counts_view = payload.counts_view + 1;
          localStorage.setItem('viewer', JSON.stringify(payload));
          // Update backend every few local views to prevent spam but ensure it counts
          if (payload.counts_view % 3 === 0) {
            dispatch(updateViewer());
          }
        }
      } else {
        payload.date = date;
        payload.counts_view = 1;
        localStorage.setItem('viewer', JSON.stringify(payload));
        dispatch(updateViewer()); // First visit of the day
      }
    }
    getStoredViewer();
  }, [dispatch]);

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    // console.log('event.target.value is ', event.target.value);

    localStorage.setItem('language', event.target.value);
    setLanguage(event.target.value as string);
  };

  // set Ref Page
  const scrollHomeRef = useRef<HTMLDivElement>(null);
  const scrollCvRef = useRef<HTMLDivElement>(null);
  const scrollWorksRef = useRef<HTMLDivElement>(null);
  const scrollAboutRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Logic
  useEffect(() => {
    // Skip cursor logic on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      document.body.classList.add('no-custom-cursor');
      return;
    }

    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animRing = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      rafId = requestAnimationFrame(animRing);
    };
    rafId = requestAnimationFrame(animRing);

    const onMouseEnter = () => {
      cursor?.classList.add('hover');
      ring?.classList.add('hover');
    };
    const onMouseLeave = () => {
      cursor?.classList.remove('hover');
      ring?.classList.remove('hover');
    };

    const elements = document.querySelectorAll('a, button');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่ม
  const handleButtonClick = (isScroll: string) => {
    // ให้ใช้ method scrollIntoView() บน ref.current
    if (isScroll == ScrollEnum.Home) {
      scrollHomeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == ScrollEnum.Cv) {
      scrollCvRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == ScrollEnum.Works) {
      scrollWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == ScrollEnum.About) {
      scrollAboutRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    <div className={`cursor-none ${language === 'TH' ? 'lang-th' : ''}`}>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <NavBar handleChangeLanguage={handleChangeLanguage} handleButtonClick={handleButtonClick} language={language} />
      <div className="flex flex-col">
        <div ref={scrollHomeRef}>
          <HomePage language={language} />
        </div>

        {/* <div className="reveal">
          <Projects language={language} />
        </div> */}

        <div ref={scrollWorksRef} className="reveal reveal-delay-1">
          <WorkExperience openWebsite={openWebsite} language={language} years={years} months={months} yearsEs={yearsEs} monthsEs={monthsEs} />
        </div>

        <div ref={scrollAboutRef} className="reveal reveal-delay-2">
          <AboutMe language={language} />
        </div>

        <div className="reveal reveal-delay-3">
          <Skillset openWebsite={openWebsite} language={language} />
        </div>

        <div ref={scrollCvRef} className="reveal reveal-delay-3">
          <Cv />
        </div>

        {showButton && (
          <button
            className="text-base fixed bottom-4 right-4 z-10 p-3 bg-black text-white rounded-full shadow-lg transition-opacity"
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
      </div>
      <footer className="max-w-[1100px] mx-auto py-10 px-10 border-t border-gray-200 flex justify-between items-center mt-20">
        <p className="text-xs text-gray-500">© 2025 Watcharachai Saenkham</p>
        <p className="font-serif text-2xl text-gray-300">Design.</p>
      </footer>
    </div>
  );
}

export default App;
