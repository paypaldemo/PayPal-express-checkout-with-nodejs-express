/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
var app = express.createServer() 
var routes = require('./routes')
var http = require('http')
var path = require('path')



function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

var fs = require('fs');
 
try {
  var configJSON = fs.readFileSync(__dirname + "/config.json");
  var config = JSON.parse(configJSON.toString());
} catch (e) {
  console.error("File config.json not found or is invalid: " + e.message);
  process.exit(1);
}
routes.init(config);
 
app.set('port', config.port || process.env.PORT);
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.favicon());
app.use(express.logger('dev'))
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
 
app.get('/', routes.index);
app.get('/create', routes.create);
app.get('/execute', routes.execute);
app.get('/cancel', routes.cancel);
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


app.get('/', function (req, res) {
  res.render('index',
  { title : 'HomeWorkSite' }
  )
})

