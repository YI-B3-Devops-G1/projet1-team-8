'use strict';
var express = require('express');
var port = 3000;

var app = express();

app.get('/',(req,res) => {
    res.json({message : "Hello world", method : req.method});
});

app.listen(port);

console.log('Port :'+ port );