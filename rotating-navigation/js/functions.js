const open = document.querySelector('.open')
const close = document.querySelector('.close')
const container = document.querySelector('.container')
const goTop = document.querySelector('.goTop')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

goTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))