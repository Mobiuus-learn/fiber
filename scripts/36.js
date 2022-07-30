// @Criado por José Rodrigo
// @Contribuição de Ubiratan Lima
// @2022

let sp = document.createElement('span')
let textGroup = document.createElement('span')

const btnCalc = document.querySelector('#btn-calcColor')
const inputFiber = document.querySelector("#in-fiber")
const colorReturn = document.querySelector("#color-return")
const classReset = document.querySelector('#class-reset')


let textColor = document.querySelector('.text-color')
let groupColor = document.querySelector("#group-color")
let groupReturn = document.querySelector('.group-return')
let fiberColor





btnCalc.addEventListener('click', function () {
    fiberColor = inputFiber.value
    let fiber = fiberColor % 6

    switch (fiber) {
        case 1:
            colorReturn.classList.add('verde')
            textColor.appendChild(sp)
            sp.innerHTML = "verde"
            break;
        case 2:
            colorReturn.classList.add('amarelo')
            textColor.appendChild(sp)
            sp.innerHTML = "amarelo"
            break;
        case 3:
            colorReturn.classList.add('branco')
            textColor.appendChild(sp)
            sp.innerHTML = "branco"
            break;
        case 4:
            colorReturn.classList.add('azul')
            textColor.appendChild(sp)
            sp.innerHTML = "azul"
            break;
        case 5:
            colorReturn.classList.add('vermelho')
            textColor.appendChild(sp)
            sp.innerHTML = "vermelho"
            break;
        case 0:
            colorReturn.classList.add('violeta')
            textColor.appendChild(sp)
            sp.innerHTML = "violeta"
            break;



        default:
            break;
    }

}
)



classReset.addEventListener('click', function () {
    colorReturn.removeAttribute('class')
    groupColor.removeAttribute('class')
    inputFiber.value = ""
    sp.innerHTML = ""
    textGroup.innerHTML = ""

})
