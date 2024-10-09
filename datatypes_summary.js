//Primitive   
//These types are call by value i.e whenver it is copied smewhere then the value is copied 
//and not the memory reference so changes made in the copied variable won't effect the original variable

// 7 types: string, number, boolean, null, undefined, symbol, bigInt


// Non-primitve/Reference

// Arrays, Objects, Functions


//JavaScript is a dynamically typed language, meaning that type checking happens at runtime, rather than 
//during compilation. In dynamically typed languages, variables can store different types of data, and 
//you don't need to explicitly declare a variable's data type


// Typescript is Optional static typing is a compromise between static and dynamic typing.


//Type of null is an Object

//Datatypes of all non primitives are called as functions

const arr = [2,43,5]

const obj = {
    name: "lisa"
}

const func = function() {
    console.log("helo")
}

console.log(typeof arr)   //type is object
console.log(typeof obj)     //type is object
console.log(typeof func)    //type is function



//***************Memory******************

// Stach and Heap memory
//Primitive types used stack memomry and non-primitive used heap memory