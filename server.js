var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// static content from the "public" directory 
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

// using handlebars
// override the method with POST having - -  **?_method=DELETE**
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Use the require method once everything is set
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Call the database correct port - 3000
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
	console.log('App listening on PORT ', app.get('port'));
});