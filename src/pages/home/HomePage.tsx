// import React, { useEffect } from 'react';
import { Languages } from '../../configs/language';
import { fontConfig } from '../../configs/font-config';

interface Props {
  language: string;
}

function HomePage(props: Props) {
  const { language } = props;

  return (
    <div id="home" className="min-h-screen relative flex flex-col items-center justify-center text-center px-10 overflow-hidden">
      {/* Hero Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#f0f0f5_0%,#ffffff_70%)] z-0" />

      <div className="relative z-10 max-w-4xl">
        <p className={`${fontConfig.getLabel(language)} font-medium tracking-[0.15em] uppercase text-gray-400 mb-7 animate-[fadeUp_0.8s_0.2s_forwards] opacity-0`}>
          {language === Languages.EN ? 'Full-Stack Developer · Bangkok' : 'Full-Stack Developer · กรุงเทพฯ'}
        </p>

        <h1 className={`font-serif ${fontConfig.getTitle(language)} leading-[1.0] tracking-[-2px] text-black mb-2 animate-[fadeUp_0.9s_0.35s_forwards] opacity-0`}>
          Watcharachai<br />
          <em className="not-italic text-gray-500">Samkham</em>
        </h1>

        <p className={`${fontConfig.getExpCompany(language)} font-light text-gray-500 mt-6 mb-12 tracking-[-0.2px] leading-relaxed animate-[fadeUp_0.9s_0.5s_forwards] opacity-0`}>
          {language === Languages.EN
            ? 'Building seamless digital experiences\nthat merge logic with aesthetics.'
            : 'สร้างประสบการณ์ดิจิทัลที่ไร้รอยต่อ\nที่ผสมผสานตรรกะเข้ากับความสวยงาม'}
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-[fadeUp_0.9s_0.65s_forwards] opacity-0">
          <a
            href="#works"
            className="px-8 py-3.5 bg-black text-white rounded-full text-sm font-normal tracking-wide transition-all hover:bg-gray-800 hover:scale-[1.02]"
          >
            {language === Languages.EN ? 'View Work' : 'ดูผลงาน'}
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 border border-gray-200 text-black rounded-full text-sm font-normal tracking-wide transition-all hover:border-gray-400 hover:scale-[1.02]"
          >
            {language === Languages.EN ? 'About Me' : 'เกี่ยวกับผม'}
          </a>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeIn_1s_1.2s_forwards] opacity-0">
        <span className={`${fontConfig.getBadge(language)} tracking-[0.12em] uppercase text-gray-400`}>
          {language === Languages.EN ? 'Scroll' : 'เลื่อนลง'}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gray-400 animate-pulse" />
      </div>
    </div>
  );
}

export default HomePage;
