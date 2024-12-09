const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const fechar = document.querySelector('.arrow')
const dark = document.querySelector('.bt_mode')
const dt = document.querySelector('.dt')
const escuro = document.querySelector('dark')
const claro = document.querySelector ('light')



fechar.addEventListener('click', () =>{
    menu.classList.toggle('Close');
    console.log('Bom dia ')
});

dark.addEventListener('click', ()=>{
    body.classList.toggle('Dark')

    console.log('Certo')
});