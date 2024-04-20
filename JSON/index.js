fetch('http://localhost:3000/profile')

.then(response => response.json())

.then(data => console.log(data))