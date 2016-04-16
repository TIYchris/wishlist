var express = require('express');
var config = require('config');

var app = express();


app.use(express.static('./dist'));


app.get('*', function(req,res){
  res.sendFile('index.html', {root: __dirname + '/dist'});
});

app.listen(config.get('server.port') || 3000);

console.log('app started');