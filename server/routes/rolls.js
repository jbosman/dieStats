const router = require('express').Router();

const simulatedRolls = require('../../utilities/simulatedDiceRolls');

router.get('/', (req, res) => {
	console.log( 'Sending rolls' )
	res.send({ rolls: simulatedRolls})
})

module.exports = router;