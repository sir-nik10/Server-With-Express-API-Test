"scripts": {
"start": "node server.js"
    }


"name": "api_test",
"version": "0.0.1",


var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});
var server=app.listen(3000,function() {});