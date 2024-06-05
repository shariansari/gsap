import React from 'react';
import './App.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const App = () => {
  const gsapref = useRef();

  useEffect(() => {
    gsap.to(gsapref.current, {
      opacity: 1,
      delay: 0.7,
      rotate: 360,
      x: 100,
      duration: 2 // Duration of the rotation animation (in seconds)
    });
  }, []);

  return (
    <div className='App'>
     <div style={{marginTop:50}}>
     <img ref={gsapref}
        style={{ opacity: 0, height: 400 }}
        src="https://i.pinimg.com/originals/f4/8f/ea/f48fea746a31d600627605dcfe902b58.png"
        alt="wheel" />
     </div>
    </div>
  );
}

export default App;
