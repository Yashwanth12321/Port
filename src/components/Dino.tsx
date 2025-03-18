// "use client";

// import { useEffect, useRef, useState } from 'react';
// import CactiController from "../design/dino-game-main/CactiController.js"
// import Ground from "../design/dino-game-main/Ground.js"
// import Player from "../design/dino-game-main/Player.js"
// import Score from "../design/dino-game-main/Score.js"


// // Game constants
// const GAME_SPEED_START = 1;
// const GAME_SPEED_INCREMENT = 0.00001;
// const GAME_WIDTH = 800;
// const GAME_HEIGHT = 200;
// const PLAYER_WIDTH = 88 / 1.5;
// const PLAYER_HEIGHT = 94 / 1.5;
// const MAX_JUMP_HEIGHT = GAME_HEIGHT;
// const MIN_JUMP_HEIGHT = 150;
// const GROUND_WIDTH = 2400;
// const GROUND_HEIGHT = 24;
// const GROUND_AND_CACTUS_SPEED = 0.5;

// const CACTI_CONFIG = [
//   { width: 48 / 1.5, height: 100 / 1.5, image: "/images/cactus_1.png" },
//   { width: 98 / 1.5, height: 100 / 1.5, image: "/images/cactus_2.png" },
//   { width: 68 / 1.5, height: 70 / 1.5, image: "/images/cactus_3.png" },
// ];

// export default function Dino() {
//   const canvasRef = useRef(null);
//   const [gameState, setGameState] = useState({
//     gameOver: false,
//     waitingToStart: true,
//     hasAddedEventListenersForRestart: false,
//     gameSpeed: GAME_SPEED_START
//   });

//   // Game objects (need to be in refs to persist across renders)
//   const playerRef = useRef(null);
//   const groundRef = useRef(null);
//   const cactiControllerRef = useRef(null);
//   const scoreRef = useRef(null);
//   const scaleRatioRef = useRef(null);
//   const previousTimeRef = useRef(null);
//   const requestIdRef = useRef(null);

//   const getScaleRatio = () => {
//     const screenHeight = Math.min(
//       window.innerHeight,
//       document.documentElement.clientHeight
//     );

//     const screenWidth = Math.min(
//       window.innerWidth,
//       document.documentElement.clientWidth
//     );

//     if (screenWidth / screenHeight < GAME_WIDTH / GAME_HEIGHT) {
//       return screenWidth / GAME_WIDTH;
//     } else {
//       return screenHeight / GAME_HEIGHT;
//     }
//   };

//   const createSprites = (ctx) => {
//     const scaleRatio = scaleRatioRef.current;
    
//     const playerWidthInGame = PLAYER_WIDTH * scaleRatio;
//     const playerHeightInGame = PLAYER_HEIGHT * scaleRatio;
//     const minJumpHeightInGame = MIN_JUMP_HEIGHT * scaleRatio;
//     const maxJumpHeightInGame = MAX_JUMP_HEIGHT * scaleRatio;

//     const groundWidthInGame = GROUND_WIDTH * scaleRatio;
//     const groundHeightInGame = GROUND_HEIGHT * scaleRatio;

//     playerRef.current = new Player(
//       ctx,
//       playerWidthInGame,
//       playerHeightInGame,
//       minJumpHeightInGame,
//       maxJumpHeightInGame,
//       scaleRatio
//     );

//     groundRef.current = new Ground(
//       ctx,
//       groundWidthInGame,
//       groundHeightInGame,
//       GROUND_AND_CACTUS_SPEED,
//       scaleRatio
//     );

//     const cactiImages = CACTI_CONFIG.map((cactus) => {
//       const image = new Image();
//       image.src = cactus.image;
//       return {
//         image: image,
//         width: cactus.width * scaleRatio,
//         height: cactus.height * scaleRatio,
//       };
//     });

//     cactiControllerRef.current = new CactiController(
//       ctx,
//       cactiImages,
//       scaleRatio,
//       GROUND_AND_CACTUS_SPEED
//     );

//     scoreRef.current = new Score(ctx, scaleRatio);
//   };

//   const setScreen = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     scaleRatioRef.current = getScaleRatio();
//     canvas.width = GAME_WIDTH * scaleRatioRef.current;
//     canvas.height = GAME_HEIGHT * scaleRatioRef.current;
//     createSprites(ctx);
//   };

