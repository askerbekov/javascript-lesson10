//
// const btn = document.querySelector('#btn')
// const input  = document.querySelector('#input')
//
// let value
// input.addEventListener('keyup', (event) => {
//     value = event.target.value
// })
// const handleResponse = function () {
//     fetch(`https://swapi.dev/api/people/${value}`)
//         .then(response => response.json())
//         .then(data => alert((`my name is ${data.name}, I was born at ${data.birth_year}`)))
//         .catch(error => console.log(error))
// }
// btn.addEventListener('click', (event) => {
//         handleResponse()
//     })
// input.addEventListener( 'keypress', (e) => {
//     if (e.key === 'Enter'){
//         handleResponse()
//     }
//
// }

// const increaseBtn

// function grow(x){
//     x.map(  )
//
// }
// console.log(grow([4, 1, 1, 1, 4]))

const btnPositive = document.querySelector( '#btn-positive')
const btnNegative = document.querySelector( '#btn-negative')
const result = document.querySelector('#result')
const resetBtn = document.querySelector('#reset')
const zeroBtn = document.querySelector('#zero')
const oneBtn = document.querySelector('#one')
const twoBtn = document.querySelector('#two')
const threeBtn = document.querySelector('#three')
const fourBtn = document.querySelector('#four')
const fiveBtn = document.querySelector('#five')
const sixBtn = document.querySelector('#six')
const sevenBtn = document.querySelector('#seven')
const eightBtn = document.querySelector('#eight')
const nineBtn = document.querySelector('#nine')
const errorResult = document.querySelector('#error')

let multiply = '*'

btnPositive.addEventListener('click', () => {
    result.innerHTML = parseInt(result.innerHTML) + 1

})
btnNegative.addEventListener( 'click', (event) => {
    if (parseInt(result.innerHTML) > 0){
        result.innerHTML = parseInt(result.innerHTML) - 1

    } else {
        errorResult.innerHTML = 'can not be negative'
    }
})
resetBtn.addEventListener( 'click' ,() => {
    result.innerHTML = 0
})

oneBtn.addEventListener( 'click' , () => {
    result.innerHTML = parseInt(result.innerHTML) + 1
})
twoBtn.addEventListener( 'click' , () => {
    result.innerHTML = parseInt(result.innerHTML) + 2
})
threeBtn.addEventListener( 'click' , () => {
    result.innerHTML = parseInt(result.innerHTML) + 3
})
fourBtn.addEventListener( 'click' , () => {
    result.innerHTML = parseInt(result.innerHTML) + 4
})
fiveBtn.addEventListener( 'click' , () => {
    result.innerHTML = parseInt(result.innerHTML) + 5
})