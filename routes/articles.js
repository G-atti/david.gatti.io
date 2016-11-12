let express = require('express');

let router = express.Router();

//
//	Data
//
let obj = {
	text: ["I enjoy thinking through complex problems, and when I feel I've arrived at a meaningful conclusion or solution, I write it down."],
	list: [
		{
			text: "How to Become a Better Manager",
			url: "https://medium.com/@davidgatti/how-to-become-a-better-manager-1031d4749c70"
		},
		{
			text: "How to Create a Developer Community",
			url: "https://medium.com/@davidgatti/how-to-create-a-developer-community-9106c8a22f93"
		},
		{
			text: "How to Talk with Haters",
			url: "https://medium.com/@davidgatti/how-to-talk-with-haters-1918e70bee86"
		},
		{
			text: "What is a Community",
			url: "https://medium.com/@davidgatti/what-is-a-community-912cd299f038"
		}
	]
};

router.get('/', function(req, res, next) {

	res.json(obj);

});

module.exports = router;
