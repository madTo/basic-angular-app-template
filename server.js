var  express = require('express'),
	 app	 = express();

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/www/index.html');
});

// Libraries
app.use('/lib', express.static(__dirname+'/node_modules'));
// Custom files
app.use('/assets', express.static(__dirname+'/www/assets'));
// Html Views & Partials
app.use('/templates', express.static(__dirname+'/www/templates'));

app.listen(3000, function(){
	console.log('BasicApp Client on:3000');
});
