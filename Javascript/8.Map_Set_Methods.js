/* Javascript Map Object Method */

/*

new map()
set method
get method
delete method
clear method
forEach method
has method
entries method
Values method
key method
size method

*/

// let Obj = { id:1, FirstName:"John", LastName:"Doe" };

// let DataObj = Obj.id

// console.log(DataObj); // 1


/* Map Object */

// let  MapObj = new Map();


/* Set Method */

// MapObj.set("id", 1)

// MapObj.set('FirstName', 'John')

// MapObj.set('LastName','Doe');

// console.log('FirstName');// John


/* Get Method */

// let DataGet = MapObj.get('LastName')

// let DataGet1 = MapObj.get('FirstName')

// console.log(DataGet); // Doe

// console.log(DataGet1); // John


/* Delete Method */

// let DeleteMap = MapObj.delete('LastName')

// console.log(MapObj);

// console.log(DeleteMap); // true

// console.log(DeleteMap.get('LastName')); // undefined


/* Size Method */

// let SizeMap =  MapObj.size;

// console.log(SizeMap); // 2


/* Values MAthod */

// let ValueMap = MapObj.values()

// console.log(ValueMap); // Iterator { "John", "Doe" }

// console.log(ValueMap.next().value);

// console.log(ValueMap.next().value);

// console.log(ValueMap.next().value);


/* Key Method */

// let MapObj = new map ([['Age',35], ['Country','USA']]);

// let KeyData = MapObj.keys()

// console.log(KeyData);

// console.log(KeyData.next().value) ;// Age

// console.log(KeyData.next().value) ;// Country


/* Has Method */

// let MapObj = new map ([['Age',35], ['Country','USA']]);

// let HasMap = MapObj.has( 'Country' );

// console.log(HasMap); // True


/* Clear Method */

// let MapObj = new map ([['Age',35], ['Country','USA']]);

// let ClearMap = MapObj.clear()

// console.log(MapObj);


/* ForEach Method */

// let MapObj = new map ([['Age',35], ['Country','USA']]).forEach(DataPrint)

// console.log(MapObj);

// function DataPrint(value, key) {
//     console.log(`${key} : ${value}`); 
// }


/* Set Method */

// MapObj.set( 'City','New York' )

// MapObj.set( 'Country','USA' )

// console.log(MapObj);


/* Entries Method */

// let MapObj = new map ([['Age',35], ['Country','USA']]);

// let Entries = MapObj.entries()

// console.log(Entries);

// console.log(Entries.next().value);

// console.log(Entries.next().value);



/* JavaScript Set Object */


/* Add Method */

// let SetObj = new Set()

// let AddSets = SetObj.add('Apple')

// let AddSets1 = SetObj.add('Graps')

// console.log(AddSets); // Apple Graps


/* Entries Method */

// let Entries = SetObj.entries();

// console.log(Entries);


/* Has Method */

// let GetSets = SetObj.has('Apple')

// console.log(GetSets);


/* Key Method */

// let KeySets = SetObj.keys()

// console.log(KeySets);

// console.log(KeySets.next().value);

// console.log(KeySets.next().value);


/* Values Method */

// let ValuesSet = SetObj.values()

// console.log(ValuesSet);

// console.log(ValuesSet.next().value);

// console.log(ValuesSet.next().value);


/* Size Method */

// let SizeSets = SetObj.size

// console.log(SizeSets);


/* Delete Method */

// let DeleteSets = SetObj.delete('Apple')

// console.log(SetObj);


/* Clear Method */

// let ClearSets  = SetObj.clear();

// console.log(SetObj)


/* ForEach Method */

// let ForEach = SetObj.ForEach(PrintSets)

// function PrintSets(value, key) {
//     console.log(`${key} = ${value}`);    
// }