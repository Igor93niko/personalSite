import React from 'react';
import cl from './image.module.css';
const ImageShow = () => {
  return (
    <React.Fragment>
      <div className={cl.title}><h2>Постепенное появление</h2></div> 
      <div className={cl.main}>
        <div className={cl.banner}>
        <div className={cl.block} style={{"--i":0}}></div>
        <div className={cl.block} style={{"--i":1}}></div>
        <div className={cl.block} style={{"--i":2}}></div>
        <div className={cl.block} style={{"--i":3}}></div>
        <div className={cl.block} style={{"--i":4}}></div>
        <div className={cl.block} style={{"--i":5}}></div>
        <div className={cl.block} style={{"--i":6}}></div>
        <div className={cl.block} style={{"--i":7}}></div>
        <div className={cl.block} style={{"--i":8}}></div>
        <div className={cl.block} style={{"--i":9}}></div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default ImageShow;