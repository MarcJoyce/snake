import { snakeBody } from './snake.js'

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let gb = document.getElementById('game-board')

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
            case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
            case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
            case 'ArrowRight':
            if (lastInputDirection.x !== 0) break    
            inputDirection = { x: 1, y: 0 }
            break
        }
})

window.addEventListener('touchstart', e => {
    let touch = e.changedTouches[0]
    startX = touch.pageX
    startY = touch.pageY
    startTime = new Date().getTime()
    e.preventDefault()
}, false)

window.addEventListener('touchmove', e => {
    e.preventDefault()
}, false)

window.addEventListener('touchend', e => {
    let touch = e.changedTouches[0]
    distX = touch.pageX - startX
    distY = touch.pageY - startY
    
    if (Math.abs(distX) > Math.abs(distY)) {
        if (distX > 0 && lastInputDirection.x === 0) {
            inputDirection = { x: 1, y: 0 }
        } else if (distX < 0 && lastInputDirection.x === 0) {
            inputDirection = { x: -1, y: 0 }
        }
    } else {
        if (distY > 0 && lastInputDirection.y === 0) {
            inputDirection = { x: 0, y: -1 }
        } else if (distY < 0 && lastInputDirection.y === 0) {
            inputDirection = { x: 0, y: 1 }
        }
    }
    e.preventDefault()
}, false)


export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

