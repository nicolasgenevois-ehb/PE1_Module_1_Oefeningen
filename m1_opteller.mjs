// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = 33;
let getal2 = "12";
let sum = getal1 + getal2;
console.log("De som van jouw twee getallen is " + sum + ".")

process.exit();
