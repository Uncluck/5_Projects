const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

placeholders.forEach((item) => {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('drop', drop)
})

function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragEnd(event) {
    event.target.className = 'item'
}

function dragOver(event) {
    event.preventDefault()
}
function dragEnter(event) {
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    event.target.classList.remove('hovered')
}

function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}

