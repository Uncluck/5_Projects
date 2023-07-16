const board = document.querySelector('#board')
const Colors = ['#ff85e4', '#f4a460', '#3d1b5d', '#40cb10', '#9f1e29']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('duv')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}

function setColor(elem) {
    const color = getColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = '0 0 2px #000'
}

function getColor() {
    return Colors[Math.floor(Math.random() * Colors.length)]
}