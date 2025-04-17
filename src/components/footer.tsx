import anime from 'animejs'

import { useEffect } from 'react'
import './footer.scss'




export default function Footer() {
  
useEffect(() => {
  const baseFire = document.getElementById('base-fire')
const fireNodes1 = document.querySelectorAll('#fireNodes1 .cf-flame')
const fireNodes2 = document.querySelectorAll('#fireNodes2 .cf-flame')
const fireNodes3 = document.querySelectorAll('#fireNodes3 .cf-flame')

function animateBaseFire() {
  anime({
   targets: baseFire,
   delay: anime.stagger(300),
   translateY: function(){return anime.random(0, -10);},
   keyframes: [
   {scale: .8},
   {scale: .825},
   {scale: .9},
   {scale: .925},
   {scale: 1}
 ],
 duration: 300,
 easing: 'easeInOutSine',
 loop: true,
 })
}

function animateFlame1() {
  anime({
   targets: fireNodes1,
   delay: anime.stagger(100),
   translateY: function(){return anime.random(0, 300);},
   rotate:30,
   opacity:function(){return anime.random(.5, 1);},
   translateX: function(){return anime.random(0, -60);},
   scale:0,
   skew: function () {return anime.random(0, 10);},
   loop: true,
   easing: "easeInOutSine",
 })
}

function animateFlame2(){
  anime({
   targets: fireNodes2,
   delay: anime.stagger(400),
   translateX: function(){return anime.random(-30, 0);},
   translateY: function(){return anime.random(0, -260);},
   scale:0,
   rotate: function() { return anime.random(0, 60); },
   skew:function(){
     return anime.random(0, 30);
   },
   loop: true,
   easing: "easeInOutSine"
 })
}

function animateFlame3() {
  anime({
   targets: fireNodes3,
   delay: anime.stagger(500),
   translateY: function(){return anime.random(-300, -200);},
   opacity:function(){return anime.random(0, 1);},
   translateX: function(){return anime.random(-50, 50);},
   scale:0,
   rotate: function() { return anime.random(0, -30); },
   skew: function () {return anime.random(0, 20);},
   loop: true,
   easing: "easeInOutSine",
 })
}

  animateFlame1()
  animateFlame2()
  animateFlame3()
  animateBaseFire()

}, [])



  return (
    <footer className="bg-black absolute w-full h-40 mt-20 mb-10 flex flex-col items-center justify-center">
      <div className="cf-container ">
        <div className="cf-flame-container" id="fireNodes1">
        </div>
        <div className="cf-flame-container" id="fireNodes2">
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
        </div>
        <div className="cf-flame-container" id="base-fire">
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
          <div className="cf-flame"></div>
        </div>
        <div className="cf-log-container">
          <div className="cf-log"></div>
          <div className="cf-log"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-0 pb-0">
        <p className="text-white ">Have a great day ahead</p>
        <p className="text-white">Yashwanth Napa</p>
      </div>
    </footer>
  );
}
