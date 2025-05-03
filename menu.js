let menu = document.getElementById('menu');
let menumobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

menu.addEventListener('click', ()=> {
    menumobile.classList.add('abrir-menu')
})

menumobile.addEventListener('click', ()=> {
    menumobile.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=> {
    menumobile.classList.remove('abrir-menu')
})

    