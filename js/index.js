
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector(".game-intro"); 

const background = new Image();
background.src = "../images/road.png"; 
const background2 = new Image();
background2.src = "../images/road.png"; 
const car = new Image();
car.src = "../images/car.png"; 
let bgy = 0;
let bgy2 = -canvas.height;
let newCar = 200 
let isGameOver = false;
let gameId = 0;
let moveRight = false;
let moveLeft = false;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    console.log("starting");
    startGame();
  };


  function startGame() {
    console.log(gameId);
    startScreen.style.display = "none"; 
    ctx.drawImage(background, 0, bgy, canvas.width, canvas.height);
    ctx.drawImage(background2, 0, bgy2, canvas.width, canvas.height);
    ctx.drawImage(car, newCar, 500, 70, 100);
    bgy += 3;
    bgy2 += 3;
    
    
  if (moveLeft === true) {newCar -= 2};
  if (moveRight === true) {newCar += 2}; 


  if (bgy > canvas.height) {
    bgy = -canvas.height -20; 
  }
  if (bgy2 > canvas.height) {
    bgy2 = -canvas.height;
  }

  if(isGameOver) {
    cancelAnimationFrame(gameId);
} else {
  gameId = requestAnimationFrame(startGame); 
}

if (gameId === 2000) {
   isGameOver = true;
   }  
  }

  document.addEventListener("keydown", event => {
    console.log(event); 
    if (event.code === "ArrowLeft") {
      moveLeft = true;
    }
    if (event.code === "ArrowRight") {
      moveRight = true; 
    }
  })
  document.addEventListener("keyup", event => {
   moveLeft = false;
   moveRight = false; 
  })
 }
 
 