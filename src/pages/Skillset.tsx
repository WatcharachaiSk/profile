// import React from 'react';

import { IMGS, IMGS_LOGOS } from '../configs/img-index';
import { Languages } from '../configs/language';
import './index.css';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import { LinkEnum } from '../enums/link.enum';

interface Props {
  openWebsite: (link: string) => void;
  language: string;
}

function Skillset(props: Props) {
  const { language } = props;

  const tools = [
    { name: 'VS Code', icon: IMGS_LOGOS.vsCode },
    { name: 'Docker', icon: IMGS_LOGOS.dockerLogo },
    { name: 'Postman', icon: IMGS_LOGOS.postMan },
    { name: 'Git', icon: IMGS_LOGOS.gitH },
    { name: 'DBeaver', icon: IMGS_LOGOS.dbEaver },
    { name: 'Figma', icon: IMGS_LOGOS.figma },
  ];

  return (
    <section className="py-24 px-10 max-w-[1100px] mx-auto border-t border-gray-100">
      <p className="section-label">{language === Languages.EN ? 'Tools' : 'เครื่องมือ'}</p>
      <h2 className="section-title">
        {language === Languages.EN ? (
          <>Specialized<br /><em className="not-italic text-gray-400">Skillset</em></>
        ) : (
          <>ทักษะความเชี่ยวชาญ<br /><em className="not-italic text-gray-400">เครื่องมือ</em></>
        )}
      </h2>

      <div className="flex flex-wrap justify-center gap-12 mb-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        {tools.map((tool) => (
          <img 
            key={tool.name} 
            src={tool.icon} 
            alt={tool.name} 
            className="h-10 w-auto object-contain hover:scale-110 transition-transform" 
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-50 rounded-3xl p-10 md:p-16">
        <div className="order-2 md:order-1">
          <h3 className="font-serif text-3xl mb-6">
            {language === Languages.EN ? 'Let\'s build something together.' : 'มาสร้างสรรค์ผลงานด้วยกัน'}
          </h3>
          <p className="text-gray-500 mb-8 max-w-sm">
            {language === Languages.EN 
              ? 'I\'m always open to new opportunities and interesting projects.' 
              : 'ผมเปิดรับโอกาสใหม่ๆ และโปรเจกต์ที่น่าสนใจเสมอ'}
          </p>
          
          <div className="flex gap-4">
            <Tooltip title="LinkedIn">
              <button 
                onClick={() => props.openWebsite(LinkEnum.LinkedIn)}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <FaLinkedin size={20} />
              </button>
            </Tooltip>
            <Tooltip title="GitHub">
              <button 
                onClick={() => props.openWebsite(LinkEnum.Git)}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <FaGithub size={20} />
              </button>
            </Tooltip>
            <Tooltip title="Email">
              <a 
                href={`mailto:${LinkEnum.Email}`}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <MdEmail size={22} />
              </a>
            </Tooltip>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[300px] aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={IMGS.profileW} 
              alt="Contact" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skillset;
