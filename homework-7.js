// TEMPERATURE LOG
function temperatureLog (city, temperature) {
console.log(`The temperature in ${city} is now ${temperature} degrees celcium.`);
}

// COMPARISON TO SPEED LIGHT
const lightSpeed = 299792458;

function compareLightSpeed (speed) {
speed > lightSpeed ? console.log('Superluminal speed.')
: speed < lightSpeed ? console.log('Subliminal speed.')
: console.log('Light speed.');
}

// PURCHASE ATTEMPT
let product = 'Bottle of water';
let productPrice = 2;
let currentBudget = 10;

function y(currentBudget) {
currentBudget >= productPrice ? console.log(`${product} purchased. Thank you for shopping!`)
: console.log(`You are ${productPrice - currentBudget} dollars short. Fill your balance. You need to replenish the balance.`);
}

// EXTRA FUNCTION AND VARIABLE DECLARATIONS
let moscowTemperature = 34;
let astanaTemperature = 83;
let dubaiTemperature = 48;


function convertTemperature (degree, from, to) {
  from === 'celcius' && to === 'fahrenheit' ? console.log(`The temperature is ${result = degree * 9 / 5 + 32} degrees fahrenheit.`)
  : from === 'fahrenheit' && to === 'celcius' ? console.log(`The temperature is ${result = (degree - 32) * 5 / 9} degrees celcius`)
  : from === to ? console.log(`The temperature is ${from} degrees celcius.`)
  : from !== 'fahrenheit' && from !== 'celcius' ? console.log(`The unit ${from} is unidentified.`)
  : console.log(`The unit ${to} is unidentified.`);
}

convertTemperature(moscowTemperature, 'celcius', 'fahrenheit');
convertTemperature(astanaTemperature, 'fahreneit', 'celius');
convertTemperature(dubaiTemperature, 'cm', 'celcius');
convertTemperature(45, 'fahreneit', 'kg');
