// let text = document.getElementById('text')
// function divide (firstname , secondname){
// return console.log(firstname / secondname)
// }
//     divide(6,2)
    
// let anyname = 'I am in Bootcamp'
// console.log(anyname.slice(8, 16))

// let salary = 2000
// let family = 3
// if (family <= 3 && salary <= 2000) {
//     console.log('you pay 30%')    
// } else {
//     console.log('you pay 50%')    
// }
// let myArray = [5,6]
// console.log(myArray[1])
// myArray.push(7)
// console.log(myArray[2])





// function area (s, triA, triB, triC,){
// return console.log(((s*(s - triA) * (s -  triB) * (s - triC))) ** 0.5)
// }

// area(5,3,4,3)

// function calTri (side1,side2,side3){
// let s = (side1+side2+side3)/2

// side1 = s-side1
// side2 = s-side2
// side3= s-side3

// let br = s*(side1 * side2* side3)
// let result = Math.sqrt(br)
// return console.log(result)
// }
// calTri(4,4,5)

// let subjects = ['maths', 'computer', 'geography', 'sport']
// for (let i = 0; i < subjects.length; i++) {
//     console.log(`I take the subject of ${subjects[i]} this semester`)    
// }

// list = ['one', 2, 3, 4, 'five']
// for (let index = 0; index < list.length; index++) {
//     if (typeof list[index] === 'string') {
//         console.log(list[index])
//     } else {
//         console.log(list[index]+1)
//     }
// }

// list = [5, 11, 102, 1, 8, 62, 9]
// for (let index = 0; index < list.length; index++) {
//     if (list[index] > 10 ) {
//         console.log(`The ${list[index]} is more than 10`)
//     } else {
//         console.log(`The ${list[index]} is less than 10`)
//     }    
// }

// convert 40 degrees celsius to fahrenheit
// function cToF(celsius) {
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   return cToFahr;
// }
// console.log(cToF(25))

// OR 

// function convert(celsius) {
//   return console.log(2*celsius - 0.2*celsius + 32)
// }
// convert(40)


// function leapyear(year) {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// console.log(leapyear(1987))

// console.log(Date())
// myYear = new Date ()
// function leapyear(year) {
//   if (year % 400 == 0 && year % 100 && year % 4) {
//     console.log('it is a leap year')
//   } else {
//     console.log('it is not a leap year')
//   }
// }
//   leapyear(1987)

// function convert(celsius) {
//   return console.log(2*celsius - 0.2*celsius + 32)
// }
// convert(40)

// let myArray = [1,2,4]
// myArray.forEach(i => { console.log(i+i)*2})

// OR

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i] + 2)
// }

// function doubleit(i) {
//   return console.log(i * 2)
// }

// setTimeout() => {console.log('I am the first')}, 6000)

// let myArray = [3,5,7]
// myArray.forEach(n => {console.log(n*n)})

let mybtn = document.getElementById('btn')
// mybtn.addEventListener('click', console.log('hey'))
mybtn.addEventListener('click', () => {alert('hello')}) 

// let text = document.getElementsByClassName('a')
// let title = document.getElementsByTagName('h1')
// let mybtn = document.getElementById('btn')
// mybtn.addEventListener('click', () => {
//     text[0].innerHTML = 'I am learning script'
//     title[0].innerHTML = 'MY CODING'
// })

// HOW TO WRITE OBJECT IN JAVASCRIPT

// let car = {
//     name: 'lexus',
//     model: 2022,
//     color: 'gold',
//     interest: function(){  
//         console.log(`I love ${this.name} car`)
//     }
// }
// car.interest()

let car = {
    name: 'lexus',
    model: 2022,
    gear: 'automatic',
    colors: ['gold', 'black','wine'],
    spec: function(){
        console.log(`I will buy ${this.name} car`)
    }
}
car.spec()

let carColors = car.colors
carColors.forEach(element => {
    console.log(`My favourite colors are ${element}`)
});
console.log(carColors)