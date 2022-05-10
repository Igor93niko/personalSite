import React from 'react';
import cl from './road.module.css';
const InfiniteRoad = () => {
  return (
    <div className={cl.body}>
      <div className={cl.infinite}>
        <div className={cl.shadow}></div>
      </div>
    </div>
  );
};

export default InfiniteRoad;