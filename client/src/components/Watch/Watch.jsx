import React,{useRef, useEffect} from 'react';
import cl from './watch.module.css';
const Watch = () => {

  const doc = useRef(null);
  useEffect(()=>{
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `
    var hours = document.getElementById('hours');
    var minute = document.getElementById('minute');
    var seconds = document.getElementById('seconds');
    
    var hh = document.getElementById('hh');
    var mm = document.getElementById('mm');
    var ss = document.getElementById('ss');

    var dot_h = document.getElementById('hourDots');
    var dot_m = document.getElementById('minuteDots');
    var dot_s = document.getElementById('seconDots');

    setInterval(()=>{
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
     
      h < 10 ? h = '0' + h: h;
      m < 10 ? m = '0' + m: m;
      s < 10 ? s = '0' + s: s;


      hours.innerHTML = h;
      minute.innerHTML = m;
      seconds.innerHTML = s;


      hh.style.strokeDashoffset = 440 - (440 * h) / 24;
      mm.style.strokeDashoffset = 440 - (440 * m) / 60;
      ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    
      dot_h.style.transform = \`rotate(\${h*15}deg)\`;
      dot_m.style.transform = \`rotate(\${m*6}deg)\`;
      dot_s.style.transform = \`rotate(\${s*6}deg)\`;

    },1000)
    `;
    doc.current.appendChild(s);
  },[]);
  
  return (
    <div className={cl.body} ref={doc}>
    <div className={cl.watch}>
    <div className={cl.circle} style={{'--clr':'#ff2972'}}>
      <div className={cl.dots} id="hourDots" ></div>
      <div id="hours">00</div>  
      <svg>
        <circle cx="70" cy="70" r="70"/>
        <circle cx="70" cy="70" r="70" id="hh"/>
      </svg>
    </div>
    <div className={cl.circle} style={{'--clr':'#fee800'}}>
      <div className={cl.dots} id='minuteDots'></div>
      <div id="minute" >00</div> 
      <svg>
        <circle cx="70" cy="70" r="70"/>
        <circle cx="70" cy="70" r="70"  id="mm"/>
      </svg> 
    </div>
    <div className={cl.circle} style={{'--clr':'#04fc43'}}>
      <div className={cl.dots} id='seconDots' ></div>
      <div id="seconds">00</div>
      <svg>
        <circle cx="70" cy="70" r="70"/>
        <circle cx="70" cy="70" r="70" id="ss"/>
      </svg>  
    </div>
  </div>
    </div>
  );
};

export default Watch;