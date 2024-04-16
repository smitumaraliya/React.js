/* Javascript Object Method */

/* is() Method */
{
    let obj = [10, 20, 30]

    let obj1 = [10, 20, 30]

    let Is = Object.is("obj", "obj")

    console.log(Is);

    let Is2 = Object.is("obj", "obj2")

    console.log(Is2);

    let Is3 = Object.is([], [])

    console.log(Is3);
}

/* Object.getOwnPropertyNames() Method */

{
    const obj = {
        a: 1,
        b: 2,
        c: 3
    }

    console.log(Object.getOwnPropertyNames(obj));

    console.log(Object.keys(obj));
}

/* Object.fromEntries() Method */

{
    let obj = new Map([["Option-1", 20], ["Option-2", 21]])

    let DataEntries = Object.fromEntries(obj)
}

/* Object.DefineProperties() Method */

{
    let obj = {}

    let Pros = Object.defineProperties(
        Object,{
            obj1:{
                name: "Object1",
                value: 121
            },
            obj2:{
                value: 212
            }
        }
    )

    console.log(Pros);

    let Obj = {
        name: "Object1",
        value: 121
    }

    let Props = Object.defineProperties(obj, {})

    console.log(obj);
}

/* Object.Property Method */

{
    let obj = []

    let obj1 = {key1:11, key2:22, key3:33}

    console.log(obj1.key1);

    let DataObject = Object.create(obj1)

    console.log(DataObject.key2);

    let ProtoObject = Object.getPrototypeOf(DataObject)

    console.log(ProtoObject === obj1);
}

/* Javascripy CallBack Function */

{
    // function(){}

    function sayHello() {
        console.log('Hello');
    }

    function sayHi() {
        console.log('Hi');
    }

    function sum(a, b, callback) {
        callback()
        return console.log(a + b);
    }

    console.log(sum(10, 20, sayHello));

    console.log(sum(30, 40, sayHi));
}

/* Javascript Arrow Function */

// function foo(){
//     return console.log("This is basic function!!");
// }

// foo()

const foo = () => {return console.log("This is arrow function!!");}

foo()

const foos = () => console.log("This is arrow function!!");

foos()

const fo = a => a + a

console.log(fo(10));

const fool = (a, b) => a + b

console.log(fool(10, 20));