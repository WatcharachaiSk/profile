import { useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/navber/NavBar';
import HomePage from './pages/home/HomePage';

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

  return (
    <div style={{ fontFamily: 'THSarabunNew', fontSize: 22 }}>
      <NavBar />
      <div className="flex" style={{ fontFamily: 'THSarabunNew', fontSize: 18 }}>
        <HomePage />
        {/* <h1 className="text-3xl font-bold ">Hello world!</h1> */}
      </div>
    </div>
  );
}

export default App;
