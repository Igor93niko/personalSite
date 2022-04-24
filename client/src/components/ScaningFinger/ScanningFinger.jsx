import React from 'react';
import cl from './scanning.module.css';
const ScanningFinger = () => {
  return (
    <React.Fragment>
      <div className={cl.title}><h2>Сканер отпечатка пальцев</h2></div>
      <div lassName={cl.body}>
        <div className={cl.scan}>
          <div className={cl.finger}></div>
          <h2>Scanning...</h2>
        </div> 
      </div>
    </React.Fragment>  
  );
};

export default ScanningFinger;