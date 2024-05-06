/* Javascript Promises */

/*

Dinner Scenario                                                             Javascript

1. Your Friend                                                              1. Promise

2. While your friend is on his way to the food truck(fetch)                 2. Asyncronous operation in javascript

3. When your friend text's you with can get food and food or not            3. Promise return value

4. Can get food                                                             4. Promise is said to be fulfilled

5. Cannot get food                                                          5. Promise is said to be rejected

6. Setup the table                                                          6. Sucess callback

*/


/*

1. Your Friend                                                              1. Promise

2. Can get Food / Cannot Get Food                                           2. Promise Value

3. Can get Food                                                             3. FulFill Promise

4. Cannot Get Food                                                          4. Reject Promise

5. Set up The Table                                                         5. Sucess Callback

6. Cook Another Food                                                        6. Failure Callback

*/

let process1 = {
    stock: ['Stock is Availble'],
    production: ['Production was Started'],
    Fruits: ['Mango', 'StrawBerry', 'Orange'],
    AddIngrediant: ['Milk', 'Milkpowder'],
    Toppings: ['Chocolate', 'Nuts'],
    Packing: ['Cone', 'Cup', 'Stick'],
    AfterPack: ['Serve IceCream']
}

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(`${process1.stock[0]}`);
        console.log(`${process1.Fruits[0]} Flavour Production`);
        resolve()
    }, 3000)
}).then(() => {
    setTimeout(() => {
        console.log(`${process1.production[0]}`)
    }, 1000)
}).then(() => {
    setTimeout(() => {
        console.log(`Production with added some ingrediant was name called ${process1.AddIngrediant[0]} and ${process1.AddIngrediant[1]}`)
    }, 2000)
}).then(() => {
    setTimeout(() => {
        console.log(`add toppings was ${process1.Toppings[0]} and ${process1.Toppings[1]}`)
    }, 2500)
}).then(() => {
    setTimeout(() => {
        console.log(`IceCream was packed with ${process1.Packing[0]} and ${process1.Packing[1]} and ${process1.Packing[2]}`)
    }, 3000)
}).then(() => {
    setTimeout(() => {
        console.log(`after Packing ${process1.AfterPack[0]}`);
    }, 3500)
})