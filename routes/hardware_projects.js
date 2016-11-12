let express = require('express');

let router = express.Router();

//
//	Data
//
let obj = {
	text: ["I'm passionate about electronics, and I love the whole IoT idea."],
	list: [
		{
			text: "WiMi: What Is My IP: WiMi is a simple solution to constantly stay up to date with your ever changing public IP.",
			url: "https://github.com/davidgatti/What-Is-My-IP"
		},
		{
			text: "IoT Garage Opener: Modify your existing remote to connect it to the Internet.",
			url: "https://www.hackster.io/davidgatti/garage-opener-591175?ref=user&ref_id=6416&offset=2"
		},
		{
			text: "IoT Water Flow Meter: Measure and track the amount of water that you use at home.",
			url: "https://www.hackster.io/davidgatti/iot-water-flow-meter-4595ff?ref=user&ref_id=6416&offset=1"
		}
	]
};

router.get('/', function(req, res, next) {

	res.json(obj);

});

module.exports = router;
