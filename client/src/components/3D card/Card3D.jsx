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
              <a href="https://vk.com/gari1993niko" style={{"--clr":"#07b6f0"}}><i className="fa fa-vk" aria-hidden="true"></i></a>
              <a href="https://github.com/Igor93niko" style={{"--clr":"#5b5e5e"}}><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;