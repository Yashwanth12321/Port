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
        }
    };
    const handleBlur = () => {
        document.body.style.overflow = 'auto';
    };
  return (
    <div>
      <div ref={divRef} onMouseEnter={handleClick} onMouseLeave={handleBlur} className="">
        <ChromeDinoGame />
      </div>
    </div>
  )
}

export default Dino