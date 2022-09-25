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


const groupColorCheck = (rest)=>{
    // calculo
    rest = rest
    if(rest === 1){
        colorReturn.classList.add('verde')
        textColor.appendChild(sp)
        sp.innerHTML = "verde"
    }

        
}
// btnCalc.onclick(groupColorCheck())



btnCalc.addEventListener('click', function () {
    fiberColor = inputFiber.value
    let fiber = fiberColor % 6
    
    groupColorCheck(fiber)



    // check fiber color
    switch (fiber) {
        case 1:
            // colorReturn.classList.add('verde')
            // textColor.appendChild(sp)
            // sp.innerHTML = "verde"

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

    //check color group

    if (fiberColor >= 1 && fiberColor <= 6 ||
        fiberColor >= 37 && fiberColor <= 42 ||
        fiberColor >= 73 && fiberColor <= 78 ||
        fiberColor >= 109 && fiberColor <= 114) {
        groupColor.classList.add('verde')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'verde'
    }

    if (fiberColor >= 7 && fiberColor <= 12 ||
        fiberColor >= 43 && fiberColor <= 48 ||
        fiberColor >= 79 && fiberColor <= 84 ||
        fiberColor >= 115 && fiberColor <= 120) {
        groupColor.classList.add('amarelo')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'amarelo'
    }
    if (fiberColor >= 13 && fiberColor <= 14 ||
        fiberColor >= 49 && fiberColor <= 54 ||
        fiberColor >= 85 && fiberColor <= 90 ||
        fiberColor >= 121 && fiberColor <= 126) {
        groupColor.classList.add('branco')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'branco'
    }
    if (fiberColor >= 19 && fiberColor <= 24 ||
        fiberColor >= 55 && fiberColor <= 60 ||
        fiberColor >= 91 && fiberColor <= 96 ||
        fiberColor >= 127 && fiberColor <= 132) {
        groupColor.classList.add('azul')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'azul'
    }
    if (fiberColor >= 25 && fiberColor <= 30 ||
        fiberColor >= 61 && fiberColor <= 66 ||
        fiberColor >= 97 && fiberColor <= 102 ||
        fiberColor >= 133 && fiberColor <= 138) {
        groupColor.classList.add('vermelho')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'vermelho'
    }
    if (fiberColor >= 31 && fiberColor <= 36 ||
        fiberColor >= 67 && fiberColor <= 72 ||
        fiberColor >= 103 && fiberColor <= 108 ||
        fiberColor >= 139 && fiberColor <= 144) {
        groupColor.classList.add('violeta')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'violeta'
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
