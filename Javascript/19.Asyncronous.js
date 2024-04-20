/* Javascript Function apply(), call() and bind() Method */

/* Apply Method */

{
    const human = {
        firstName : "John",
        lastName : "Wick",
        age : 29
    }

    const person = {
        firstName : "smit",
        lastName : "Umaraliya",
        age : 19
    }

    function intro(msg, pro){
        console.log(`${msg} My FirstName is ${this.firstName} ANd lastName is ${lastName}`);
    }

    console.log(intro());

    let result = intro.apply(person, ["Hi There!", "Brohh"]);

    console.log(result);
}

/* Call() Method */

{
    function sum(a, b){
        return a + b
    }

    let result = sum.call(5, 7)

    console.log(result);
}

{
    const human = {
        firstName : "John",
        lastName : "Wick",
        age : 29
    }

    function intro(msg){
        console.log(msg + this.firstName + this.lastName);
    }

    let result = intro.call(human, "Hi")

    console.log(result);
}

/* Bind() Method */

{
    const human = {
        firstName : "John",
        lastName : "Wick",
        intro:function(){
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }

    const person = {
        firstName : "smit",
        lastName : "Umaraliya",
        age : 19
    }

    let result = human.intro.bind(person)

    console.log(result());
}

/* Asyncronous Function */

/*
setInterval
setTimeout
clearInterval
clearTimeout
*/

/* setTimeout */

// setTimeout(multi, 4000, arg1, arg2, arg3, argN..)

{
    setTimeout(() => console.log("Hello"), 5000)

    setTimeout(()=>{
        console.log("Hello")
    }, 5000)

    setInterval(()=> console.log("Hi"), 3000)
}

{
    function multi(){
        console.log("setTimeout");
    }

    setTimeout(multi, 4000)

    console.log("after setTimeout");
}

function greet(a, b){
    console.log( a + b);
    return a + b
}

setTimeout(greet, 5000, 10, 20)


/* setInterval */

{
    function greet(a, b){
        console.log(a + b);
        return a + b
    }
}

setInterval(greet, 5000, 10, 20)


/* clearTimeout And clearInterval */

let setTimeId = setTimeout(function (){
    console.log("Hello")
}, 5000)

console.log(setTimeId);


/* clearTimeout */

{
    function greet(){
        console.log(10 + 20);
    }

    let setTimeId = setTimeout(greet, 5000)

    console.log(setTimeId);

    clearTimeout(setTimeId)
}


/* clearInterval */

{
    let count = 0

    let setIntervalId = setInterval(function(){

        count +=1

        if(count == 5){
            clearInterval(setIntervalId)
        }
        console.log(count);
    }, 3000)
}

/* this keyword in Javascript */

/* this in global scope */

let firstName = this

console.log(firstName);

/* this in inner function */

function greet(){
    console.log(this);
}

greet()

/* this in inner Object */

const profile = {
    firstName : "John",
    age : 29,

    greet(){
        console.log(this);
        console.log(this.firstName);
    }
}

profile.greet()

/* this keyword in inner function */

{
    const user = {
        firstName : "John",
        lastName : "Doe",
        age : 25,

        greet(){
            console.log(this);
            console.log(this.lastName);

            function inner(){
                console.log(this);
                console.log(this.firstName);
            }

            inner()
        }
    }
    user.greet()
}

/* this with arrow function */

let greet = () => console.log(this);

greet()

{
    {
        const user = {
            firstName : "John",
            lastName : "Doe",
            age : 25,
    
            greet(){
                console.log(this);
                console.log(this.lastName);
    
                const inner = () => {
                    console.log(this);
                    console.log(this.firstName);
                }
    
                inner()
            }
        }
        user.greet()
    }
}