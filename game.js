import { snake_speed, update as updateSnake, render as renderSnake, getSnakeHead, snakeIntersection, getSnakeLength, resetSnake } from './snake.js'
import { update as updateFood, render as renderFood, resetFood } from './food.js'
import { resetInput } from './input.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
const scoreBox = document.getElementById('score')
let gameOver = false
let score = 0

function main (currentTime) {

    if (gameOver) {
        if (confirm("You have lost, your score was " + score + " points. Press ok to restart")) {
            resetGame()
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snake_speed) return
    lastRenderTime = currentTime
    update()
    render()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
    score = getScore()
}

function render() {
    gameBoard.innerHTML= ''
    scoreBox.innerHTML = score
    renderSnake(gameBoard)
    renderFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function getScore() {
    return getSnakeLength() - 1
}

function resetGame() {
    resetSnake()
    resetInput()
    resetFood()
    update()
    render()
    window.requestAnimationFrame(main)
}