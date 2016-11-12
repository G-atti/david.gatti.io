let express = require('express');

let router = express.Router();

//
//	Data
//
let obj = {
	text: ["I had fun as an Android developer, and made some very simple apps for the platform. To my surprise, the autoWiFi app I created was installed more than 100,000 times around the world and received numerous positive comments."],
	list: [
		{
			text: "autoWiFi: Disable or enable the WiFi module, based on the charging status. More then 100,000 installations.",
			url: "https://play.google.com/store/apps/details?id=com.dawidgatti.autoWiFi&hl=en"
		},
		{
			text: "dgCam: The compiled code of my open source project mentioned above.",
			url: "https://play.google.com/store/apps/details?id=pl.gatti.dgcam&hl=en"
		},
		{
			text: "GetDeviceID: Display the Device ID. I needed this tool for myself.",
			url: "https://play.google.com/store/apps/details?id=pl.gatti.getdeviceid&hl=en"
		}
	]
};

router.get('/', function(req, res, next) {

	res.json(obj);

});

module.exports = router;
