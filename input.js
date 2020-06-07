import { snakeBody } from './snake.js'

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let gb = document.getElementById('game-board')
let sb = document.getElementsByClassName('snake')[0]

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
    let sbBox = sb.getBoundingClientRect()
    let x = e.changedTouches[0].pageX
    let y = e.changedTouches[0].pageY
    if (lastInputDirection.x !== 0) {
        if (x < sbBox.x) {
            inputDirection = { x: -1, y: 0 }
        } else {
            inputDirection = { x: 1, y: 0 }
        }
    } else if (lastInputDirection.y !== 0) {
        if (y < sbBox.y) {
            inputDirection = { x: 0, y: -1 }
        } else {
            inputDirection = { x: 0, y: 1 }
        }
    } else {
        inputDirection = lastInputDirection
    }
    
    e.preventDefault()
}, false)

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

