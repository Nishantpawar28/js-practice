const arr = [1,2,3,4,6,7]

// console.log(arr.join())   //joins with commas
// console.log(arr.join(""))
// console.log(arr.join(" "))

// console.log(arr.slice(1,3))   //slice does not manipulate the original array
// console.log(arr)
// console.log(arr.splice(1,3))   //splice not manipulates the original array
// console.log(arr)

// console.log(arr.splice(1,3, 9,9,9)) 
// console.log(arr)

// console.log(arr.splice(1,3, [9,9,9])) 
// console.log(arr)

const arr2 = [8,9,0]

// console.log(arr.push([3,4,4]))
// console.log(arr)                //push modifies the original array but concat and spread operator doesn't
// console.log(arr.concat(arr2))
// console.log([...arr, arr2])
// console.log([...arr, ...arr2])

const arr3 = [1,2,3, [4,5], 6, [7, [8,9]]]

// console.log(arr3.flat())   //by default it will flat till only one level, so you can either pass no of levels to flatten or infinity to flatten at all levels
// console.log(arr3.flat(0))
// console.log(arr3.flat(Infinity))


// console.log(Array.isArray("dsfs"))
// console.log(Array.isArray({name:"dsfs"}))
// console.log(Array.isArray([]))
// console.log(Array.isArray(["dsfs"]))

