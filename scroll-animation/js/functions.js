const boxes = document.querySelectorAll('.box')

// Eu fiz esse exercício baseado na proposta
// Mas eu poderia facilmente apenas utilizar o Append para gerar a box dinamicamente
// Nisso não iria precisar me preocupar com a questão do overflow-x por conta do transform...

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}