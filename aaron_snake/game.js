import {
  updateSnake,
  drawSnake,
  SNAKE_SPEED,
  snakeIntersection,
  getSnakeHead,
} from "./snake.js";
import { drawFood, updateFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById("game-board");
let lastRenderTime = 0; //tracks the last time we rendered the page
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Click OK to restart the game.")) {
      location.reload();
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // if not enough time has passed, DO NOT RENDER THE SNAKE

  lastRenderTime = currentTime; //update the renderTime with current time
  update();
  draw();

  console.log("Rendered");
}

function update() {
  //updates the entire game
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  //draws the entire board
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

window.requestAnimationFrame(main);
