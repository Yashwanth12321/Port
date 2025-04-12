'use client';
import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function ChromeDinoGame() {
  const canvasRef = useRef(null);
  const gameContainerRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [nightMode, setNightMode] = useState(true);
     
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const gameContainer = gameContainerRef.current;
    
    // Set canvas dimensions
    canvas.width = ;
    canvas.height = 300;
    
    // Focus canvas on load to prevent page scrolling
    canvas.focus();
    
    // Game variables
    let animationId;
    let speed = 6;
    let gameSpeed = 1;
    let spawnTimer = 0;
    let lastTime = 0;
    let frameCount = 0;
    
    // Sprite states for animation
    const dinoSprite = {
      frameX: 0,
      frameY: 0,
      maxFrame: 2,
      frameTimer: 0,
      frameInterval: 60, // ms
    };
    
    // Dino properties
    const dino = {
      x: 50,
      y: canvas.height - 60,
      width: 50,
      height: 60,
      jumping: false,
      jumpHeight: 15,
      gravity: 0.8,
      velocityY: 0,
      originalY: canvas.height - 60,
      draw() {
        // Draw dino based on state
        if (this.jumping) {
          // Jumping pose
          ctx.fillStyle = nightMode ? '#8a8a8a' : '#535353';
          ctx.fillRect(this.x, this.y, this.width, this.height);
          
          // Eye
          ctx.fillStyle = nightMode ? '#f0f0f0' : 'white';
          ctx.fillRect(this.x + 35, this.y + 10, 8, 8);
          
          // Leg up position
          ctx.fillStyle = nightMode ? '#8a8a8a' : '#535353';
          ctx.fillRect(this.x + 10, this.y + this.height, 15, 10);
        } else {
          // Running animation
          ctx.fillStyle = nightMode ? '#8a8a8a' : '#535353';
          ctx.fillRect(this.x, this.y, this.width, this.height);
          
          // Eye
          ctx.fillStyle = nightMode ? '#f0f0f0' : 'white';
          ctx.fillRect(this.x + 35, this.y + 10, 8, 8);
          
          // Animate legs
          if (dinoSprite.frameX === 0) {
            ctx.fillRect(this.x + 10, this.y + this.height, 15, 10);
          } else if (dinoSprite.frameX === 1) {
            ctx.fillRect(this.x + 30, this.y + this.height, 15, 10);
          } else {
            ctx.fillRect(this.x + 20, this.y + this.height - 5, 15, 15);
          }
        }
      },
      jump() {
        if (!this.jumping) {
          this.jumping = true;
          this.velocityY = -this.jumpHeight;
          
          // Jump animation
          anime({
            targets: this,
            y: this.y - 100,
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => {
              anime({
                targets: this,
                y: this.originalY,
                duration: 300,
                easing: 'easeInQuad'
              });
            }
          });
        }
      },
      update(deltaTime) {
        // Jump physics
        if (this.jumping) {
          this.velocityY += this.gravity;
          
          if (this.y >= this.originalY) {
            this.y = this.originalY;
            this.jumping = false;
            this.velocityY = 0;
          }
        }
        
        // Update sprite animation
        if (!this.jumping) {
          dinoSprite.frameTimer += deltaTime;
          if (dinoSprite.frameTimer > dinoSprite.frameInterval) {
            dinoSprite.frameX = (dinoSprite.frameX + 1) % dinoSprite.maxFrame;
            dinoSprite.frameTimer = 0;
          }
        }
      }
    };
    
    // Cactus class
    class Cactus {
      constructor() {
        this.width = 20 + Math.random() * 30;
        this.height = 50 + Math.random() * 40;
        this.x = canvas.width;
        this.y = canvas.height - this.height;
        this.counted = false;
        
        // Type determines cactus appearance
        this.type = Math.floor(Math.random() * 3);
        
        // AnimeJS entrance animation
        this.initialY = this.y + 50;
        anime({
          targets: this,
          y: this.y,
          duration: 200,
          easing: 'easeOutBack'
        });
      }
      
      draw() {
        ctx.fillStyle = nightMode ? '#535353' : '#535353';
        
        if (this.type === 0) {
          // Single cactus
          ctx.fillRect(this.x, this.y, this.width, this.height);
          // Spikes
          ctx.fillRect(this.x - 5, this.y + 10, 5, 5);
          ctx.fillRect(this.x + this.width, this.y + 20, 5, 5);
        } else if (this.type === 1) {
          // Double cactus
          ctx.fillRect(this.x, this.y, this.width * 0.6, this.height);
          ctx.fillRect(this.x + this.width * 0.7, this.y + 10, this.width * 0.6, this.height - 10);
        } else {
          // Triple cactus
          ctx.fillRect(this.x, this.y, this.width * 0.5, this.height);
          ctx.fillRect(this.x + this.width * 0.6, this.y + 15, this.width * 0.5, this.height - 15);
          ctx.fillRect(this.x + this.width * 0.3, this.y + 5, this.width * 0.5, this.height - 20);
        }
      }
      
      update() {
        this.x -= speed * gameSpeed;
      }
    }
    
    // Clouds class for decoration
    class Cloud {
      constructor() {
        this.width = 60 + Math.random() * 40;
        this.height = 20 + Math.random() * 20;
        this.x = canvas.width;
        this.y = 50 + Math.random() * 100;
        this.speed = 1 + Math.random() * 2;
        this.opacity = 0;
        
        // AnimeJS fade in animation
        anime({
          targets: this,
          opacity: 0.8,
          duration: 1000,
          easing: 'easeInOutQuad'
        });
      }
      
      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = nightMode ? '#535353' : '#535353';
        
        // Draw cloud shape (more complex than just a rectangle)
        ctx.beginPath();
        ctx.arc(this.x + this.width * 0.3, this.y + this.height * 0.5, this.height * 0.5, 0, Math.PI * 2);
        ctx.arc(this.x + this.width * 0.7, this.y + this.height * 0.5, this.height * 0.6, 0, Math.PI * 2);
        ctx.arc(this.x + this.width * 0.5, this.y + this.height * 0.3, this.height * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      
      update() {
        this.x -= this.speed * (gameSpeed * 0.5);
      }
    }
    
    // Stars class for night mode
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * (canvas.height - 100);
        this.size = 1 + Math.random() * 2;
        this.twinkleSpeed = 0.03 + Math.random() * 0.05;
        this.brightness = 0.2 + Math.random() * 0.8;
        this.angle = 0;
      }
      
      draw() {
        const twinkle = Math.sin(this.angle) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness * twinkle})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      update() {
        this.angle += this.twinkleSpeed;
        if (this.angle > Math.PI * 2) this.angle = 0;
      }
    }
    
    // Game objects
    const cacti = [];
    const clouds = [];
    const stars = [];
    
    // Create stars for night mode
    for (let i = 0; i < 100; i++) {
      stars.push(new Star());
    }
    
    // Check collision
    function checkCollision(dino, cactus) {
      // More accurate collision with smaller hitbox
      const dinoHitbox = {
        x: dino.x + 10,
        y: dino.y + 5,
        width: dino.width - 15,
        height: dino.height - 10
      };
      
      const cactusHitbox = {
        x: cactus.x + 5,
        y: cactus.y,
        width: cactus.width - 10,
        height: cactus.height
      };
      
      return (
        dinoHitbox.x < cactusHitbox.x + cactusHitbox.width &&
        dinoHitbox.x + dinoHitbox.width > cactusHitbox.x &&
        dinoHitbox.y < cactusHitbox.y + cactusHitbox.height &&
        dinoHitbox.y + dinoHitbox.height > cactusHitbox.y
      );
    }
    
    // Draw ground
    function drawGround() {
      ctx.fillStyle = nightMode ? '#444444' : '#535353';
      ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
      
      // Dotted line on the ground
      ctx.fillStyle = nightMode ? '#666666' : '#777777';
      for (let i = 0; i < canvas.width; i += 30) {
        ctx.fillRect(i, canvas.height - 10, 15, 2);
      }
    }
    
    // Handle game over
    function handleGameOver() {
      setGameOver(true);
      cancelAnimationFrame(animationId);
      
      // Update high score
      if (score > highScore) {
        setHighScore(score);
      }
      
      // Game over effects with animeJS
      anime({
        targets: gameContainer,
        translateY: [-20, 0],
        opacity: [0.5, 1],
        duration: 500,
        easing: 'easeOutQuad'
      });
      
      // Game over text
      ctx.fillStyle = nightMode ? '#ffffff' : '#535353';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);
      ctx.font = '20px Arial';
      ctx.fillText('Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 20);
      ctx.fillText(`High Score: ${Math.max(score, highScore)}`, canvas.width / 2, canvas.height / 2 + 50);
    }
    
    // Animation loop
    function animate(timestamp) {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      frameCount++;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
    // Toggle day/night mode
      ctx.fillStyle = nightMode ? 'black' : 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars in night mode
      if (nightMode) {
        stars.forEach(star => {
          star.update();
          star.draw();
        });
      }
      
      // Update and draw clouds
      for (let i = clouds.length - 1; i >= 0; i--) {
        clouds[i].update();
        clouds[i].draw();
        
        if (clouds[i].x + clouds[i].width < 0) {
          clouds.splice(i, 1);
        }
      }
      
      // Spawn clouds
      if (Math.random() < 0.005 * gameSpeed) {
        clouds.push(new Cloud());
      }
      
      // Draw ground
      drawGround();
      
      // Update and draw dino
      dino.update(deltaTime);
      dino.draw();
      
      // Update and draw cacti
      for (let i = cacti.length - 1; i >= 0; i--) {
        cacti[i].update();
        cacti[i].draw();
        
        // Check collision
        if (checkCollision(dino, cacti[i])) {
          handleGameOver();
          return;
        }
        
        // Remove off-screen cacti
        if (cacti[i].x + cacti[i].width < 0) {
          cacti.splice(i, 1);
        }
      }
      
      // Spawn cacti
     // Spawn cacti
     spawnTimer += deltaTime;
     if (spawnTimer > 1500 / gameSpeed) {
       cacti.push(new Cactus());
       spawnTimer = 0;
     }

     // Increase score
     if (frameCount % Math.floor(60 / gameSpeed) === 0) {
       setScore((prev) => prev + 1);
     }

     // Increase game speed over time
     if (frameCount % 600 === 0) {
       gameSpeed += 0.002;
     }

     // Request next frame
     animationId = requestAnimationFrame(animate);
   }

   // Keydown handler
   function handleKeyDown(e) {
     if (e.code === 'Space' || e.code === 'ArrowUp') {
       dino.jump();
     } else if (e.code === 'KeyR' && gameOver) {
       resetGame();
     }
   }

   // Reset game
   function resetGame() {
     setGameOver(false);
     setScore(0);
     gameSpeed = 1;
     cacti.length = 0;
     clouds.length = 0;
     lastTime = 0;
     frameCount = 0;
     animate(0);
   }

   // Attach event listeners
   window.addEventListener('keydown', handleKeyDown);

   // Start the game
   animate(0);

   return () => {
     window.removeEventListener('keydown', handleKeyDown);
     cancelAnimationFrame(animationId);
   };
 }, [nightMode, gameOver]);

 return (
   <div ref={gameContainerRef} className="game-container">
     <canvas ref={canvasRef} tabIndex={0}></canvas>
     <div className="score-board">
       <p>Score: {score}</p>
       <p>High Score: {highScore}</p>
     </div>
   </div>
 );
}
