// import React, { useEffect } from 'react';
import { IMGS } from '../../configs/img-index';
import { Languages } from '../../configs/language';

interface Props {
  language: string;
}

function HomePage(props: Props) {
  const { language } = props;

  return (
    <div className="flex flex-col h-fit w-screen">
      <div className="flex justify-center">
        <button
          type="button"
          className="text-2xl py-1 px-7 me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {language == Languages.EN ? 'Hello !' : 'สวัสดี !'}
        </button>
      </div>
      {/*  */}
      <div className="flex justify-center text-3xl xl:text-8xl md:text-5xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
        <p className="">{language == Languages.EN ? "I'am" : 'ผม'}</p>
        <p className="indent-5 text-blue-600">{language == Languages.EN ? 'Watcharachai' : 'วัชระชัย'}</p>
      </div>
      {/*  */}
      <div className="flex justify-center text-3xl xl:text-7xl md:text-4xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
        <p className="indent-5 text-blue-600">{language == Languages.EN ? 'Full-Stack Developer' : 'Full-Stack Developer'}</p>
      </div>
      {/*  */}
      <div className="flex flex-1 justify-center relative">
        <img src={IMGS.profileMe} className="object-center h-auto w-72 z-10 relative"></img>
        <div className="absolute inset-0 flex justify-center">
          <div className="bg-blue-600 h-64 w-72 rounded-3xl hover:rounded-full border"></div>
        </div>
      </div>
      {/*  */}
  
    </div>
  );
}

export default HomePage;
