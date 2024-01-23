const passwordGenerator = require('generate-password')
const length = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

function getPassword(){
    const password = passwordGenerator.generate({
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
        length: length
    })
    return password
}


const generatedPassword = getPassword();
console.log(`Random password: ${generatedPassword}`)