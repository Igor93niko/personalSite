import React from 'react';
import MainImage from "../components/MainImage/MainImage";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Card3D from "../components/3D card/Card3D";
import Forms from '../components/forms/forms';

const Main = () => {
  return (
    <div className='app'>
      <MainImage/>
      <Card3D/>
      <ProgressBar/>
      <Forms/>
    </div>
  );
};

export default Main;