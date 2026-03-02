// import React from 'react'

import { Languages } from '../configs/language';

interface Props {
  language: string;
}
function AboutMe(props: Props) {
  const { language } = props;
  return (
    <div className="flex flex-col h-fit w-screen bg-cyan-100">
      <div className="flex flex-col bg-cyan-100 text-center">
        <p className="text-5xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
          {language == Languages.EN ? 'About Me' : 'เกี่ยวกับฉัน'}
        </p>
        {language == Languages.EN ? (
          <p className="text-3xl">
            "I'm a Full-Stack Developer and Programmer Analyst, proficient in JavaScript, TypeScript, with expertise in Nest.js for Back End and
            React/Vue for Front End. I have experience in Microsoft Azure, KQL, Log Analysis, Alert Systems, and Elastic Stack (ELK)."
          </p>
        ) : (
          <p className="text-3xl">
            "ผมเป็น Full-Stack Developer และ Programmer Analyst ที่เชี่ยวชาญใน JavaScript และ TypeScript, Nest.js สำหรับ Back End และ React/Vue สำหรับ
            Front End ผมมีประสบการณ์ในการใช้งาน Microsoft Azure, KQL, Log Analysis, Alert Systems, and Elastic Stack (ELK)."
          </p>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default AboutMe;
