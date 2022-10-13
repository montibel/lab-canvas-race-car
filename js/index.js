
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

let isGameOver = false;
let gameId = 0;


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
    ctx.drawImage(car, 200, 500, 70, 100);
    bgy += 3;
    bgy2 += 3;

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
};
 