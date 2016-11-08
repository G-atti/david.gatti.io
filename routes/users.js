var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	res.json([
		{name: "David", last: "Gatti"},
		{name: "John", last: "Smith"}
	]);

});

module.exports = router;
