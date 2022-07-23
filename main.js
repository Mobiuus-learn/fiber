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


const cores = [
    { cor: 'verde', fibra: [1, 13, 25, 37, 49, 61, 73, 85, 97, 109, 121, 133] },
    { cor: 'amarelo', fibra: [2, 14, 26, 38, 50, 62, 74, 86, 98, 110, 122, 134] },
    { cor: 'branco', fibra: [3, 15, 27, 39, 51, 63, 75, 87, 99, 11, 123, 135] },
    { cor: 'azul', fibra: [4, 16, 28, 40, 52, 64, 76, 88, 100, 112, 124, 136] },
    { cor: 'vermelho', fibra: [5, 17, 29, 41, 53, 65, 77, 89, 101, 113, 125, 137] },
    { cor: 'violeta', fibra: [6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126, 138] },
    { cor: 'marron', fibra: [7, 19, 31, 43, 55, 67, 79, 91, 103, 115, 127, 139] },
    { cor: 'rosa', fibra: [8, 20, 32, 44, 56, 68, 80, 92, 104, 116, 128, 140] },
    { cor: 'preto', fibra: [9, 21, 33, 45, 57, 69, 81, 93, 105, 117, 129, 141] },
    { cor: 'cinza', fibra: [10, 22, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142] },
    { cor: 'laranja', fibra: [11, 23, 35, 47, 59, 71, 83, 95, 107, 119, 131, 143] },
    { cor: 'aqua', fibra: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144] }
]




btnCalc.addEventListener('click', function () {
    fiberColor = inputFiber.value
    for (item in cores) {
        for (index in cores[item].fibra) {
            if (cores[item].fibra[index] == fiberColor) {
                textColor.appendChild(sp)
                sp.innerHTML = ` ${cores[item].cor}`
                colorReturn.classList.add(cores[item].cor)
                if (cores[item].fibra[index] >= 1 && cores[item].fibra[index] <= 12) {
                    groupColor.classList.add("verde")
                    // let textGroup = document.createElement('span')
                    textGroup.innerHTML = 'verde'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 13 && cores[item].fibra[index] <= 24) {
                    groupColor.classList.add("amarelo")
                    textGroup.innerHTML = 'amarelo'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 25 && cores[item].fibra[index] <= 36) {
                    groupColor.classList.add("branco")
                    textGroup.innerHTML = 'branco'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 37 && cores[item].fibra[index] <= 48) {
                    groupColor.classList.add("azul")
                    textGroup.innerHTML = 'azul'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 49 && cores[item].fibra[index] <= 60) {
                    groupColor.classList.add("vermelho")
                    textGroup.innerHTML = 'vermelho'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 61 && cores[item].fibra[index] <= 72) {
                    groupColor.classList.add("violeta")
                    textGroup.innerHTML = 'violeta'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 73 && cores[item].fibra[index] <= 84) {
                    groupColor.classList.add("marrom")
                    textGroup.innerHTML = 'marrom'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 85 && cores[item].fibra[index] <= 96) {
                    groupColor.classList.add("rosa")
                    textGroup.innerHTML = 'rosa'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 97 && cores[item].fibra[index] <= 108) {
                    groupColor.classList.add("preto")
                    textGroup.innerHTML = 'preto'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 109 && cores[item].fibra[index] <= 120) {
                    groupColor.classList.add("cinza")
                    textGroup.innerHTML = 'cinza'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 121 && cores[item].fibra[index] <= 132) {
                    groupColor.classList.add("laranja")
                    textGroup.innerHTML = 'laranja'
                    groupReturn.appendChild(textGroup)
                }
                if (cores[item].fibra[index] >= 133 && cores[item].fibra[index] <= 144) {
                    groupColor.classList.add("aqua")
                    textGroup.innerHTML = 'aqua'
                    groupReturn.appendChild(textGroup)
                }
            }
        }


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
