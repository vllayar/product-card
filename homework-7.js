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
let productPrice = '$2';

function y(currentBudget) {
currentBudget >= productPrice ? console.log(`${product} purchased. Thank you for shopping!`)
: console.log(`You are ${productPrice - currentBudget} dollars short. Fill your balance. You need to replenish the balance.`);
}


