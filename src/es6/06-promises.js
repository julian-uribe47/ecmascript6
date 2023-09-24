const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Solomeo')
        }else {
            reject('no salió solomeo');
        }
    })
}

anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err));