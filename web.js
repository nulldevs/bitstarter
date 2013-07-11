var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());
var servedFile = fs.readFileSync("index.html");
var content = Buffer.toString(servedFile);

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});