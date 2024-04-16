/* Javascript Array Method */

/*
Filter
Map
indexOf
lastIndexOf
slice
splice
sort
copyWithin
entries()
keys()
values()
fill
some
every
reduce
reduceRight
find
findIndex
findLastIndex
include
Array.isArray
flat
flatMap
*/

/* Filter Method in Array */

{
    let arr = ['Javascript', 'Jquery', 'html', 'css', 'php'];

    let filter = arr.filter((any) => any == 'Javascript')

    console.log(filter); // Output: ["Javascript"]

    let ArrObj = [
        { id: 1, item: 'mobile', name: 'iphone13', color: 'black', price: 90000, discount: '10%', storage: "128GB" },
        { id: 2, item: 'laptop', name: 'iphone14', color: 'gray', price: 89000, discount: '10%', storage: "256GB" },
        { id: 3, item: 'tablet', name: 'iphone15', color: 'green', price: 91000, discount: '10%', storage: "256GB" },
    ]

    let Filter = ArrObj.filter((data) => data.item === "laptop")

    console.log(Filter);

    let Filter1 = ArrObj.filter((data) => data.color === "gray")

    console.log(Filter1);
}

/* Map Method In Array */

{
    let num = [10, 20, 30, 40, 50]

    let Map = num.map((data) => data = 100)

    console.log(Map);
}

/* indexOf And LastIndexOf Method in Array */

{
    let arr = ['Javascript', 'Jquery', 'html', 'css', 'php', 'css'];

    let Index = arr.indexOf('css', 4);

    let IndexLast = arr.lastIndexOf('css', 6);

    console.log(Index);

    console.log(IndexLast);
}

/* Slice And Splice Method in Array */

{
    let arr = ['Javascript', 'Jquery', 'html', 'css', 'php'];

    let Slice = arr.slice(2)

    let Slice1 = arr.slice(2, 5)

    console.log(Slice);

    console.log(Slice1);

    let Splice = arr.splice(2, 2, "ExpressJs", "SQL")

    console.log(Slice1);

    console.log(arr);
}

/* Sorting In Array */

{
    let arr = ['Javascript', 'Jquery', 'html', 'css', 'php'];

    let num = [12, 32, 11, 45, 65, 78, 3, 1];

    let Sort = arr.sort();

    let Num = num.sort((a, b) => a - b); // Ascending Order

    console.log(Sort);

    console.log(Num);
}

/* entries(), keys(), alues() Method in Array */

{
    let arr = ['Javascript', 'Jquery', 'html', 'css', 'php'];

    let entries = arr.entries();

    console.log(entries.next().value);
    console.log(entries.next().value);
    console.log(entries.next().value);

    let keys = arr.keys()

    console.log(keys.next().value);
    console.log(keys.next().value);
    console.log(keys.next().value);
    console.log(keys.next().value);

    let Values = arr.values();

    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
}

/* CopyWithin Method in Array */

{
    let arr = ['Javascript', 'Jquery', 'html', 'css', 'php'];

    console.log(arr);

    let copy1 = arr.copyWithin(3)

    console.log(copy1); // [ 'Javascript', 'Jquery', 'html', 'css', 'Javascript' ]

    let copy2 = arr.copyWithin(2, 3)
    console.log(copy2); // [ 'Javascript', 'Jquery', 'html', 'css', 'Javascript' ]

    let copy3 = arr.copyWithin(2, 4, 6)

    console.log(copy3); // [ 'Javascript', 'Jquery', 'html', 'css', 'php' ]
}

/* Fill Method in Array */

{
    let arr = ['java', 'html', 'css']

    let fill = arr.fill('react', 2)

    console.log(fill);
}

/* Some And Every Method in Array */

{
    let arr = ['java', 'html', 'css']
    
    let some = arr.some((item) => item === "java")

    let every = arr.every((item) => item === "java")

    console.log(some);

    console.log(every);
}

/* Reduce Method */

{
    let num = [11, 22, 33, 44]

    let reduce = num.reduce((total, next) => total + next)

    let redueRight = num.reduceRight((total, next) => total + next)

    console.log(reduce);

    console.log(redueRight);
}

/* findIndex And findLastIndex */

{
    let arr = ['java', 'html', 'css']

    let num = [11, 22, 33, 44]

    let findIndex = arr.findIndex((value) => value.length < 4)

    let findLastIndex = arr.findLastIndex((value)=> value.length < 4)

    let Num = num.findLastIndex((value) => value >  20)

    console.log(findIndex); // 0

    console.log(findLastIndex);// 2
    
    console.log(Num); // 3
}

/* include Method in Array */

{
    let num = [11, 22, 33, 44]

    let  isInclude = num.includes(11)

    console.log(isInclude);
}

/* Arrat.isArray Method in Array */

{
    let arr = new Array(12, 11, 33)

    console.log(Array.isArray(arr)); // true

    let array = [11, 12, 13]

    let isArray = Array.isArray([])

    console.log(isArray); // true

    console.log(Array.isArray([]));
    console.log(Array.isArray('12'));
    console.log(Array.isArray(new Array(12, 11, 33)));
    console.log(Array.isArray(new Array));
}

/* flat And  flatMap Methods In Array */

{
    let arr = [11, 22, 33, [44, 55, 66, [77, 88, 99]]]

    console.log(arr);

    let Flat = arr.flat()

    console.log(Flat);

    let Flat1 = arr.flat(3)

    console.log(Flat1);

    let Arr = [10, 20, 20, 10]

    let flatmap = Arr.flatMap(item => (item === 10 ? [10, [10, 10]] : 20))

    console.log(flatmap);
}

/* at() Method in Array */

{
    let arr = ["data", "disk", "number", "value"]

    let at = arr.at(4)

    console.log(at);
}

/* Join Method in Array */

{
    let arr = ["data", "disk", "number", "value"]

    let join = arr.join("\"")

    console.log(join);
}