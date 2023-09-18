function newUser(name, age, country) {
    var name = name || 'solomeo';
    var age = age || '39';
    var country = country || 'Colombia';
    console.log(name, age, country);  
}

newUser();
newUser('simon', 40, 'tangamandapio');

const newAdmin = (name = 'solomeo', age = 39, country = 'Colombia') => {
    console.log(name, age, country);
}
newAdmin('julio', 40, 'Sanpaleste');
