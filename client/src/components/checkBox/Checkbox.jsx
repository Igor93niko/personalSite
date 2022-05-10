import React from 'react';
import cl from './checkbox.module.css';
const Checkbox = () => {
  return (
    <div className={cl.body}>
      <label className={cl.label}>
        <input type="checkbox"/>
        <span ></span>
        <text>OFF</text>
        <text >ON</text>
      </label>
    </div>
  );
};

export default Checkbox;