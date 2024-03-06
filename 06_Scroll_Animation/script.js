const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    
    // Высота  области просмотра окна браузера 80% 
    //console.log(window.innerHeight / 100 * 80)
    const triggerBottom = window.innerHeight / 100 * 80;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        //console.log(boxes[2].getBoundingClientRect().top)

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}