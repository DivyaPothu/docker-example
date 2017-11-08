const http=require('http');
var express = require('express');
var app  = require('express')();// Express App include

var port = process.env.PORT || 8086;
const server=http.createServer((req,res)=>{
	const data={
		data:'hello-world',
		hostname:require('os').hostname()
	};
	res.writeHead(200,{'Content-Type':'application/json'});
res.end(JSON.stringify(data));
});
   server.listen(port);
console.log('Magic happens on port ' + port);