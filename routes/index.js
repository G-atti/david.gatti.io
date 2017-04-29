let express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("_frame", {
		title: "David Gatti",
		description: "I ♥ learning about new technologies, talking on podcasts about interesting stuff, and I'm passionate about taking nice photos with my iPhone.",
		partials: {
			content: 'index',
		}
	});

});

module.exports = router;
