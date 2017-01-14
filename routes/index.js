let express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("index", {
		title: "Title",
		partials: {
			content: 'home',
		}
	});

});

module.exports = router;
