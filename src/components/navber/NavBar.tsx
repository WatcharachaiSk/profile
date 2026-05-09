// import React from 'react';

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Languages } from '../../configs/language';
import { IMGS } from '../../configs/img-index';
import { ScrollEnum } from '../../enums/scroll.enum';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fontConfig } from '../../configs/font-config';

interface Props {
  handleChangeLanguage: (event: SelectChangeEvent) => void;
  handleButtonClick: (isScroll: string) => void;
  language: string;
}
function NavBar(props: Props) {
  const data = useSelector((state: RootState) => state.viewer?.data);
  const { language } = props;

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-md border-b border-black/5 z-[100] flex items-center justify-between px-10 transition-colors duration-300">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          props.handleButtonClick(ScrollEnum.Home);
        }}
        className="font-serif text-lg tracking-tight text-black no-underline"
      >
        Watcharachai
      </a>

      <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.handleButtonClick(ScrollEnum.Home);
            }}
            className={`${fontConfig.getNavLink(language)} font-normal text-gray-600 hover:text-black no-underline tracking-wide transition-colors`}
          >
            {language === Languages.EN ? 'Home' : 'หน้าแรก'}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.handleButtonClick(ScrollEnum.Works);
            }}
            className={`${fontConfig.getNavLink(language)} font-normal text-gray-600 hover:text-black no-underline tracking-wide transition-colors`}
          >
            {language === Languages.EN ? 'Experience' : 'ประสบการณ์'}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.handleButtonClick(ScrollEnum.About);
            }}
            className={`${fontConfig.getNavLink(language)} font-normal text-gray-600 hover:text-black no-underline tracking-wide transition-colors`}
          >
            {language === Languages.EN ? 'About' : 'เกี่ยวกับ'}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FormControl sx={{ minWidth: 80, height: 32 }} size="small">
            <Select
              value={language}
              onChange={props.handleChangeLanguage}
              displayEmpty
              sx={{
                fontSize: language === Languages.TH ? '16px' : '12px',
                '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                height: '32px',
              }}
            >
              <MenuItem value={Languages.EN} sx={{ fontSize: '12px' }}>
                <div className="flex items-center gap-2">
                  EN <img src={IMGS.flagsEN} alt="EN" className="rounded-full w-4 h-4 object-cover" />
                </div>
              </MenuItem>
              <MenuItem value={Languages.TH} sx={{ fontSize: '16px' }}>
                <div className="flex items-center gap-2">
                  TH <img src={IMGS.flagsTH} alt="TH" className="rounded-full w-4 h-4 object-cover" />
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </li>
        <li className={`${fontConfig.getBadge(language)} text-gray-400 tracking-wider uppercase`}>
          {language === Languages.EN ? `${data?.count_view || 0} views` : `${data?.count_view || 0} เข้าชม`}
        </li>
      </ul>

      {/* Mobile Language Toggle */}
      <div className="flex md:hidden items-center gap-4">
        <FormControl sx={{ minWidth: 70 }} size="small">
          <Select
            value={language}
            onChange={props.handleChangeLanguage}
            sx={{
              fontSize: language === Languages.TH ? '15px' : '11px',
              '.MuiOutlinedInput-notchedOutline': { border: 'none' },
              height: '32px',
            }}
          >
            <MenuItem value={Languages.EN} sx={{ fontSize: '11px' }}>EN</MenuItem>
            <MenuItem value={Languages.TH} sx={{ fontSize: '15px' }}>TH</MenuItem>
          </Select>
        </FormControl>
      </div>
    </nav>
  );
}

export default NavBar;
