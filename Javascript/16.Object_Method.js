/* Javascript Object And It's Method */

{
    const obj = {id:1, FirstName:"Jonh", LastName: "Doe"}; // Creating an object in javascript.

    console.log(obj);

    const Obj = new Object()
    
    console.log(Obj);

    let Data = obj.FirstName

    let Data1 = obj["id"]

    console.log(Data);

    console.log(Data1);

    obj.address = "United State"

    console.log(obj);

    obj.id = 2

    console.log(obj);
}

/* Object.assign() Method */

{
    const obj = {id:1, FirstName:"Jonh", LastName: "Doe"}; // Creating an object in javascript.
    
    const num = {key1:11, key2:22, key3:33, key4:44}

    let Assign = Object.assign(obj, num)

    console.log(Assign);
}

/* Object.freeze() Method */

{
    const obj = {id:1, FirstName:"Jonh", LastName: "Doe"}; // Creating an object in javascript.
    
    obj.id = 11;

    console.log(obj);

    let data = Object.freeze(obj)

    console.log(obj);

    obj.key = 12

    console.log(obj);
}

/* Object.create() Method */

{
    const obj = {
        id:1, 
        FirstName:"Jonh", 
        LastName: "Doe",
        NewObj:function(){
            console.log(`my first name is ${this.FirstName} and i am ${this.occupation}`);
        }
    }; // Creating an object in javascript.

    let NewObject = Object.create(obj)

    NewObject.occupation = "development"

    console.log(NewObject.occupation);

    console.log(NewObject.NewObj());

    console.log(obj);
}

/* Object.isFrozen Method */

{
    let obj = {key1:11, key2:22, key3:44, key4:55}

    obj.key1 = 21

    delete obj.key1

    Object.freeze(obj)

    obj.key1 = 22

    delete  obj.key3

    let Data = Object.isFrozen(obj)

    console.log(obj);

    console.log(Data);
}

/* Object.seal() Method */

{
    let obj = {key1:11, key2:22, key3:44, key4:55}
    
    Object.seal()

    delete obj.key1

    console.log(obj);

    let Data = Object.isSealed(obj)

    console.log(Data);
}

/* hasOwn() Method */

{
    let obj = {key1:11, key2:22, key3:44, key4:55}

    let Data = Object.hasOwn(obj, "html")

    console.log(Data);

    console.log(obj.hasOwnProperty("key1"));
}

/* Object.entries() Method */

{
    let obj = {key1:"javascript", key2:"sass", key3:"html", key4:"css"}

    for (const [key, vakue] of Object.entries(obj)) {
        console.log(`${key}: ${vakue}`);
      }

      let arr = [11, 22, 21, 12]

      for (const value of arr) {
        console.log(`${value}`);
      }
}

/* Object.keys() Method */

{
    let obj = {key1:"javascript", key2:"sass", key3:"html", key4:"css"}

    let Data = Object.keys(obj)

    console.log(Data);
}

/* Object.values() Method */

{
    let obj = {key1:"javascript", key2:"sass", key3:"html", key4:"css"}

    let Data = Object.values(obj)

    console.log(Data);
}

/* Object.groupBy */

{
    let Grocerys = [
        {name: "apple", category: "fruit", quantity:15},
        {name: "carrot", category: "vegetable", quantity:10},
        {name: "tomato", category: "vegetable", quantity:5},
        {name: "mango", category: "fruit", quantity:7},
        {name: "cheese", category: "dairy", quantity:21}
    ]

    console.log(Grocerys);

    let Data = Object.groupBy(Grocerys, ({name}) => name)

    console.log(Data); // Output will be an object with keys as names and values as arrays of objects that have.

    let Data1 = Object.groupBy(Grocerys, ({category}) => category)

    console.log(Data1); 

    function Stock({quantity}){
        return quantity > 10 ? "Enough Stock" : "Re-Stock"
    }

    let Data3 = Object.groupBy(Grocerys, Stock)

    console.log(Data3);  
}