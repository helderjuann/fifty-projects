const bg = document.querySelectorAll('.wrapper')

bg.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        removeClass()
        wrapper.classList.add('active')
    })
})

function removeClass() {
    bg.forEach(wrapper => {
        wrapper.classList.remove('active')
    })
}
