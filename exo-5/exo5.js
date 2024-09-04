// you can write js here

let input = "Turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i].toLowerCase() === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}

let whaleTranslation = resultArray.join('').toUpperCase();
console.log(whaleTranslation); // Affiche: UEIEAUE