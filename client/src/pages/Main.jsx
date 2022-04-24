import React from 'react';
import Contacts from "../components/Contacts/Contacts";
import HelpfulInfo from "../components/HelpfullInfo/HelpfulInfo";
import MainImage from "../components/MainImage/MainImage";
import StakTechnology from "../components/Stak/StakTechnology";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Card3D from "../components/3D card/Card3D";

const Main = () => {
  return (
    <div className='app'>
      <MainImage/>
      <StakTechnology />
      <hr/>
      <HelpfulInfo />
      <hr/>
      <Contacts/>
      <Card3D/>
      <ProgressBar/>
    </div>
  );
};

export default Main;