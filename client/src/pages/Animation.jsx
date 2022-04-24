import React from 'react';
import Loader from "../components/Loader/Loader";
import LoaderTwo from "../components/LoaderTwo/LoaderTwo";
import ImageShow from "../components/ImageShow/ImageShow";
import CardProduct from "../components/CardProduct/CardProduct";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ScanningFinger from '../components/ScaningFinger/ScanningFinger';


const Animation = () => {
  return (
    <div className='app'>
      <Loader/>
      <LoaderTwo/>
      <ImageShow/>
      <CardProduct/>
      <ProgressBar/>
      <ScanningFinger/>
  </div>
  );
};

export default Animation;