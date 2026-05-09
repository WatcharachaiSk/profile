// import React from 'react'

import { Languages } from '../configs/language';
import { IMGS } from '../configs/img-index';
import { fontConfig } from '../configs/font-config';

interface Props {
  language: string;
}

function AboutMe(props: Props) {
  const { language } = props;
  return (
    <section id="about" className="py-24 px-10 max-w-[1100px] mx-auto border-t border-gray-100">
      <p className={`section-label ${fontConfig.getLabel(language)}`}>{language === Languages.EN ? 'Hello' : 'สวัสดี'}</p>
      <h2 className={`section-title ${fontConfig.getTitle(language)}`}>
        {language === Languages.EN ? (
          <>
            About<br /><em className="not-italic text-gray-400">Me</em>
          </>
        ) : (
          <>
            เกี่ยวกับ<br /><em className="not-italic text-gray-400">ฉัน</em>
          </>
        )}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden relative">
          <img
            src={IMGS.profileMe}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="pt-3">
          <p className={`${fontConfig.getExpCompany(language)} font-light leading-relaxed text-gray-700 mb-10 tracking-[-0.1px]`}>
            {language === Languages.EN ? (
              <>
                I'm Watcharachai, a Full-Stack Developer and Programmer Analyst based in Bangkok.
                I believe great software is like great design — it should be invisible and just work.
                I obsess over the details that make digital products feel natural, efficient, and reliable.
                <br /><br />
                My process begins with analytical thinking: understanding the core problem before writing a single line of code.
                I bridge the gap between complex back-end logic and intuitive front-end interfaces.
              </>
            ) : (
              <>
                ผมชื่อวัชระชัย เป็น Full-Stack Developer และ Programmer Analyst ในกรุงเทพฯ
                ผมเชื่อว่าซอฟต์แวร์ที่ดีก็เหมือนกับงานออกแบบที่ดี คือควรจะเรียบง่ายและทำงานได้อย่างไร้ที่ติ
                ผมให้ความสำคัญกับรายละเอียดที่ช่วยให้ผลิตภัณฑ์ดิจิทัลใช้งานง่าย มีประสิทธิภาพ และเชื่อถือได้
                <br /><br />
                กระบวนการทำงานของผมเริ่มจากการคิดวิเคราะห์: เข้าใจปัญหาหลักก่อนที่จะเริ่มเขียนโค้ด
                ผมเชื่อมโยงระหว่างตรรกะฝั่ง Back-end ที่ซับซ้อนและอินเทอร์เฟซฝั่ง Front-end ที่ใช้งานง่ายเข้าด้วยกัน
              </>
            )}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {[
              'TypeScript', 'React', 'Nest.js', 'PostgreSQL',
              'Docker', 'Azure', 'ELK Stack', 'KQL',
              'Tailwind CSS', 'Redux'
            ].map((skill) => (
              <span
                key={skill}
                className={`px-4.5 py-2 bg-gray-50 rounded-full ${fontConfig.getBadge(language)} text-gray-600 tracking-wide hover:bg-gray-100 transition-colors`}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="mailto:watcharachai.sk@gmail.com" className={`${fontConfig.getNavLink(language)} text-black no-underline border-b border-gray-200 pb-0.5 hover:border-black transition-colors`}>
              Email ↗
            </a>
            <a href="https://www.linkedin.com/in/watcharachai-samkhan-20a6962ab" className={`${fontConfig.getNavLink(language)} text-black no-underline border-b border-gray-200 pb-0.5 hover:border-black transition-colors`}>
              LinkedIn ↗
            </a>
            <a href="https://github.com/WatcharachaiSk" className={`${fontConfig.getNavLink(language)} text-black no-underline border-b border-gray-200 pb-0.5 hover:border-black transition-colors`}>
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
