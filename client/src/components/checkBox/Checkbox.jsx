import React from 'react';
import cl from './checkbox.module.css';
const Checkbox = () => {
  return (
    <div className={cl.body}>
      <label className={cl.label}>
        <input type="checkbox"/>
        <span ></span>
        <label>OFF</label>
        <label>ON</label>
      </label>
    </div>
  );
};

export default Checkbox;