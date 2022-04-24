import React from 'react';
import cl from './card.module.css';
import img from "./pepsi.png"
const CardProduct = () => {
  return (
    <React.Fragment>
    <div className={cl.title}><h2>Карточка товара</h2></div> 
    <div className={cl.main}>
      <div className={cl.card}>
        <div className={cl.circle}></div>
        <div className={cl.content}>
          <h2>Pepsi cola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo doloremque impedit accusantium quibusdam mollitia unde explicabo minima possimus corrupti!
          </p>
          <button>Купить</button>
        </div>
        <img src={img} alt="pepsi"/>
      </div>
    </div>
    </React.Fragment>
  );
};

export default CardProduct;