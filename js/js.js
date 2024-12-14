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
const saidas = document.querySelector('.saidas')
const modal_container_saida = document.querySelector('.modal_container_saida')
const close = document.querySelector('.X')

//----------------- variaveis do rh -------------------
const doc = document.querySelector('.dc')
const documento = document.querySelector('.documento')
const fac = document.querySelector('.fac')
const fc = document.querySelector('.fc')
const sg = document.querySelector('.sg')
const seguro = document.querySelector('.seguro')
const add =document.querySelector('.add')
const container_add = document.querySelector('.container_add')
const modalAdd = document.querySelector('.X')

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
});

X.addEventListener('click', () =>{
    modal_container.style.display = 'none'
    console.log('Hello')
});

saidas.addEventListener('click', () =>{
    modal_container_saida.style.display = 'block'
    console.log('saida')
});
function closes(){
    modal_container_saida.style.display = 'none'
    console.log('clicou')
};

doc.addEventListener('mouseenter', ()=>{
    documento.style.display = 'block'
    console.log('hello')
})
doc.addEventListener('click', ()=>{
    documento.style.display = 'none'
    console.log('hello')
});

fc.addEventListener('mouseenter', ()=>{
    fac.style.display = 'block'
    console.log('bom dia')
})
fc.addEventListener('click', ()=>{
    fac.style.display = 'none'
    console.log('hello')
});

sg.addEventListener('mouseenter', ()=>{
    seguro.style.display = 'block'
    console.log('hello')
})
sg.addEventListener('click', ()=>{
    seguro.style.display = 'none'
    console.log('hello')
});

add.addEventListener('click', () =>{
    container_add.style.display = 'block'
})
function modaladd(){
    container_add.style.display = 'none'
    console.log('bom dia')
}