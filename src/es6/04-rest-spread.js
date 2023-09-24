//Arrays destructuring

let frutas = ['banano', 'pera'];
let [a, b] = frutas;
console.log(a, frutas[1]);

//Object desctructuring

let user = { userName: 'Solomeo', age: 39 };
let { userName, age } = user;
console.log(userName, age);


//spread operator

let person = { name: 'solomeo', age: 39 };
let country = 'Colombia';

let data = { ...person, country };
console.log(data);

//rest

const sum = (num, ...values) => {
    console.log(values);
    console.log(num + values[0]);
    // return num + values[0];
}

sum(1, 2, 2, 2);

function solution(json1 = {
    name: "Mr. Michi", food: "Pescado"
}, json2 = { age: 12, color: "Blanco" }) {

    return { ...json1, ...json2 };
}

console.log(solution({ name: "Bigotes", food: "Pollito" }));