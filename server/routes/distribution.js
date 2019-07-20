const router = require('express').Router();

const simulatedRolls = require('../../utilities/simulatedDiceRolls');

const rollDistribution = (
	simulatedRolls.reduce( (map, roll) => {
	 	const { total } = roll;
	 	const rollTotalKey = `${total}`;
	 	if( !map[rollTotalKey] ) map[rollTotalKey] = 0;

	 	map[rollTotalKey]++;

	 	return map;
	 }, {} )
 ); 

router.get('/', (req, res) => {
	console.log( 'Sending roll distribution' )
	res.send({ rollDistribution })
})

module.exports = router;