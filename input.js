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
    let sb = document.getElementsByClassName('snake')[0]
    let sbBox = sb.getBoundingClientRect()
    
    let x = e.changedTouches[0].pageX - (sbBox.left + (sbBox.width / 2))
    let y = e.changedTouches[0].pageY - (sbBox.top + (sbBox.height / 2))

    console.log(x + "|" + y)
    

    if (lastInputDirection.x === 0) {
        if (x < 0) {
            inputDirection = { x: -1, y: 0 }
            console.log("x minus set");
            
        } else {
            inputDirection = { x: 1, y: 0 }
            console.log("x pos set");
        }
    } else if (lastInputDirection.y === 0) {
        if (y < 0) {
            inputDirection = { x: 0, y: -1 }
            console.log("y minus set");
        } else {
            inputDirection = { x: 0, y: 1 }
            console.log("y pos set");
        }
    } else {
        inputDirection = lastInputDirection
        console.log("nothing set")
        
    }
    
    e.preventDefault()
}, false)

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

