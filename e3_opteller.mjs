// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = parseFloat(await userInput.question('Geef een erste getal. '));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal. '));
let sum = getal1 + getal2;
console.log("De som van jouw twee getallen is " + sum + ".")

process.exit();
