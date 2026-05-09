// import React from 'react';
import { Languages } from '../configs/language';
import { LinkEnum } from '../enums/link.enum';
import { fontConfig } from '../configs/font-config';

interface Props {
  language: string;
  years: number;
  months: number;
  yearsEs: number;
  monthsEs: number;
  openWebsite: (link: string) => void;
}

interface ExperienceDetail {
  title: { en: string; th: string };
  company: { en: string; th: string };
  duration: { en: string; th: string };
  role: { en: string; th: string };
  tech: string[];
  description: { en: string; th: string };
  bullets: { en: string; th: string }[];
  links?: { label: { en: string; th: string }; url: string }[];
  badge: { en: string; th: string };
}

function WorkExperience(props: Props) {
  const { language, years, months, openWebsite } = props;
  const langKey = language.toLowerCase() as 'en' | 'th';

  const experiences: ExperienceDetail[] = [
    {
      title: { en: 'Programmer Analyst (Permanent)', th: 'Programmer Analyst (Permanent)' },
      company: { en: 'AIS Company', th: 'บริษัท เอไอเอส (AIS)' },
      duration: { en: 'Sep 2025 — Present', th: 'ก.ย. 2568 — ปัจจุบัน' },
      role: { en: 'Permanent', th: 'พนักงานประจำ' },
      tech: ['Microsoft Azure', 'KQL', 'Log Analysis', 'Alert Systems', 'Elastic Stack (ELK)'],
      description: {
        en: 'Supported and maintained the Loyalty Platform on Microsoft Azure.',
        th: 'สนับสนุนและดูแลแพลตฟอร์ม Loyalty บน Microsoft Azure'
      },
      bullets: [
        {
          en: 'Investigated app-related issues by checking incoming error requests and identifying the root cause using Log Analysis.',
          th: 'ตรวจสอบประเด็นที่เกี่ยวข้องกับแอปพลิเคชันโดยการตรวจสอบข้อผิดพลาดของ Request และวิเคราะห์หาสาเหตุของปัญหาด้วย Log Analysis'
        },
        {
          en: 'Collaborated with the SA and Dev teams by passing on issues for further resolution.',
          th: 'ประสานงานกับทีม SA และทีมพัฒนาเพื่อส่งต่อปัญหาและร่วมกันแก้ไข'
        },
        {
          en: 'Created Workbook Dashboards to monitor various requests coming into the system.',
          th: 'สร้าง Workbook Dashboards เพื่อตรวจสอบและติดตามข้อมูลต่างๆ ที่เข้ามาในระบบ'
        }
      ],
      badge: { en: 'Full-time', th: 'งานประจำ' }
    },
    {
      title: { en: 'Programmer Analyst (Contract)', th: 'Programmer Analyst (Contract)' },
      company: { en: 'AIS Company', th: 'บริษัท เอไอเอส (AIS)' },
      duration: { en: 'Jul 2024 — Sep 2025', th: 'ก.ค. 2567 — ก.ย. 2568' },
      role: { en: 'Contract', th: 'พนักงานสัญญาจ้าง' },
      tech: ['Microsoft Azure', 'KQL', 'Log Analysis', 'Workbook Dashboards'],
      description: {
        en: 'Supported and maintained the Loyalty Platform as a contract programmer analyst.',
        th: 'สนับสนุนและดูแลแพลตฟอร์ม Loyalty ในฐานะนักวิเคราะห์โปรแกรมเมอร์สัญญาจ้าง'
      },
      bullets: [
        {
          en: 'Investigated app-related issues by checking incoming error requests and identifying the root cause using Log Analysis.',
          th: 'ตรวจสอบประเด็นที่เกี่ยวข้องกับแอปพลิเคชันโดยการตรวจสอบข้อผิดพลาดของ Request และวิเคราะห์หาสาเหตุของปัญหาด้วย Log Analysis'
        },
        {
          en: 'Collaborated with the SA and Dev teams by passing on issues for further resolution.',
          th: 'ประสานงานกับทีม SA และทีมพัฒนาเพื่อส่งต่อปัญหาและร่วมกันแก้ไข'
        },
        {
          en: 'Created Workbook Dashboards to monitor various requests coming into the system.',
          th: 'สร้าง Workbook Dashboards เพื่อตรวจสอบและติดตามข้อมูลต่างๆ ที่เข้ามาในระบบ'
        }
      ],
      badge: { en: 'Contract', th: 'สัญญาจ้าง' }
    },
    {
      title: { en: 'Full-Stack Developer (Mid-Level)', th: 'Full-Stack Developer (Mid-Level)' },
      company: { en: 'Electronic Shell Co., Ltd.', th: 'บริษัท อิเล็กทรอนิกส์ เชลล์ จำกัด' },
      duration: { en: 'Apr 2023 — Jun 2024', th: 'เม.ย. 2566 — มิ.ย. 2567' },
      role: { en: 'Mid-Level', th: 'ระดับกลาง' },
      tech: ['Vue', 'React', 'NestJS', 'Docker', 'PostgreSQL', 'MySQL', 'Socket.io', 'TypeORM', 'JWT', 'SSE', 'PM2', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Lodash', 'Lottie', 'Axios', 'Moment', 'Dotenv'],
      description: {
        en: 'Developed websites, including UX/UI design, API, and database design, as well as deployment using Docker.',
        th: 'พัฒนาเว็บไซต์ รวมถึงการออกแบบ UX/UI, API และฐานข้อมูล พร้อมทั้งการ Deploy ด้วย Docker'
      },
      bullets: [
        {
          en: 'Provide consultation and supervise interns and cooperative education students.',
          th: 'ให้คำปรึกษาและดูแลนิสิตฝึกงานและนักศึกษาสหกิจศึกษา'
        },
        {
          en: 'Designed and developed APIs using NestJS with technologies like JWT, TypeORM, SSE, and Socket.io.',
          th: 'ออกแบบและพัฒนา API ด้วย NestJS โดยใช้เทคโนโลยี เช่น JWT, TypeORM, SSE และ Socket.io'
        },
        {
          en: 'Front-End Development: Vue (Vuex, Vuetify) and React (Redux Toolkit, MUI).',
          th: 'การพัฒนาส่วนหน้าบ้าน: Vue (Vuex, Vuetify) และ React (Redux Toolkit, MUI)'
        },
        {
          en: 'Employed various tools and libraries including Vite, Tailwindcss, Bootstrap, Lodash, Lottie, Axios, Moment, and Dotenv.',
          th: 'ใช้งานเครื่องมือและไลบรารีต่างๆ ได้แก่ Vite, Tailwindcss, Bootstrap, Lodash, Lottie, Axios, Moment และ Dotenv'
        },
        {
          en: 'Managed database and deployment using MySQL, PostgresSQL, Docker, Dockerfile, docker-compose, and PM2.',
          th: 'บริหารจัดการฐานข้อมูลและการ Deploy โดยใช้ MySQL, PostgresSQL, Docker, Dockerfile, docker-compose และ PM2'
        }
      ],
      badge: { en: 'Full-time', th: 'งานประจำ' }
    },
    {
      title: { en: 'Full-Stack Developer (Thesis)', th: 'Full-Stack Developer (Thesis)' },
      company: { en: 'University Project', th: 'โปรเจกต์จบการศึกษา' },
      duration: { en: 'Nov 2022 — Feb 2023', th: 'พ.ย. 2565 — ก.พ. 2566' },
      role: { en: 'Project Leader', th: 'หัวหน้าโปรเจกต์' },
      tech: ['React', 'React Native', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'Nginx', 'PM2', 'Ubuntu 20.04'],
      description: {
        en: 'Development of Web Application and Android Based Asset Management System.',
        th: 'การพัฒนาเว็บแอปพลิเคชันและระบบจัดการครุภัณฑ์บน Android'
      },
      bullets: [
        {
          en: 'Developed a system for managing and tracking asset status through QR code scanning via mobile devices, with the capability to generate QR codes via the website.',
          th: 'พัฒนาระบบสำหรับจัดการและติดตามสถานะครุภัณฑ์ผ่านการสแกนรหัส QR ด้วยอุปกรณ์มือถือ พร้อมความสามารถในการสร้างรหัส QR ผ่านเว็บไซต์'
        },
        {
          en: 'Designed and developed APIs and database using Node.js (Express) and MySQL.',
          th: 'ออกแบบและพัฒนา API และฐานข้อมูลโดยใช้ Node.js (Express) และ MySQL'
        },
        {
          en: 'Deployed on Ubuntu 20.04, Nginx, and PM2.',
          th: 'Deploy บน Ubuntu 20.04, Nginx และ PM2'
        },
        {
          en: 'Front End (Web): Developed the basic data management system, QR code generation for assets, and user data management using React.',
          th: 'Front End (Web): พัฒนาระบบจัดการข้อมูลพื้นฐาน การสร้างรหัส QR สำหรับครุภัณฑ์ และการจัดการข้อมูลผู้ใช้ด้วย React'
        },
        {
          en: 'Front End (Mobile Application): Developed the asset status checking system via QR code scanning using React Native.',
          th: 'Front End (Mobile Application): พัฒนาระบบตรวจสอบสถานะครุภัณฑ์ผ่านการสแกนรหัส QR โดยใช้ React Native'
        }
      ],
      links: [
        { label: { en: 'Watch Demo', th: 'ชมวิดีโอสาธิต' }, url: LinkEnum.YTTs }
      ],
      badge: { en: 'Project', th: 'โปรเจกต์' }
    },
    {
      title: { en: 'Mobile Developer (Internship)', th: 'Mobile Developer (Internship)' },
      company: { en: 'Electronic Shell Co., Ltd.', th: 'บริษัท อิเล็กทรอนิกส์ เชลล์ จำกัด' },
      duration: { en: 'Jun — Oct 2022', th: 'มิ.ย. — ต.ค. 2565' },
      role: { en: 'Internship', th: 'ฝึกงาน' },
      tech: ['React Native', 'TypeScript', 'API Integration', 'QR Code Scanning'],
      description: {
        en: 'Designed and developed an asset verification system utilizing mobile cameras for QR code scanning.',
        th: 'ออกแบบและพัฒนาระบบตรวจสอบทรัพย์สินโดยใช้กล้องมือถือเพื่อสแกนรหัส QR'
      },
      bullets: [
        {
          en: 'Designed and developed an asset verification system utilizing mobile cameras for QR code scanning and integration with the company\'s API. Implemented using React Native and TypeScript.',
          th: 'ออกแบบและพัฒนาระบบตรวจสอบทรัพย์สินโดยใช้กล้องมือถือเพื่อสแกนรหัส QR และเชื่อมต่อกับ API ของบริษัท พัฒนาโดยใช้ React Native และ TypeScript'
        },
        {
          en: 'Participated in the internship project competition for the 2nd semester of 2565 (Science and Technology category).',
          th: 'เข้าร่วมการประกวดโครงงานสหกิจศึกษา ภาคการศึกษาที่ 2/2565 (สาขาวิทยาศาสตร์และเทคโนโลยี)'
        },
        {
          en: 'Project name: Application to check the status of equipment by scan QR code.',
          th: 'ชื่อโครงงาน: แอปพลิเคชันตรวจสอบสถานะอุปกรณ์โดยการสแกนรหัส QR'
        },
        {
          en: 'Competition result: Honorable Mention Award.',
          th: 'ผลการแข่งขัน: รางวัลชมเชย'
        }
      ],
      links: [
        { label: { en: 'Watch at 2:16:00', th: 'ชมผลงานที่นาที 2:16:00' }, url: LinkEnum.LinkCoop }
      ],
      badge: { en: 'Internship', th: 'ฝึกงาน' }
    }
  ];

  return (
    <section id="experience" className="py-24 px-10 max-w-[1100px] mx-auto border-t border-gray-100">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className={`section-label ${fontConfig.getLabel(language)}`}>{language === Languages.EN ? 'Background' : 'ประวัติการทำงาน'}</p>
          <h2 className={`section-title ${fontConfig.getTitle(language)}`}>
            {language === Languages.EN ? (
              <>Work<br /><em className="not-italic text-gray-400">Experience</em></>
            ) : (
              <>ประสบการณ์<br /><em className="not-italic text-gray-400">การทำงาน</em></>
            )}
          </h2>
        </div>
        <div className="hidden sm:block text-right mb-4">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
            {language === Languages.EN ? 'Total Experience' : 'ประสบการณ์รวม'}
          </p>
          <p className="text-2xl font-serif">
            {years} {language === Languages.EN ? 'Years' : 'ปี'} {months} {language === Languages.EN ? 'Months' : 'เดือน'}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="group grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-start py-12 border-b border-gray-100 relative transition-all hover:bg-gray-50/50 px-4 -mx-4 rounded-xl"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-black">
                {exp.duration[langKey]}
              </span>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 bg-gray-100 rounded-full ${fontConfig.getBadge(language)} text-gray-500 font-medium uppercase tracking-wider`}>
                  {exp.badge[langKey]}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div>
                <h3 className={`font-serif ${fontConfig.getExpTitle(language)} tracking-tight text-black mb-1`}>
                  {exp.title[langKey]}
                </h3>
                <p className={`${fontConfig.getExpCompany(language)} text-gray-600 font-medium`}>
                  {exp.company[langKey]}
                </p>
              </div>

              <p className={`${fontConfig.getExpDesc(language)} text-gray-500 leading-relaxed italic`}>
                {exp.description[langKey]}
              </p>

              <ul className="flex flex-col gap-2.5 my-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className={`${fontConfig.getExpBullet(language)} text-gray-600 flex gap-3 leading-relaxed`}>
                    <span className="text-gray-300 mt-1.5 flex-shrink-0">•</span>
                    {bullet[langKey]}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tech.map((t) => (
                  <span key={t} className={`px-2 py-0.5 border border-gray-200 rounded ${fontConfig.getTechTag(language)} text-gray-400 font-mono`}>
                    {t}
                  </span>
                ))}
              </div>

              {exp.links && exp.links.length > 0 && (
                <div className="flex gap-4 mt-2">
                  {exp.links.map((link, i) => (
                    <button
                      key={i}
                      onClick={() => openWebsite(link.url)}
                      className={`${fontConfig.getCardDesc(language)} text-black font-medium underline underline-offset-4 hover:text-gray-500 transition-colors`}
                    >
                      {link.label[langKey]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
