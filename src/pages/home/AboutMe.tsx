// import React from 'react'

import { Languages } from '../../configs/language';

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
            "I am a Full-Stack Developer with expertise in both Back End and Front End web application development using JavaScript and TypeScript as
            my primary languages. I have experience working with a variety of technologies such as NestJS for Back End development, as well as ReactJS,Ts
            or VueJS for Front End development. I am familiar with and adept at customizing these tools as per project requirements. I am committed to
            continuously enhancing my skills and adapting to industry changes effectively."
          </p>
        ) : (
          <p className="text-3xl">
            "ผมเป็น Full-Stack Developer ที่มีความเชี่ยวชาญในการพัฒนาเว็บแอปพลิเคชันทั้งด้าน Back End และ Front End โดยใช้ภาษา JavaScript และ
            TypeScript เป็นหลัก มีประสบการณ์ทำงานกับเทคโนโลยีที่หลากหลายอย่างเช่น NestJS สำหรับการพัฒนา Back End, และ ReactJS,Ts หรือ VueJS
            สำหรับการพัฒนา Front End ฉันมีความคุ้นเคยและเข้าใจในการใช้งานและการปรับแต่งเครื่องมือเหล่านี้ตามความต้องการของโปรเจ็กต์
            ฉันมุ่งมั่นที่จะพัฒนาทักษะของตัวเองอย่างต่อเนื่องและตอบสนองต่อการเปลี่ยนแปลงของอุตสาหกรรมอย่างมีประสิทธิภาพ"
          </p>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default AboutMe;
