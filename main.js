const suspens = document.getElementById('suspens')

const win = document.getElementById('win')

suspens.addEventListener('mouseover' , () => {
    suspens.style.display = 'none'
    win.style.display = 'flex'
})

win.addEventListener('mouseout' , () => {
    suspens.style.display = 'flex'
    win.style.display = 'none'
})