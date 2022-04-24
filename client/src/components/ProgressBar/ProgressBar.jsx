import React, { useEffect, useRef } from 'react';
import cl from './progressbar.module.css';
const ProgressBar = () => {
  const doc = useRef(null);
  useEffect(()=>{
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `
    var $progress = document.getElementById('progress');
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var $percent = document.getElementById('${cl.percent}');
    $percent.innerHTML =  '0 %';
    window.onscroll = function(){
      var progress = (window.pageYOffset/totalHeight) * 100;
      $progress.style.height = progress + '%';
      progress<0?progress=0:null;
      $percent.innerHTML = \` \${Math.floor(progress)} %\`
    }
    `;
    doc.current.appendChild(s);
  },[]);
  return (
    <React.Fragment>
    <div className={cl.progress} id='progress' ref={doc}></div>
    <div className={cl.scrollpath}></div>
    <div id={cl.percent}></div>
  </React.Fragment>
  );
};

export default ProgressBar;