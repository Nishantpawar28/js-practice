const name = "Lisa"
const count = 30;

console.log(name + 50 + " pawar")  //not remommended

console.log(`My name is ${name}
    gfhfg fg`)  //string interpolation (temlate literals)

//These functions do not change the original string as primitive types are immutable
console.log(name.slice(0,2))
console.log(name.substring(0,2))
console.log(name.indexOf("l"))   //check is case sensitive so will return -1
console.log(name.trimEnd())
console.log(name.trim())
console.log(name.bold())
console.log(name.endsWith("s"))
console.log(name.startsWith("L"))   //case sesitive check
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.toUpperCase())
console.log(name.toLocaleLowerCase())