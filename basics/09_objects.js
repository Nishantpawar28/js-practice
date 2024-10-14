//Two ways to declare object 
//1. Literal  
const obj = {
    name: "lisa",
    age: 1
}
//2. Constructor
// Object.create()

//We can access object using 2 methods
// 1. obj_name.key_name
// 2. obj_name["key_name"]

//2nd method is preffered because we cant access key= "Full name" using dot method

//If you don't want to change object values then you can freeze that object
// obj.age = 2;
// console.log(obj)

// Object.freeze(obj)

// obj.age = 4;
// console.log(obj)

const obj2 = {
    color: "white"
}

// const obj3 = {obj, obj2}
// console.log(obj3)

const obj4 = {...obj, ...obj2, color: "black"}
// const obj5 = {...obj, ...obj2, ...{color: "black"}} //same as above
// console.log(obj4)
// console.log(obj5)

console.log(Object.values(obj4))
console.log(Object.keys(obj4))
console.log(Object.entries(obj4))

