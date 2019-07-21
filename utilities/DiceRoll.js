module.exports = class DiceRoll {
	
	constructor( gameId, rollId, rollerId, ...values ){
		this.gameId = gameId;
		this.rollId = rollId;
		this.rollerId = rollerId;

		this.values = values;

		this.numberOfDice = values.length;

		this.total = values.reduce( (total, value) => { 
			total += value;
			return total; 
		} , 0 )
	}

	getTotal(){ return this.total; }

}