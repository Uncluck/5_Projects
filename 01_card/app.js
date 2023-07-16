function slidesPlugin(activeSlides = 0) {
    const slides = document.querySelectorAll(".slide");
    slides[activeSlides].classList.add('active')

    slides.forEach(item => {
        item.addEventListener('click', () => {
            clearActiveItem();
            item.classList.add('active');
        })
    })

    function clearActiveItem() {
        slides.forEach(item => {
            item.classList.remove('active')
        })
    }

}

slidesPlugin()