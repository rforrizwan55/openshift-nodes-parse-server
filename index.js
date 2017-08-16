// Example express application adding the parse-server module to expose Parse
// compatible API routes.
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var parseServerConfig = require('parse-server-config');
var url = require('url');
var path = require('path');

var config = parseServerConfig(__dirname);

// Modify config as necessary before initializing parse server & dashboard

var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.use('/parse', new ParseServer(config.server));
app.use('/parse-dashboard', ParseDashboard(config.dashboard, true));
config.server.serverURL = "http://locahost:"+"+process.env.NODE_PORT+"/parse";
app.listen(process.env.NODE_PORT || url.parse(config.server.serverURL).port,process.env.NODE_IP || 'localhost', function () {
  console.log(`Parse Server running at ${config.server.serverURL}`);
});

// Force https for security. Remove the following block if you want to allow http access
app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] == 'http') {
		res.redirect('https://' + req.headers.host + req.path);
	} else {
		return next();
	}
});


// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('Make sure to star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

// This will enable the Live Query real-time server
// ParseServer.createLiveQueryServer(httpServer);
