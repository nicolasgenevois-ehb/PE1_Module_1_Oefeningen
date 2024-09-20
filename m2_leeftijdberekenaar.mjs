// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let geboorteJaar = parseFloat(await userInput.question('Wat is jouw geborte jaar? '));
let toekomstJaar = parseFloat(await userInput.question('Kies een jaar in de toekomst.  '));
let leeftijd = toekomstJaar - geboorteJaar;

console.log("In " + toekomstJaar + " zal je " + (leeftijd - 1) + " of " + leeftijd + " oud zijn." )

process.exit();