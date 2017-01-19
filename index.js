var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/whoami', function(req, res) {
	console.log(req.headers);

	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

	res.json({
		'ip': ip,
		'language': req.headers['accept-language'],
		'client': req.headers['user-agent']
	});
});


app.listen(port, function() {
	console.log('Server listening on Port ' + port);
});