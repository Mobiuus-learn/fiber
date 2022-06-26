const coresPadrao = {
    1: 'verde',
    2:'amarelo',
    3:'branco',
    4:'azul',
    5:'vermelho',
    6:'violeta',
    7:'marron',
    8:'rosa',
    9:'preto',
    10:'cinza',
    11:'laranja',
    12:'aqua'
}

const btnCalc = document.querySelector('#btn-calcColor')
const inputFiber = document.querySelector("#in-fiber")
const colorReturn = document.querySelector("#color-return")
const classReset = document.querySelector('#class-reset');

btnCalc.addEventListener('click', ()=>{
    let fiberColor = inputFiber.value
    colorReturn.classList.add(coresPadrao[fiberColor])
    
})
classReset.addEventListener('click', function(){
   colorReturn.removeAttribute('class')
   
})