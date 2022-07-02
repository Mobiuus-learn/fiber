// @Criado por José Rodrigo
// @Contribuição de Ubiratan Lima
// @2022

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
const btnCalc = document.querySelector('#btn-calcColor')
const inputFiber = document.querySelector("#in-fiber")
const colorReturn = document.querySelector("#color-return")
const classReset = document.querySelector('#class-reset')
let textColor = document.querySelector('.text-color')
let fiberColor



btnCalc.addEventListener('click', function () {
    fiberColor = inputFiber.value

    for (item in cores) {
        for (el in cores[item].fibra) {
            if (cores[item].fibra[el] == fiberColor) {
                console.log(cores[item].cor)
                let sp = document.createElement('span')
                textColor.appendChild(sp)
                sp.innerHTML = `${cores[item].cor}`
                colorReturn.classList.add(cores[item].cor)
            }
        }
    }
}
)

classReset.addEventListener('click', function () {
    colorReturn.removeAttribute('class')
    inputFiber.value = ""

})