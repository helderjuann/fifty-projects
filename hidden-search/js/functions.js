const search = document.querySelector('.src__input')
const btn = document.getElementById('magBtn')
const input = document.getElementById('ipnTxt')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})