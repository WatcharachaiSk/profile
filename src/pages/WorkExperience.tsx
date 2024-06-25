// import React from 'react';
import { Languages } from '../configs/language';
import { LinkEnum } from '../enums/link.enum';

interface Props {
  language: string;
  years: number;
  months: number;
  yearsEs: number;
  monthsEs: number;
  openWebsite: (link: string) => void;
}

function WorkExperience(props: Props) {
  const { language } = props;

  return (
    <div className="flex flex-col h-fit w-screen">
      <div className="flex justify-center items-center text-xl xl:text-6xl md:text-5xl">
        <p style={{ fontFamily: 'THSarabunNew-Bold' }} className="indent-5 text-blue-600">
          {language == Languages.EN ? 'My Work Experience / Project Work' : 'ประสบการณ์การทำงาน / ผลงาน'}
        </p>
        <p className="indent-3 text-lg md:text-xl xl:text-xl">
          {language == Languages.EN
            ? `(${props.years == 1 || props.years == 0 ? `${props.years} year` : `${props.years} years`} ${
                props.months == 1 || props.months == 0 ? `${props.months} month` : `${props.months} months`
              })`
            : `(${props.years} ปี ${props.months} เดือน)`}
        </p>
      </div>
      {/* Time Line */}
      <div className="flex justify-center">
        <div className="flex flex-1 flex-col">
          <div className="xl:indent-28 md:indent-16 flex">
            <p className="text-lg xl:text-4xl md:text-2xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              {language == Languages.EN ? 'Mobile Developer' : 'Mobile Developer'}
              <span className="text-blue-600"> {language == Languages.EN ? ' (Internship)' : ' (สหกิจศึกษา)'}</span>
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-2xl md:text-xl">
              {language == Languages.EN ? 'Company: Electronic Shell Co., Ltd.' : 'บริษัท: อิเลคทรอนิกส์ เชลล์ จำกัด'}
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-xl md:text-lg">
              {language == Languages.EN ? 'June - October 2022 (4 months)' : 'มิ.ย. - ต.ค. 2565 (4 เดือน)'}
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex flex-col md:flex-row xl:flex-row">
            <a
              href="#"
              onClick={() => {
                props.openWebsite(LinkEnum.LinkCoop);
              }}
              className="text-base xl:text-xl md:text-lg text-blue-600"
            >
              {language == Languages.EN ? `You can watch it at: [facebook] click` : `สามารถรับชมได้ที่: [facebook] คลิก`}
            </a>
            <p className="indent-2 text-black">{language == Languages.EN ? 'At minute 2:16:00.' : 'นาทีที่: 2:16:00'}</p>
          </div>
        </div>
        <div className="flex flex-none justify-center">
          <ol className="relative border-s-8 border-blue-600 dark:border-gray-700">
            <div className="absolute w-6 h-6 bg-blue-600 rounded-full -start-4 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          </ol>
        </div>
        <div className="flex flex-1 flex-col py-5">
          <div>
            <p className="mx-3 xl:indent-12 md:indent-5 text-lg xl:text-4xl md:text-2xl text-blue-600" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              React Native TypeScript
            </p>
          </div>
          <div className="mx-3 xl:indent-12 md:indent-5 text-base xl:text-2xl md:text-lg">
            <p className="">
              {language == Languages.EN
                ? "Designed and developed an asset verification system utilizing mobile cameras for QR code scanning and integration with the company's API. Implemented using React Native and TypeScript."
                : 'ออกแบบและพัฒนาระบบตรวจสอบครุภัณฑ์โดยมีการใช้กล้องมือถือเพื่อสแกนคิวอาร์โค้ดและเชื่อมต่อกับ API ของบริษัท พัฒนาด้วย React Native, TypeScript'}
            </p>
            <p className="">
              {language == Languages.EN
                ? '- Participated in the internship project competition for the 2nd semester of 2565 (Science and Technology category).'
                : '- เข้าร่วมการประกวดโครงงานสหกิจศึกษา ประจำภาคการศึกษา 2/2565 (ด้านวิทยาศาสตร์และเทคโนโลยี)'}
            </p>
            <p className="">
              {language == Languages.EN
                ? '- Project name: Application to check the status of equipment by scan QR code.'
                : '- ชื่อผลงาน: แอปพลิเคชันตรวจสอบสถานะครุภัณฑ์ผ่านการสแกนคิวอาร์โค้ด'}
            </p>
            <p className="">{language == Languages.EN ? '- Competition result: Honorable Mention Award' : '- ผลการประกวด: รางวัลชมเชย'}</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center">
        <div className="flex flex-1 flex-col">
          <div className="xl:indent-28 md:indent-16 flex">
            <p className="text-lg xl:text-4xl md:text-2xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              {language == Languages.EN ? 'Full-Stack Developer' : 'Full-Stack Developer'}
              <span className="text-blue-600"> {language == Languages.EN ? ' (Thesis)' : ' (ปริญญานิพนธ์)'}</span>
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-2xl md:text-xl">
              {language == Languages.EN
                ? 'Development of Web Application and Android Based Asset Management System'
                : 'การพัฒนาระบบจัดครุภัณฑ์ผ่านเว็บไซต์และระบบปฏิบัติการแอนดรอยด์'}
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-xl md:text-lg">
              {language == Languages.EN ? 'November 2022 - February 2023 (4 months)' : 'พ.ย. 2565 - ก.พ. 2566 (4 เดือน)'}
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <a
              href="#"
              onClick={() => {
                props.openWebsite(LinkEnum.YTTs);
              }}
              className="text-base xl:text-xl md:text-lg text-blue-600"
            >
              {language == Languages.EN ? `You can watch it at: ${LinkEnum.YTTs} click` : `สามารถรับชมได้ที่: ${LinkEnum.YTTs} คลิก`}
            </a>
          </div>
        </div>
        <div className="flex flex-none justify-center">
          <ol className="relative border-s-8 border-blue-600 dark:border-gray-700">
            <div className="absolute w-6 h-6 bg-blue-600 rounded-full mt-1.5 -start-4 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          </ol>
        </div>
        <div className="flex flex-1 flex-col py-5">
          <div>
            <p className="mx-3 xl:indent-12 md:indent-5 text-lg xl:text-4xl md:text-2xl text-blue-600" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              React, React Native, Node-Express, Sequelize
            </p>
          </div>
          <div className="mx-3 xl:indent-12 md:indent-5 text-base xl:text-2xl md:text-lg">
            <p>
              {language == Languages.EN
                ? 'Developed a system for managing and tracking asset status through QR code scanning via mobile devices, with the capability to generate QR codes via the website.'
                : 'เป็นระบบจัดการและติดตามสถานะครุภัณฑ์ ผ่านการ สแกนคิวอาร์โค้ดผ่านทางมือถือ โดยสามารถออกคิวอาร์โค้ดได้ผ่านทางเว็บไซต์'}
            </p>
            <p>
              {language == Languages.EN
                ? '- Designed and developed APIs and database using Node.js (Express) and MySQL.'
                : '- ออกแบบพัฒนา API และ Database,โดยใช้  NodeJS(Express), MySQL '}
            </p>
            <p>{language == Languages.EN ? '- Deployed on Ubuntu 20.04, Nginx, and PM2.' : '- นำไปใช้งานบน Ubuntu 20.04, Nginx, and PM2.'}</p>
            <p>
              {language == Languages.EN
                ? '- Front End (Web): Developed the basic data management system, QR code generation for assets, and user data management using React.'
                : '- Front End (Web) ระบบจัดการข้อมูลพื้นฐาน คิวอาร์โค้ดครุภัณฑ์ และ ข้อมูลผู้ใช้งาน โดยใช้ React'}
            </p>
            <p>
              {language == Languages.EN
                ? '- Front End (Mobile Application): Developed the asset status checking system via QR code scanning using React Native.'
                : '- Front End (Mobile Application) ระบบสแกนคิวอาร์โค้ดครุภัณฑ์เพื่อตรวจสอบสถานะ โดยใช้ React Native'}
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center">
        <div className="flex flex-1 flex-col">
          <div className="xl:indent-28 md:indent-16 flex">
            <p className="text-lg xl:text-4xl md:text-2xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              {language == Languages.EN ? 'Full-Stack Developer' : 'Full-Stack Developer'}
              <span className="text-blue-600"> {language == Languages.EN ? '(Mid-Level)' : '(Mid-Level)'}</span>
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-2xl md:text-xl">
              {language == Languages.EN ? 'Company: Electronic Shell Co., Ltd.' : 'บริษัท: อิเลคทรอนิกส์ เชลล์ จำกัด'}
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-xl md:text-lg">
              {language == Languages.EN ? 'April 2023 - June 2024 (1 year 3 months)' : 'เม.ย. 2566 - มิ.ย. 2567 (1 ปี 3 เดือน)'}
              {/* {language == Languages.EN ? 'April 2023 - Present ' : 'เม.ย. 2566 - ปัจจุบัน '} */}
              {/* {language == Languages.EN
                ? `(${props.yearsEs == 1 || props.yearsEs == 0 ? `${props.yearsEs} year` : `${props.yearsEs} years`} ${
                    props.monthsEs == 1 || props.monthsEs == 0 ? `${props.monthsEs} month` : `${props.monthsEs} months`
                  })`
                : `(${props.yearsEs} ปี ${props.monthsEs} เดือน)`} */}
            </p>
          </div>
        </div>
        <div className="flex flex-none justify-center">
          <ol className="relative border-s-8 border-blue-600 dark:border-gray-700">
            <div className="absolute w-6 h-6 bg-blue-600 rounded-full mt-1.5 -start-4 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          </ol>
        </div>
        <div className="flex flex-1 flex-col py-5">
          <div>
            <p className="mx-3 xl:indent-12 md:indent-5 text-lg xl:text-4xl md:text-2xl text-blue-600" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              Vue, React, Nest, Docker
            </p>
          </div>
          <div className="mx-3 xl:indent-12 md:indent-5 text-base xl:text-2xl md:text-lg">
            <p>
              {language == Languages.EN
                ? 'Developed websites, including UX/UI design, API, and database design, as well as deployment using Docker.'
                : 'พัฒนาเว็บไซต์ ออกแบบ UX/UI, API และ Database รวมไปถึงการ Deploy โดยใช้ Docker'}
            </p>
            <p>
              {language == Languages.EN
                ? '- Provide consultation and supervise interns and cooperative education students.'
                : '- ให้คำปรึกษาและควบคุมทีมน้องฝึกงานและน้องสหกิจศึกษา'}
            </p>
            <p>
              {language == Languages.EN
                ? '- Designed and developed APIs using NestJS, incorporating technologies such as JWT, TypeORM, SSE, and Socket.io., MySQL, PostgresSQL Docker Dockerfile, docker-compose, PM2'
                : '- ออกแบบพัฒนา API ด้วย Nest, JWT, TypeORM, SSE, Socket.io, MySQL, PostgresSQL Docker Dockerfile, docker-compose, PM2'}
            </p>
            <p>{language == Languages.EN ? '- Front-End Development:' : '- การพัฒนา Front-End: '}</p>
            <p className="mx-3 xl:indent-14 md:indent-8 ">
              {language == Languages.EN ? '- Vue: Utilized Vuex and Vuetify.' : '- Vue: Vuex, Vuetify'}
            </p>
            <p className="mx-3 xl:indent-14 md:indent-8 ">
              {language == Languages.EN ? '- React: Implemented ReduxToolkit and Mui.' : '- React: ReduxToolkit, Mui'}
            </p>
            <p>
              {language == Languages.EN
                ? '- Employed various tools and libraries including Vite, Tailwindcss, Bootstrap, Lodash, Lottie, Axios, Moment, and Dotenv.'
                : '- ใช้เครื่องมือและไลบรารีต่างๆ รวมถึง Vite, Tailwindcss, Bootstrap, Lodash, Lottie, Axios, Moment, และ Dotenv ในการพัฒนางาน'}
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center">
        <div className="flex flex-1 flex-col">
          <div className="xl:indent-28 md:indent-16 flex">
            <p className="text-lg xl:text-4xl md:text-2xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              {language == Languages.EN ? 'Full-Stack Developer' : 'Full-Stack Developer'}
              <span className="text-blue-600"> {language == Languages.EN ? '(Contract)' : '(Contract)'}</span>
            </p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-2xl md:text-xl">{language == Languages.EN ? 'AIS Company' : 'AIS Company'}</p>
          </div>
          <div className="xl:indent-28 md:indent-20 flex">
            <p className="text-base xl:text-xl md:text-lg">
              {language == Languages.EN ? 'July 2024 - Present ' : 'ก.ค. 2567 - ปัจจุบัน '}
              {language == Languages.EN
                ? `(${props.yearsEs == 1 || props.yearsEs == 0 ? `${props.yearsEs} year` : `${props.yearsEs} years`} ${
                    props.monthsEs == 1 || props.monthsEs == 0 ? `${props.monthsEs} month` : `${props.monthsEs} months`
                  })`
                : `(${props.yearsEs} ปี ${props.monthsEs} เดือน)`}
            </p>
          </div>
        </div>
        <div className="flex flex-none justify-center">
          <ol className="relative border-s-8 border-blue-600 dark:border-gray-700">
            <div className="absolute w-6 h-6 bg-blue-600 rounded-full mt-1.5 -start-4 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          </ol>
        </div>
        <div className="flex flex-1 flex-col py-5">
          <div>
            <p className="mx-3 xl:indent-12 md:indent-5 text-lg xl:text-4xl md:text-2xl text-blue-600" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              Azure Cloud, AWS
            </p>
          </div>
          <div className="mx-3 xl:indent-12 md:indent-5 text-base xl:text-2xl md:text-lg">
            <p>
              {language == Languages.EN
                ? 'Support: When issues arise with the app, I can debug the code to identify the root cause of the problem and pass the work to the development team.'
                : 'Support เมื่อเกิดปัญหาเกี่ยวกับ App เช็ค Code เพื่อหาสาเหตุของปัญหา และส่งต่องานให้กับทีม Dev'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
