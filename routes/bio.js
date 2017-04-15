let express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("_frame", {
		title: "David Gatti // Bio",
		description: "",
		partials: {
			content: 'bio',
		}
	});

});

module.exports = router;
