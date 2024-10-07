let val = "11abc"

let newVal = Number(val)

console.log(newVal)
console.log(typeof(newVal))

//conversion results
// "33" => 33
// "33ac" => NaN
// true => 1;  false => 0
// unddefined => NaN
// null => 0


//String and Boolean methods are also used for conversion

//boolean
// 1 => true;  0 => false
// "" => false
// "lisa" => true


// **************Operations***********


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log("1" + 2 + "2")


//postfix vs prefix
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.