
function* iterate (array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Solomeo', 'Paredes', 'Sotano', 'Mengano']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
