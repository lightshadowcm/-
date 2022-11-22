const express = require('express');

const server  = express();
server.get ('/',function(req,res){
    res.send("<h1> hola con express </h1>");
    res.end();
})
server.listen(3000,function(){
    console.log('Servidor corriendo en optimas condiciones puerto 3000');
});