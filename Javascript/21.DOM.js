/* Javascript HTML DOM Method */

/* DOM selection Method */

let dom1 = document.getElementById('demo')

console.log(dom1);

let dom2 = document.getElementById('dome').id

console.log(dom2);

let dom3 = document.getElementById('demo').className

console.log(dom3);

/* Style */

document.getElementById('demo').style.color = "purple"

// let dom4 = document.getElementsByClassName('heading').style.backgroundColor = "orange"

// console.log(dom4);

// let dom5 = document.getElementsByClassName('heading')

// console.log(dom5);

let dom6 = document.getElementById('demo').textContent

console.log(dom6);

let dom7 = document.getElementById('demo').innerText

console.log(dom7);

let dom8 = document.getElementById('demo').innerHTML

console.log(dom8);


/* querySelector And querySelectorAll */

let data1 = document.querySelector('h1')

console.log(data1);

data1.style.color = "orange"

let data2 = document.querySelector('li')

console.log(data2);

data2.style.color = "orange"

let data3 = document.querySelectorAll("li")

console.log(data3);

data3.forEach((li) => {
    li.style.color = "orange"
})

let data4 = document.querySelector('input[type="password"]')

console.log(data4);

data4.style.backgroundColor = "purple"