//   const showGameOver = (ctx) => {
//     const fontSize = 70 * scaleRatioRef.current;
//     ctx.font = `${fontSize}px Verdana`;
//     ctx.fillStyle = "grey";
//     const x = canvasRef.current.width / 4.5;
//     const y = canvasRef.current.height / 2;
//     ctx.fillText("GAME OVER", x, y);
//   };

//   const setupGameReset = () => {
//     if (!gameState.hasAddedEventListenersForRestart) {
//       setGameState(prev => ({ ...prev, hasAddedEventListenersForRestart: true }));

//       setTimeout(() => {
//         window.addEventListener("keyup", reset, { once: true });
//         window.addEventListener("touchstart", reset, { once: true });
//       }, 1000);
//     }
//   };

//   const reset = () => {
//     setGameState({
//       hasAddedEventListenersForRestart: false,
//       gameOver: false,
//       waitingToStart: false,
//       gameSpeed: GAME_SPEED_START
//     });
    
//     groundRef.current.reset();
//     cactiControllerRef.current.reset();
//     scoreRef.current.reset();
//   };

//   const showStartGameText = (ctx) => {
//     const fontSize = 40 * scaleRatioRef.current;
//     ctx.font = `${fontSize}px Verdana`;
//     ctx.fillStyle = "grey";
//     const x = canvasRef.current.width / 14;
//     const y = canvasRef.current.height / 2;
//     ctx.fillText("Tap Screen or Press Space To Start", x, y);
//   };

//   const updateGameSpeed = (frameTimeDelta) => {
//     setGameState(prev => ({
//       ...prev,
//       gameSpeed: prev.gameSpeed + frameTimeDelta * GAME_SPEED_INCREMENT
//     }));
//   };

//   const clearScreen = (ctx) => {
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//   };

//   const gameLoop = (currentTime) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext("2d");
    
//     if (previousTimeRef.current === null) {
//       previousTimeRef.current = currentTime;
//       requestIdRef.current = requestAnimationFrame(gameLoop);
//       return;
//     }
    
//     const frameTimeDelta = currentTime - previousTimeRef.current;
//     previousTimeRef.current = currentTime;

//     clearScreen(ctx);

//     if (!gameState.gameOver && !gameState.waitingToStart) {
//       // Update game objects
//       groundRef.current.update(gameState.gameSpeed, frameTimeDelta);
//       cactiControllerRef.current.update(gameState.gameSpeed, frameTimeDelta);
//       playerRef.current.update(gameState.gameSpeed, frameTimeDelta);
//       scoreRef.current.update(frameTimeDelta);
//       updateGameSpeed(frameTimeDelta);
//     }

//     if (!gameState.gameOver && cactiControllerRef.current.collideWith(playerRef.current)) {
//       setGameState(prev => ({ ...prev, gameOver: true }));
//       setupGameReset();
//       scoreRef.current.setHighScore();
//     }

//     // Draw game objects
//     groundRef.current.draw();
//     cactiControllerRef.current.draw();
//     playerRef.current.draw();
//     scoreRef.current.draw();

//     if (gameState.gameOver) {
//       showGameOver(ctx);
//     }

//     if (gameState.waitingToStart) {
//       showStartGameText(ctx);
//     }

//     requestIdRef.current = requestAnimationFrame(gameLoop);
//   };

//   // Initialize game
//   useEffect(() => {
//     setScreen();
    
//     // Start the game loop
//     requestIdRef.current = requestAnimationFrame(gameLoop);
    
//     // Initial event listeners for starting the game
//     const handleStart = () => reset();
//     window.addEventListener("keyup", handleStart, { once: true });
//     window.addEventListener("touchstart", handleStart, { once: true });
    
//     // Handle resize events
//     const handleResize = () => setTimeout(setScreen, 500);
//     window.addEventListener("resize", handleResize);
    
//     if (typeof window !== 'undefined' && window.screen?.orientation) {
//       window.screen.orientation.addEventListener("change", setScreen);
//     }
    
    
//     // Cleanup function
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       if (window.screen?.orientation) {
//         window.screen.orientation.removeEventListener("change", setScreen);
//       }
//       window.removeEventListener("keyup", handleStart);
//       window.removeEventListener("touchstart", handleStart);
      
//       if (requestIdRef.current) {
//         cancelAnimationFrame(requestIdRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="game-container">
//       <canvas ref={canvasRef} id="game" />
//     </div>
//   );
// }