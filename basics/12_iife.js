//Immediately invoke function expression

//Note:
//1. If file has multiple iffe then each should have semicolon at end


//These functions are used to avoid polluting the function from global scope pollution
//It is a name IIFE
function hello() {
    console.log("hello")
}
hello();

//another way of calling function
(function hello2() {
    console.log("hello")
})();      //first paranthesis is for function definationa dn second for execution

//Unnamed IIFE
(() => {
    console.log("hello")
})();

((name) => {
    console.log(name)
})("lisa");