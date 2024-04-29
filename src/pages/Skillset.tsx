// import React from 'react';

import { IMGS_LOGOS } from '../configs/img-index';
import { Languages } from '../configs/language';
import './index.css';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
interface Props {
  language: string;
}
function Skillset(props: Props) {
  const { language } = props;

  return (
    <div className="flex flex-col h-fit w-screen mb-20">
      <div className="flex justify-center text-3xl xl:text-6xl md:text-5xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
        <p className="indent-5 ">{language == Languages.EN ? 'Specialized Tool Skillset' : 'ทักษะในการใช้เครื่องมือที่เชี่ยวชาญ'}</p>
      </div>
      <div className="flex justify-center logos">
        <img src={IMGS_LOGOS.vsCode} alt="" />
        <img src={IMGS_LOGOS.dockerLogo} alt="" />
        <img src={IMGS_LOGOS.postMan} alt="" />
        <img src={IMGS_LOGOS.gitH} alt="" />
        <img src={IMGS_LOGOS.dbEaver} alt="" />
        <img src={IMGS_LOGOS.soutreeLogo} alt="" />
        <img src={IMGS_LOGOS.figma} alt="" />
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div>
            <p className="text-2xl xl:text-4xl md:text-4xl">
            {language == Languages.EN ? 'You can reach me through:' : 'สามารถติดต่อผมได้ ทาง'}
              </p>
          </div>
          <div>
            <p className="underline text-xl xl:text-3xl md:text-3xl">watcharachai.sk@gmail.com</p>
          </div>
          <div className="flex mt-3">
            <FaLinkedin size={50} />
            <MdEmail size={56} />
            <FaGithub size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
