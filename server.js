var server = require('express');
var app = server();
var port = process.env.PORT || 8080;

app.get('/whoami', function(req, res) {
  var ipaddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

  res.send({
    ip: ipaddress,
    language: req.headers['accept-language'].split(',')[0],
    OS: req.headers['user-agent'].split(') ')[0].split(' (')[1]
  });
});

app.listen(port, function(){
  console.log("Listening on port: " + port);
});