import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 10;

const snakeBody = [{ x: 11, y: 11 }];

export function updateSnake() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x; //update the head by adding movement
  snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  //checks position of snake head against every OTHER position on the snake
  return onSnake(snakeBody[0], { ignoreHead: true });
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    // if it tries to compare the snake head with the snake head, return it as not on the snake
    if (ignoreHead && index === 0) return false;
    return segment.x === position.x && segment.y === position.y;
  });
}

let newSegments = 0;
export function expandSnake(amount) {
  newSegments += amount;
}

export function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] };
    // Cleaner way of doing it down below
    // snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0; // clear newSegments, otherwise it will simply keep on expanding
}
