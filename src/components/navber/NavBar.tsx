// import React from 'react';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Languages } from '../../configs/language';
import { IMGS } from '../../configs/img-index';
import { ScrollEnum } from '../../enums/scroll.enum';

interface Props {
  handleChangeLanguage: (event: SelectChangeEvent) => void;
  handleButtonClick: (isScroll: string) => void;
  language: string;
}
function NavBar(props: Props) {
  const { language } = props;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                onClick={() => {
                  props.handleButtonClick(ScrollEnum.Home);
                }}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                {language == Languages.EN ? 'Home' : 'หลัก'}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.handleButtonClick(ScrollEnum.Cv);
                }}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {language == Languages.EN ? 'CV' : 'ประวัติ'}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.handleButtonClick(ScrollEnum.Works);
                }}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {language == Languages.EN ? 'Work Experience' : 'ประสบการณ์การทำงาน'}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.handleButtonClick(ScrollEnum.About);
                }}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {language == Languages.EN ? 'About' : 'เกี่ยวกับ/ติดต่อ'}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <FormControl sx={{ minWidth: 100, height: 5 }} size="small">
                  <InputLabel id="demo-simple-select-autowidth-label">{language == Languages.EN ? 'language' : 'ภาษา'}</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={language}
                    onChange={props.handleChangeLanguage}
                    autoWidth
                    label={language == Languages.EN ? 'language' : 'ภาษา'}
                  >
                    <MenuItem value={Languages.EN}>
                      <div className="flex justify-center items-center">
                        {Languages.EN} <img src={IMGS.flagsEN} className="rounded-full object-cover h-5 w-5 "></img>
                      </div>
                    </MenuItem>
                    <MenuItem value={Languages.TH}>
                      <div className="flex justify-center items-center">
                        {Languages.TH} <img src={IMGS.flagsTH} className="rounded-full object-cover h-5 w-5 "></img>
                      </div>
                    </MenuItem>
                  </Select>
                </FormControl>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden xl:hidden">
          <FormControl sx={{ minWidth: 100, height: 5 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">{language == Languages.EN ? 'language' : 'ภาษา'}</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={language}
              onChange={props.handleChangeLanguage}
              autoWidth
              label={language == Languages.EN ? 'language' : 'ภาษา'}
            >
              <MenuItem value={Languages.EN}>
                <div className="flex justify-center items-center">
                  {Languages.EN} <img src={IMGS.flagsEN} className="rounded-full object-cover h-5 w-5 "></img>
                </div>
              </MenuItem>
              <MenuItem value={Languages.TH}>
                <div className="flex justify-center items-center">
                  {Languages.TH} <img src={IMGS.flagsTH} className="rounded-full object-cover h-5 w-5 "></img>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        {/*  */}
      </div>
    </nav>
  );
}

export default NavBar;
