let express = require('express');

let router = express.Router();

//
//	Data
//
let obj = {
	text: ["Open Source Article: My passion is to take difficult problems, dissect them, break them down into small, manageable chunks, and resolve them."],
	list: [
		{
			text: "Deconstructing Ping with C and NodeJS: Simple examples that show how to work with binary headers in C and NodeJS.",
			url: "https://github.com/davidgatti/Deconstructing-Ping-with-C-and-NodeJS"
		},
		{
			text: "The Statefulness Aspect of NodeJS: An explanation of what it really means to have a stateful environment.",
			url: "https://github.com/davidgatti/Statefulness-aspect-of-NodeJS"
		},
		{
			text: "IoT Raw Sockets: Learn about Sockets and how it works, using Particle and NodeJS.",
			url: "https://github.com/davidgatti/IoT-Raw-Sockets-Examples"
		},
		{
			text: "dgCam: Demonstrates how to build a camera app for Android.",
			url: "https://github.com/davidgatti/dgCam"
		}
	]
};

router.get('/', function(req, res, next) {

	res.json(obj);

});

module.exports = router;
