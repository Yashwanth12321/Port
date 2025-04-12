"use client"
import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const StarrySky = () => {
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);
  const num = 60;

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    starryNight();
    shootingStars();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const starryNight = () => {
    anime({
      targets: ['#sky .star'],
      opacity: [
        { duration: 700, value: '0' },
        { duration: 700, value: '1' }
      ],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 50 * i
    });
  };

  const shootingStars = () => {
    anime({
      targets: ['#shootingstars .wish'],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        { duration: 700, value: '1' }
      ],
      width: [
        { value: '150px' },
        { value: '0px' }
      ],
      translateX: 350
    });
  };

  const randomRadius = () => Math.random() * 0.7 + 0.6;
  const getRandomX = () => Math.floor(Math.random() * vw).toString();
  const getRandomY = () => Math.floor(Math.random() * vh).toString();

  return (
    <div id="App">
      <svg id="sky">
        {[...Array(num)].map((_, i) => (
          <circle
            key={i}
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;