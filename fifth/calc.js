function sum(num1, num2, curr, dvRDAVDzsges) {
    console.log(num1)
    console.log(num2)
    console.log(curr)

    console.log(dvRDAVDzsges)
    dvRDAVDzsges.innerHTML = `<b>${parseInt(num1) + parseInt(num2)}</b>`
    console.log(dvRDAVDzsges)
}

function sub() {
    let dvEmp = document.getElementById('dvRes')
    let nm1 = document.getElementById('num1')
    let nm2 = document.getElementById('num2')
    dvEmp.innerHTML = `<b>${parseInt(nm1.value) - parseInt(nm2.value)}</b>`
}

let lklzkldvdjjlkzjvd = document.getElementById('btnMul')
lklzkldvdjjlkzjvd.onclick = function() {
    let dvEmp = document.getElementById('dvRes')
    let nm1 = document.getElementById('num1')
    let nm2 = document.getElementById('num2')
    dvEmp.innerHTML = `<b>${parseInt(nm1.value) * parseInt(nm2.value)}</b>`
}

function div(num1, num2) {

}

let dvRes = document.getElementById('dvRes')
dvRes.onmouseover = function() {
    console.log('enter')
    this.style.backgroundColor = magicColor()
}
dvRes.onmouseout = function() {
    this.style.backgroundColor = 'rgb(0,0,255)'
}

function magicColor() {
    // generate random number between 0 to 255
}
