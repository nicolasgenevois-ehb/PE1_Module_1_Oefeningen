// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



let naam = await userInput.question('Wat is je naam? ');
let age = await userInput.question('Wat is je leeftijd? ');
let favoriteGame = await userInput.question('Wat is je favoriete spel? ');

console.log('Hallo '+ naam +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();
