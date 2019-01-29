// normal function for understanding
function myFn() {
    console.log('This myFn body')
}
myFn() // function call
// function with parameter
// let res = 0
function add(num1, num2) {
    let res = num1 + num2
    console.log('Addition is ' + res)
}
add(100, 80) //fun call
// function with return statement

function multiply(num1, num2) {
    let res = num1 * num
    return res
}

function sqr(num) {
    let sr = multiply(num, num)
    return sr
}
let res = multiply(89,56) // call and result accumilation
console.log('Multiplication is '+res)
//es6
console.log(`Multiplication is ${res * 8}`)
console.log(`Multiplication is ${multiply(100,89) * 2}`)
