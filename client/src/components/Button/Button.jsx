import React from 'react';
import cl from './button.module.css';
const Button = (props) => {
  return (
      <a className={cl.link} href={props.link}><span>{props.text}</span></a>
  );
};

export default Button;