/* Javascript Array And It's Method */

{
    let array = [10, 20, 30, 40, 50]

    array[0] = 15

    console.log(array);

    let Newarray = new Array(10, 20, 30, 40, 50)

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);

    console.log(typeof array);

    console.log(typeof Newarray);
}

{
    let array = [10]

    let Newarray = new Array(10)

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);
}

{
    let array = ["Javascript", 45, false, undefined, null]

    console.log(array);

    console.log(array.length);

    console.log(array[0]);

   /* Array push Method */

    array.push("Html")
    array.push("Css")

    console.log(array);

    /* Array Unshift Method */

    array.unshift("Sass")
    array.unshift("TailwindCss")

    console.log(array);

    /* Array pop Method */

    array.pop()
    array.pop()

    console.log(array);

    /* Array Shift Method */

    array.shift()
    array.shift()

    console.log(array);

    /* Array toString Method */

    let string = array.toString()

    console.log(string);

    /* Array reverse Method */

    let reverse = array.reverse()

    console.log(array);

    /* Array forEach Method */

    array.forEach((item) => console.log(item))

    /* Array concat Method */

    {
        let arr1 = [11, 22, 33]
        let arr2 = [true, false]
        let arr3 = ["reactjs", "nodejs"]

        let Newarray = arr1.concat(arr2, arr3)

        console.log(Newarray);
    }
}