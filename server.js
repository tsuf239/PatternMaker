
var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname));
app.get('/', function(req,res) {
//   res.type('text/plain');
  res.sendFile('pictureMaker.html', {root: __dirname});
});

app.listen(app.get('port'), ()=> {
  console.log('up and runing on port '+ app.get('port'));
})
