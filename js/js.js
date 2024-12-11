const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const fechar = document.querySelector('.arrow')
const dark = document.querySelector('.bt_mode')
const dt = document.querySelector('.dt')
const escuro = document.querySelector('dark')
const claro = document.querySelector ('light')

//--------------- variaveis da administração-----------------

const fin = document.querySelector('.fin')
const open = document.querySelector('.open')
const modal_container = document.querySelector('.modal_container')
const entradas = document.querySelector('.entradas')
const X = document.querySelector('.X')


fechar.addEventListener('click', () =>{
    menu.classList.toggle('Close');
    console.log('Bom dia ')
});

dark.addEventListener('click', ()=>{
    body.classList.toggle('Dark')

    console.log('Certo')
});

entradas.addEventListener('click', () =>{
    modal_container.style.display = 'block'
    modal_container.style.transition = 'all 0.5s ease'
    console.log('click')
})

X.addEventListener('click', () =>{
    modal_container.style.display = 'none'
    console.log('Hello')
})