const http = require('http');
http.createServer(function(req,res){
    res.write('<h1>hola mundo pero desde node </h1>');
    res.end;
}).listen(3000);
