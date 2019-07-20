const GAME_ID = 1;
const NUMBER_OF_TURNS = 25;
const NUMBER_OF_ROLLERS = 4;

const minDieValue = 1;
const maxDieValue = 6;
const numberOfDiceRolledInRoll = 2;

const DiceRoll = require('./DiceRoll');

const rollDie = ( minValue, maxValue ) => Math.floor( Math.random() * maxValue ) + minValue;

function rollDice( numberOfDice ){
	let diceValues = [];

	for( let i = 0; i < numberOfDice; i++ ){
		diceValues.push( rollDie( minDieValue, maxDieValue ) );
	}

	return diceValues;
}

let diceRolls = [];

for( let i = 0; i < NUMBER_OF_TURNS; i++ ){
	for( let i = 1; i <= NUMBER_OF_ROLLERS; i++ ){
		diceRolls.push( new DiceRoll( GAME_ID, i, ...rollDice(2) ) )
	}
}

module.exports = diceRolls;