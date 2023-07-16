const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slides = mainSlide.querySelectorAll('div').length

sideBar.style.top = `-${(slides - 1) * 100}vh`

let activeSlide = 0
upBtn.addEventListener('click', () => {
    changeSlides('up')
})

downBtn.addEventListener('click', () => {
    changeSlides('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlides(up)
    } else if (event.key === 'ArrowDown'){
        changeSlides('down')
    }
})

function changeSlides(str) {
    if (str === 'up'){
        activeSlide++
        if (activeSlide === slides){
            activeSlide = 0
        }
    } else if (str ==='down') {
        activeSlide--
        if (activeSlide < 0){
            activeSlide = slides - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    sideBar.style.transform = `translateY(${activeSlide * height}px)`
}