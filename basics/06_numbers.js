const num = 33.4543;
const num3 = 334543456;

console.log(num.toString())
console.log(typeof num.toString())
console.log(num.toFixed(3))    //fixes the no of decimal places
console.log(num.toPrecision(4))   //starts from start and not after decimal point
console.log(num3.toLocaleString())   //add commas as per standards


//*************Maths****

console.log(Math.abs(-5))
console.log(Math.round(5.3))
console.log(Math.round(5.6))
console.log(Math.ceil(5.6))
console.log(Math.floor(5.6))
console.log(Math.min(3,66,4,2))
console.log(Math.random())   //The value will always be between 0 and 1
console.log((Math.random() * 10) + 1)
