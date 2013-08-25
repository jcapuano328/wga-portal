var express = require('express'),
	ejs = require('ejs-locals'),
    path = require('path'),
	router = require('./lib/router');
 
var app = express();
app.use(express.logger());

// Configuration

app.configure(function(){
  app.use(express.favicon(path.join(__dirname, 'app/images/favicon.ico'))); 
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  //app.set('view engine', 'ejs');
  app.set('view engine', 'html');
  app.engine('html', ejs);//.renderFile);   
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);  
});

router.register(app, {path: __dirname + '/routes'});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
