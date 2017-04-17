let express = require('express');

let router = express.Router();

//
//	Data
//
let data = [
		{
			text: "GitHub",
			url: "https://github.com/davidgatti",
			icon: "🖥"
		},
		{
			text: "Stackoverflow",
			url: "http://stackoverflow.com/users/1049894/david-gatti",
			icon: "🗂"
		},
		{
			text: "Instagram",
			url: "https://www.instagram.com/gattidavid/",
			icon: "📸"
		},
		{
			text: "Hackster.io",
			url: "https://www.hackster.io/davidgatti",
			icon: "👾"
		}		,
		{
			text: "Hackaday.io",
			url: "https://hackaday.io/davidgatti",
			icon: "🎃"
		},
		{
			text: "Twitter",
			url: "https://twitter.com/dawidgatti",
			icon: "🦉"
		}
	];

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("_frame", {
		title: "David Gatti // Social Media",
		description: "All the places that you can find me chatting, discussing, helping and sharing.",
		data: data,
		partials: {
			content: 'social_media',
		}
	});

});

module.exports = router;
