import React from 'react';
import cl from './card3d.module.css';
const Card3D = () => {
  return (
    <div className={cl.main}>
        <div className={cl.card}>
        <div className={cl.imgBox}>
          <div className={cl.image}></div>
        </div>
        <div className={cl.details}>
          <div className={cl.content}>
            <h2>Всем привет!<br/><span> Я  JS-разработчик</span></h2>
            <div className={cl.socialIcons}>
              <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;