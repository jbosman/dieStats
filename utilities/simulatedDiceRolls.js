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

for( let turn = 0; turn < NUMBER_OF_TURNS; turn++ ){
	for( let rollerId = 1; rollerId <= NUMBER_OF_ROLLERS; rollerId++ ){
		const rollId = ( turn * NUMBER_OF_ROLLERS ) + rollerId;
		diceRolls.push( new DiceRoll( GAME_ID, rollId, rollerId, ...rollDice(2) ) )
	}
}

module.exports = diceRolls;