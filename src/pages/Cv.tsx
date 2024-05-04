import { PDF } from '../configs/pdf-index';

// import React from 'react';
interface Props {
  language: string;
}
function Cv(props: Props) {
  const { language } = props;
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe src={PDF.cv_en_th} title="Example Website" frameBorder="0" style={{ width: '100%', height: '100%' }} allowFullScreen></iframe>
    </div>
  );
}

export default Cv;
