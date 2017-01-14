let express = require('express');

let router = express.Router();

//
//	Data
//
let data = [
		{
			text: "🅿️ IoT Garage Opener: Modify your existing remote to connect it to the Internet.",
			url: "https://www.hackster.io/davidgatti/garage-opener-591175?ref=user&ref_id=6416&offset=2"
		},
		{
			text: "💦 IoT Water Flow Meter: Measure and track the amount of water that you use at home.",
			url: "https://www.hackster.io/davidgatti/iot-water-flow-meter-4595ff?ref=user&ref_id=6416&offset=1"
		}
	];

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("index", {
		title: "Title",
		data: data,
		partials: {
			content: 'hardware_projects',
		}
	});

});

module.exports = router;
