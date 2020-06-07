import { getInputDirection } from "./input.js"

export let snake_speed = 5
export const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function render(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
    changeSnakeSpeed()
}

export function onSnake(pos, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPos(segment, pos)
    })
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })    
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function getSnakeLength() {
    return snakeBody.length
}

function equalPos(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() { 
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}

function changeSnakeSpeed() {
    if (snakeBody.length % 3 === 0) {
        snake_speed = snake_speed + 1
    }
}