let character = document.getElementById('character')

function moveCharacter (direction) {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    if (direction === 'left') {
        left -= 100
        if (left >= 0) {
            character.style.left = left + 'px'
        }
    }
    if (direction === 'right') {
        left += 100
        if (left < 300) {
            character.style.left = left + 'px'
        }
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveCharacter('left')
    }
    if (e.key === 'ArrowRight') {
        moveCharacter('right')
    }
})

let block = document.getElementById('block')
let counter = 0
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random()*3)
    left = random * 100
    block.style.left = left + 'px'
    counter++
})

setInterval(() => {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'))
    if (characterLeft === blockLeft && blockTop < 400 && blockTop > 200) {
        alert('Game Over. You score is ' + counter)
        block.style.animation = 'none'
    }
})