import React from 'react';
import Loader from "../components/Loader/Loader";
import LoaderTwo from "../components/LoaderTwo/LoaderTwo";
import CardProduct from "../components/CardProduct/CardProduct";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ScanningFinger from '../components/ScaningFinger/ScanningFinger';
import Checkbox from '../components/checkBox/Checkbox';
import InfiniteRoad from '../components/InfiniteRoad/InfiniteRoad';
import Watch from '../components/Watch/Watch';


const Animation = () => {
  return (
    <div className='app'>
      <Loader/>
      <LoaderTwo/>
      <CardProduct/>
      <ProgressBar/>
      <InfiniteRoad/>
      <Checkbox/>
      <Watch/>
      <ScanningFinger/>
  </div>
  );
};

export default Animation;