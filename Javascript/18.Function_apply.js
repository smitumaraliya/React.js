/* Function As Constructor */

// function sum(){

// }

// const sum = () => {}

// const result = new Function("a", "b", "return a + b")

// console.log(result(10,20));

/* Function.length */

// function greet(a, b, c, d, e){

// }

// console.log(greet.length);

/* Function.toString() */

function sum(a, b){
    return a * b
}

console.log(sum.toString());

/* Function.name() */

// const sum = () => {}

// console.log(sum.name());

const name = function(){}

console.log(name.name);

/* Function Apply Method */

function multi(a, b, c){
    return a * b * c
}

let result = multi.apply(null, [10, 20, 30])

console.log(multi(10, 10));

console.log(result);

// const max = Math.max.apply(null, [10, 20, 30, 40])
// const min = Math.min.apply(null, [10, 20, 30, 40])

console.log(max);

console.log(min);

/* Apply arg with loop */

{
    let num = [10, 20]

    function sum(){
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum+=arguments[i]
        }
        return sum
    }
    let Result = sum.apply(null, num)
    
    console.log(Result)
}