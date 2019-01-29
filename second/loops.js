let num = 2

for (let i = 1; i <= 10; i++) {
    console.log(num * i)
}
console.log(`While Loop`)
while(num <= 20) {
    console.log(num)
    num = num * 2
}
console.log(`Do While Loop`)
do {
    console.log(num)
    num++
}while(num <= 100)