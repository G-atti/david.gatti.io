let express = require('express');

let router = express.Router();

//
//	Data
//
let data = [
		{
			text: "A SystemD config generators for NodeJS projects",
			url: "https://github.com/davidgatti/toSystemD",
			icon: "😍"
		},
		{
			text: "Generate Nginx configuration files based on the user input",
			url: "https://github.com/davidgatti/ginnx",
			icon: "🎗"
		},
		{
			text: "Monitor file changes and restart your NodeJS server inside a Docker container",
			url: "https://github.com/davidgatti/persempre",
			icon: "👓"
		},
		{
			text: "My personal default template for a ExpressJS projects",
			url: "https://github.com/davidgatti/express-generator-dg",
			icon: "🙂"
		},		{
			text: "Convert app.json in to .env",
			url: "https://github.com/davidgatti/envAuto",
			icon: "🚗"
		},
		{
			text: "Display bytes in a human readable format: KB, MB, GB, TB, PB, EB, ZB, YB",
			url: "https://github.com/davidgatti/byteman",
			icon: "🤖"
		},
		{
			text: "My personal default template for a ExpressJS project",
			url: "https://github.com/davidgatti/express-generator-dg",
			icon: "🙂"
		},
		{
			text: "A private virtual phone for various account confirmation.",
			url: "https://github.com/davidgatti/bPhone",
			icon: "📞"
		},
		{
			text: "WiMi is a simple solution to constantly stay up to date with your ever changing public IP",
			url: "https://github.com/davidgatti/What-Is-My-IP",
			icon: "🚩"
		},
		{
			text: "autoWiFi: Disable or enable the WiFi module, based on the charging status. More then 100,000 installations.",
			url: "https://play.google.com/store/apps/details?id=com.dawidgatti.autoWiFi&hl=en",
			icon: "📶"
		},
		{
			text: "GetDeviceID: Display the Device ID. I needed this tool for myself.",
			url: "https://play.google.com/store/apps/details?id=pl.gatti.getdeviceid&hl=en",
			icon: "🎫"
		}
	];

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("_frame", {
		title: "David Gatti // Software Projects",
		description: "I had fun as an Android developer, and made some very simple apps for the platform. To my surprise, the autoWiFi app I created was installed more than 100,000 times around the world and received numerous positive comments.",
		data: data,
		partials: {
			content: 'software_projects',
		}
	});

});

module.exports = router;
