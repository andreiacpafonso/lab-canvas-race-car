const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black"
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector(".game-intro")

let background = new Image();
background.src = "../images/road.png";
let background2 = new Image();
background2.src = "../images/road.png"
const car = new Image();
car.src = "../images/car.png";
let bg1 = 0;
let bg2 = canvas.height 
let backgroundY = 0;
let background2Y = 0;
let carX = 200;

let isGameOver = false;
let gameId = 0;
let moveCarLeft = false;
let moveCarRight = false;

window.onload = () => {

    document.getElementById("start-button").onclick = () => {
        console.log("starting");
        startGame();
    };



function startGame() {
    console.log(gameId);
startScreen.style.display = "none";
ctx.drawImage(background, 0, backgroundY, canvas.width, canvas.height);
ctx.drawImage(background2, 0, background2Y, canvas.width, canvas.height);
ctx.drawImage(car, carX, 500, 70, 100);

backgroundY += 4;
background2Y += 4;

if (backgroundY > canvas.height) {
    backgroundY = -canvas.height -20;
}
  if (background2Y > canvas.height) {
    background2Y = -canvas.height;
  }
  if (moveCarRight === true){
    carX += 50;
  } else if (moveCarLeft === true){
    carX -= 50;
  }
}
 document.addEventListener ("keydown", (event) => {
    console.log("keydown", event)

if (event.key === "ArrowLeft") {
    ctx.drawImage(car, carX-50, 500, 70, 100);
    moveCarLeft = true
     console.log("exemplo")
} else if (event.key === "ArrowRight") {
    ctx.drawImage(car, carX+50, 500, 70, 100); 
    moveCarRight = true
}
document.addEventListener ("keyup", () => {
    if (event.key === "ArrowLeft") {
        moveCarLeft = false
         console.log("exemplo")
    } else if (event.key === "ArrowRight") {
        moveCarRight = false;
    } 
})
 })
}
