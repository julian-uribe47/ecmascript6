//Declarando




class user {
    //métodos
    greeting() {
        return 'Hola Solomeo';
    }
};

const jurib = new user();
console.log(jurib.greeting());
const andres = new user();
console.log(andres.greeting());

//constructor

class user {
    //constructor
    constructor() {
        console.log('Nuevo Solomeo');
    }
    greeting() {
        return'hola';
    }
}

const julio = new user();

//this
class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return'hola';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}
const ana = new user('Ana');
console.log(ana.greeting());


// setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'hola';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const solomeo = new user('solomeo', 39);
console.log(solomeo.uAge);
console.log(solomeo.uAge = 25);

