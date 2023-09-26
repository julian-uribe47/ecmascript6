const regex = /\b(manzana)+\b/g;

const fruit = 'manzana, pera, piña, naranja, guayaba';

for (const match of fruit.matchAll(regex)) {

    console.log(match);
};