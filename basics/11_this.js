const user = {
    username:"lisa",
    age:1,
    displayName: function() {
        console.log(`My name is ${this.username}`)
        // console.log(`My name is ${username}`)    ReferenceError: username is not defined
        console.log(this)
    }
}

//this keyword refers to the current context, here curly braces of object is the context

// console.log(user.displayName())
// user.username = "hanni"
// console.log(user.displayName())

// console.log(this)   //this referes to empty context, as currently there is no context in global but in browser it will refer to window object
//global object of browser is window object

function hello(){
    console.log(this)
}

const helloArrow = () => {
    console.log(this)
}

hello()         //prints some object
helloArrow()    //prints empty object