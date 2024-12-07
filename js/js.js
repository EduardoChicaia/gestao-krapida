const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const fechar = document.querySelector('.arrow')
const dark = document.querySelector('.md')
const dt = document.querySelector('.dt')



fechar.addEventListener('click', () =>{
    menu.classList.toggle('Close');
    console.log('Bom dia ')
});

dark.addEventListener('click', ()=>{
    body.classList.toggle('Dark')

    if(body.classList.contains('Dark')){
        dt.innerText = 'Claro'
    }else{
         dt.innerText = 'Escuro'
    }
    console.log('Certo')
})