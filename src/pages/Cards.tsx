// import React from 'react';

import { IMGS } from '../configs/img-index';
import { Languages } from '../configs/language';

interface Props {
  language: string;
}
function Cards(props: Props) {
  const { language } = props;

  return (
    <div className="flex h-fit w-screen justify-center bg-gray-800 py-5" style={{ overflow: 'auto' }}>
      {/*  */}
      <div className="w-96 rounded  shadow-xl bg-white mx-2">
          <img className="object-contain" src={IMGS.asInternship} alt="image description" />
        <div className="">
          <div className="flex">
            <p className="indent-0 md:indent-5 xl:indent-5 text-sm xl:text-4xl md:text-xl" style={{ fontFamily: 'THSarabunNew-Bold' }}>
              {language == Languages.EN ? 'Mobile Developer' : 'Mobile Developer'}
              <span className="text-blue-600"> {language == Languages.EN ? ' (Internship)' : ' (สหกิจศึกษา)'}</span>
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-96 rounded  shadow-xl bg-white mx-2">
        <div className="flex justify-center m-2">
          <img className="object-contain" src={IMGS.react} alt="image description" />
        </div>
        <div className="">
          <div className="font-bold text-xl mb-2">Mobile Developer</div>
        </div>
      </div>
      {/*  */}
      <div className="w-96 rounded  shadow-xl bg-white mx-2">
        <div className="flex justify-center m-2">
          <img className="object-contain" src={IMGS.react} alt="image description" />
        </div>
        <div className="">
          <div className="font-bold text-xl mb-2">Mobile Developer</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
