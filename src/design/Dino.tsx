"use client";

import dynamic from 'next/dynamic';
import { useRef } from 'react';
// @ts-expect-error this lib doest have its ts declarations
const ChromeDinoGame = dynamic(() => import('react-chrome-dino'), { ssr: false });

const Dino = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        if (divRef.current) {
            divRef.current.focus();
            document.body.style.overflow = 'hidden';
            const info=document.querySelector('.Info');
            if(info) info.innerHTML="<p>Click outside it or unhover from it to exit</p>";
        }
    };
    const handleBlur = () => {
        document.body.style.overflow = 'auto';
        const info=document.querySelector('.Info');
        if(info) info.innerHTML="<p>Click on it or hover over it  </p>";
    };
  return (
    <div>
      <div ref={divRef} onMouseEnter={handleClick} onMouseLeave={handleBlur} className="">
        <div className='Info'>
          Click on it or hover over it
        </div>
        <ChromeDinoGame />
      </div>
    </div>
  )
}

export default Dino