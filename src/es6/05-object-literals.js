//enhanced object literals

const newUser = (user, age, country, uId) => {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('solomeo', 39, 'Col', 47));