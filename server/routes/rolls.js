const router = require('express').Router();

router.get('/', (req, res) => {
	res.send({ rolls: 'route'})
})

module.exports = router;