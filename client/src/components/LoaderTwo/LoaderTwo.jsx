import React from 'react';
import cl from './loader.module.css';
const LoaderTwo = () => {
  return (
    <React.Fragment>
      <div className={cl.title}><h2> Печать - Loader</h2></div> 
      <div className={cl.main}>
        <div className={cl.loader}>
          <h2>Loading...</h2>
        </div>
      </div> 
    </React.Fragment>

  );
};

export default LoaderTwo;