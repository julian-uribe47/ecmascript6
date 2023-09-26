class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak() {
        return 'hola';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const solomeo = new user('solomeo', 39);
console.log(solomeo.uAge);
console.log(solomeo.uAge = 25);