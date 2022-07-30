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


let verde = { menor: 1, maior: 139 }
let amarelo = { menor: 2, maior: 140 }
let branco = { menor: 3, maior: 141 }
let azul = { menor: 4, maior: 142 }
let vermelho = { menor: 5, maior: 143 }
let violeta = { menor: 0, maior: 0 }






btnCalc.addEventListener('click', function () {
    fiberColor = inputFiber.value
    let fiber = fiberColor % 6


    // check fiber color
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
        // case 5:
        //     colorReturn.classList.add('vermelho')
        //     textColor.appendChild(sp)
        //     sp.innerHTML = "vermelho"
        //     break;
        // case 0:
        //     colorReturn.classList.add('violeta')
        //     textColor.appendChild(sp)
        //     sp.innerHTML = "violeta"
        //     break;
        default:
            break;
    }

    if (fiber >= verde.menor && fiber <= verde.maior) {
        groupColor.classList.add('verde')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'verde'
    }
    if (fiber >= amarelo.menor && fiber <= amarelo.maior) {
        groupColor.classList.add('amarelo')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'amarelo'
    }
    if (fiber >= branco.menor && fiber <= branco.maior) {
        groupColor.classList.add('branco')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'branco'
    }
    if (fiber >= azul.menor && fiber <= azul.maior) {
        groupColor.classList.add('azul')
        groupReturn.appendChild(textGroup)
        textGroup.innerHTML = 'azul'
    }
    // if (fiber >= vermelho.menor && fiber <= vermelho.maior) {
    //     groupColor.classList.add('vermelho')
    //     groupReturn.appendChild(textGroup)
    //     textGroup.innerHTML = 'vermelho'
    // }
    // if (fiber == 0) {
    //     groupColor.classList.add('violeta')
    //     groupReturn.appendChild(textGroup)
    //     textGroup.innerHTML = 'violeta'
    // }

}

)



classReset.addEventListener('click', function () {
    colorReturn.removeAttribute('class')
    groupColor.removeAttribute('class')
    inputFiber.value = ""
    sp.innerHTML = ""
    textGroup.innerHTML = ""

})
