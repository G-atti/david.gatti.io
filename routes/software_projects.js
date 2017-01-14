let express = require('express');

let router = express.Router();

//
//	Data
//
let data = [
		{
			text: "🚗 convert app.json in to .env",
			url: "https://github.com/davidgatti/envAuto"
		},
		{
			text: "🤖 Display bytes in a human readable format: KB, MB, GB, TB, PB, EB, ZB, YB",
			url: "https://github.com/davidgatti/byteman"
		},
		{
			text: "🙂 My personal default template for a ExpressJS project",
			url: "https://github.com/davidgatti/express-generator-dg"
		},
		{
			text: "📞 A private virtual phone for various account confirmation.",
			url: "https://github.com/davidgatti/bPhone"
		},
		{
			text: "🚩WiMi is a simple solution to constantly stay up to date with your ever changing public IP",
			url: "https://github.com/davidgatti/What-Is-My-IP"
		},
		{
			text: "📶 autoWiFi: Disable or enable the WiFi module, based on the charging status. More then 100,000 installations.",
			url: "https://play.google.com/store/apps/details?id=com.dawidgatti.autoWiFi&hl=en"
		},
		{
			text: "🎫 GetDeviceID: Display the Device ID. I needed this tool for myself.",
			url: "https://play.google.com/store/apps/details?id=pl.gatti.getdeviceid&hl=en"
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
			content: 'software_projects',
		}
	});

});

module.exports = router;
