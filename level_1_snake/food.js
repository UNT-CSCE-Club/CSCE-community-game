import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = randomFoodPosition();

const EXPANSION_RATE = 1;

export function updateFood() {
  if (onSnake(food)) {
    //if the snake is on the food, do the following logic
    expandSnake(EXPANSION_RATE); //expand the snake by the expansion rate
    food = randomFoodPosition(); //make the food coordinates appear here now
  }
}

export function drawFood(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function randomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
