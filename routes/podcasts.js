let express = require('express');

let router = express.Router();

//
//	Data
//
let data = [
		{
			text: "Episode 57: How to Sell Yourself and Find Work",
			url: "http://mentoringdevelopers.com/episode-57-how-to-sell-yourself-and-find-work/",
			icon: "🎙"
		},		{
			text: "Episode 56: Working remotely overseas and loving it",
			url: "http://mentoringdevelopers.com/episode-56-working-remotely-overseas-and-loving-it-with-david-gatti/",
			icon: "🎙"
		},
		{
			text: "Episode 55: Talking about Developer Communities with Bryan Hogan.",
			url: "http://nodogmapodcast.bryanhogan.net/55-david-gatti-developer-communities/",
			icon: "🎙"
		},
		{
			text: "Episode 36: How to pick a programming language to learn for new developers",
			url: "http://mentoringdevelopers.com/episode-36-how-to-pick-a-programming-language-to-learn-for-new-developers-part-2/",
			icon: "🎙"
		},
		{
			text: "Episode 33: Panel Discussion on building a great team.",
			url: "http://mentoringdevelopers.com/episode33",
			icon: "🎙"
		},
		{
			text: "Coding 101, Twit.tv: WILDCARD WITH DAVID GATTI",
			url: "https://twit.tv/shows/coding-101/episodes/70",
			icon: "🎙"
		},
		{
			text: ".NET Rocks!: Talking about NodeJS, and explaining some of its hidden features.",
			url: "http://mentoringdevelopers.com/episode-31-panel-discussion-on-choosing-the-right-programming-language-to-learn/",
			icon: "🎙"
		},
		{
			text: "FLOSS WEEKLY: Sadly I believe this was my worst interview to date. I think we all were out of sync and expecting something different from each other. Which made this episode super strange. But now it lives on the Internet, and I can only embrace it :)",
			url: "https://twit.tv/shows/floss-weekly/episodes/386?autostart=false",
			icon: "🎙"
		}
	];

router.get('/', function(req, res, next) {

	//
	//	->	Render the HTML page
	//
	res.render("_frame", {
		title: "David Gatti // Podcasts",
		description: "I like to share my experience and point of view also in voice format.",
		data: data,
		partials: {
			content: 'podcasts',
		}
	});

});

module.exports = router;
