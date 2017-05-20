let path = require('path');
let logger = require('morgan');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//
//	Tell NodeJS where to look for views
//
app.set('views', path.join(__dirname, 'views'));

//
//	Load the Hogan HTML engine
//
app.set('view engine', 'hjs');

//
//	Remove the information about what type of framework is the site running on
//
app.disable('x-powered-by');

//
//	Force HTTPS before the client can access anything
//
app.use(force_https);

//
// 	lets wear the heltmet first
//
app.use(helmet());

//
//	Strict-Transport-Security
//
//	Tell the browser, that the next time it connects to the site, it should
//	connect immediately over HTTPS
//
app.use(helmet.hsts({
	maxAge: 15638400,
	includeSubDomains: true,
	force: true
}));

//
//	Make sure the cached data is always validated with the server before
//	it get used.
//
app.use(helmet.noCache());

//
//	Set the custom headers.
//
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'none'"],
		connectSrc: ["'self'", "https://www.google-analytics.com/collect", "https://fullstory.com", "https://r.fullstory.com"],
		fontSrc: ["'self'"],
		frameSrc: ["'self'"],
		imgSrc: ["'self'", "data:", "https://www.google-analytics.com", "https://www.facebook.com"],
		mediaSrc: ["'none'"],
		objectSrc: ["'none'"],
		scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google-analytics.com", "https://connect.facebook.net", "https://fullstory.com"],
		styleSrc: ["'self'", "'unsafe-inline'"]
	}
}));

//
//	Expose the public folder to the world
//
app.use(express.static(path.join(__dirname, 'public')));

//
// HTTP request logger middleware for node.js
//
app.use(logger('dev'));

//
//	Parse all request as regular text, and not JSON objects
//
app.use(bodyParser.json());

//
//	Parse application/x-www-form-urlencoded
//
app.use(bodyParser.urlencoded({ extended: false }));

//////////////////////////////////////////////////////////////////////////////

app.use('/', 					require('./routes/index'));
app.use('/bio', 				require('./routes/bio'));
app.use('/podcasts', 			require('./routes/podcasts'));
app.use('/articles', 			require('./routes/articles'));
app.use('/technical_articles', 	require('./routes/technical_articles'));
app.use('/software_projects', 	require('./routes/software_projects'));
app.use('/hardware_projects', 	require('./routes/hardware_projects'));
app.use('/social_media', 		require('./routes/social_media'));

//////////////////////////////////////////////////////////////////////////////

//
//
//  If nonce of the above routes matches, we create an error to let the
//  user know that the URL accessed doesn't match anything.
//
app.use(function(req, res, next) {

	let err = new Error('Not Found');
		err.status = 404;

	next(err);

});

//
//  Display any error that occurred during the request.
//
app.use(function(err, req, res, next) {

	//
	//	1.	Set the basic information about the error, that is going to be
	//		displayed to user and developers regardless.
	//
	let obj_message = {
		message: err.message
	};

	//
	//	2.	Check if the environment is development, and if it is we
	//		will display the stack-trace
	//
	if(process.env.NODE_ENV == 'development')
	{
		//
		//	1.	Set the variable to show the stack-trace to the developer
		//
		obj_message.error = err;

		//
		//	-> Show the error in the console
		//
		console.error(err);
	}

	//
	//	3.	Display a default status error, or pass the one from
	//		the error message
	//
	res.status(err.status || 500);

	//
	//	->	Show the error as JSON
	//
	res.json(obj_message);

});

//   _    _ ______ _      _____  ______ _____   _____
//  | |  | |  ____| |    |  __ \|  ____|  __ \ / ____|
//  | |__| | |__  | |    | |__) | |__  | |__) | (___
//  |  __  |  __| | |    |  ___/|  __| |  _  / \___ \
//  | |  | | |____| |____| |    | |____| | \ \ ____) |
//  |_|  |_|______|______|_|    |______|_|  \_\_____/
//

//
//	Check if the connection is secure, if not, redirect to a secure one.
//
function force_https(req, res, next)
{
	//
	//	1. 	Redirect only in the production environment
	//
	if(process.env.NODE_ENV == 'production')
	{
		//
		//	1. 	Check what protocol are we using
		//
		if(req.headers['x-forwarded-proto'] !== 'https')
		{
			//
			//	-> 	Redirect the user to the same URL that he requested, but
			//		with HTTPS instead of HTTP
			//
			return res.redirect('https://' + req.get('host') + req.url);
		}
	}

	//
	//	2. 	If the protocol is already HTTPS the, we just keep going.
	//
	next();
}

module.exports = app;
