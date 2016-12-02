var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.use('/css',express.static(path.join(__dirname, 'css')));
app.use('/js',express.static(path.join(__dirname, 'js')));
app.use('/lib',express.static(path.join(__dirname, 'lib')));
app.use('/js',express.static(path.join(__dirname, 'js/directives')));
app.use('/views',express.static(path.join(__dirname, 'views')));
app.use('/assets',express.static(path.join(__dirname, 'assets/images')));

app.listen(3005);
console.log("Running at Port 3005");