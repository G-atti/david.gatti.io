let express = require('express');

let router = express.Router();

//
//	Data
//
let obj = {
	text: ["I like to share my experience and point of view also in voice format."],
	list: [
		{
			text: "Episode 55: Talking about Developer Communities with Bryan Hogan.",
			url: "http://nodogmapodcast.bryanhogan.net/55-david-gatti-developer-communities/"
		},
		{
			text: "Episode 36: How to pick a programming language to learn for new developers - Part 2.",
			url: "http://mentoringdevelopers.com/episode-36-how-to-pick-a-programming-language-to-learn-for-new-developers-part-2/"
		},
		{
			text: "Episode 33: Panel Discussion on building a great team.",
			url: "http://mentoringdevelopers.com/episode33"
		},
		{
			text: "Coding 101, Twit.tv: Having a chat with Padre Robert about my history and experience in the field.",
			url: "https://twit.tv/shows/coding-101/episodes/70"
		},
		{
			text: "Coding 101, Twit.tv: Having a chat with Padre Robert about my history and experience in the field.",
			url: "https://twit.tv/shows/coding-101/episodes/70"
		},
		{
			text: ".NET Rocks!: Talking about NodeJS, and explaining some of its hidden features.",
			url: "http://mentoringdevelopers.com/episode-31-panel-discussion-on-choosing-the-right-programming-language-to-learn/"
		},
		{
			text: "FLOSS WEEKLY: Sadly I believe this was my worst interview to date. I think we all were out of sync and expecting something different from each other. Which made this episode super strange. But now it lives on the Internet, and I can only embrace it :)",
			url: "https://twit.tv/shows/floss-weekly/episodes/386?autostart=false"
		}
	]
};

router.get('/', function(req, res, next) {

	res.json(obj);

});

module.exports = router;
