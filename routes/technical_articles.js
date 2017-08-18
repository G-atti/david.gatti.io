let express = require('express');

let router = express.Router();

//
//	Data
//
let data = [
		{
			text: "How to manipulate the terminal window using NodeJS",
			url: "https://github.com/davidgatti/How-to-use-Readline-in-NodeJS",
			icon: "⌨️"
		},
		{
			text: "My Personal Development Setup for my Mac",
			url: "https://github.com/davidgatti/my-development-setup",
			icon: "💻"
		},
		{
			text: "A step by step explanation how to take advantage of Streams in NodeJS",
			url: "https://github.com/davidgatti/How-to-Understand-Streams-in-NodeJS",
			icon: "🚰"
		},
		{
			text: "How to Stream Torrents using NodeJS and the HTML5 Video tag.",
			url: "https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS/branches",
			icon: "🍿"
		},
		{
			text: "How to Stream Movies to a HTML 5 video tag using NodeJS.",
			url: "https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS",
			icon: "🎥"
		},
		{
			text: "How to write C code in NodeJS using C++ as a pass through?",
			url: "https://github.com/davidgatti/How-to-use-C-in-NodeJS-through-CPP",
			icon: "🤓"
		},
		{
			text: "Deconstructing Ping with C and NodeJS: Simple examples that show how to work with binary headers in C and NodeJS.",
			url: "https://github.com/davidgatti/Deconstructing-Ping-with-C-and-NodeJS",
			icon: "🙈"
		},
		{
			text: "The Statefulness Aspect of NodeJS: An explanation of what it really means to have a stateful environment.",
			url: "https://github.com/davidgatti/Statefulness-aspect-of-NodeJS",
			icon: "🙊"
		},
		{
			text: "A repo to show how to use Sockets with IoT devices",
			url: "https://github.com/davidgatti/How-to-Understand-Sockets-Using-IoT",
			icon: "🙉"
		},
		{
			text: " dgCam: Demonstrates how to build a camera app for Android.",
			url: "https://github.com/davidgatti/dgCam",
			icon: "📸"
		}
	];

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("_frame", {
		title: "David Gatti // Technical Articles",
		description: "Open Source Article: My passion is to take difficult problems, dissect them, break them down into small, manageable chunks, and resolve them.",
		data: data,
		partials: {
			content: 'technical_articles',
		}
	});

});

module.exports = router;
