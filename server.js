var express = require('express');

var app = express();
var fs = require('fs');
app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use('/static', express.static(__dirname + '/public'));

var userAPI = express.Router();
userAPI.get('/', function(req, res) {
	res.render("index", {
		title: "Pug Demo",
		username: "Jerry"
	});
});
userAPI.get('/start', function(req, res) {
	res.render("start");
});
userAPI.get('/forest', function(req, res) {
	res.render("forest");
});
userAPI.get('/creature', function(req, res) {
	var file = __dirname + '/data/creature.json';
	var json = fs.readFileSync(file, 'utf8');
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	res.end(json);
});

app.use('/', userAPI);
app.listen(3000);
console.log('Server start....');