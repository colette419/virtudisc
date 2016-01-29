var express = require('express');
var app = express();

app.use(express.static('public', {
    index: 'landing_page.html'
}));

var server = app.listen(3000, function () {
	console.log('Example app listening on port: ' + server.address().port);
});