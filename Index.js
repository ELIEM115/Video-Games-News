const express = require('express');
const path = require("path");
const app = express();

app.listen(3000, function(){
    console.log('Servidor http corriendo en el puerto 3000');

});

app.get('/', function(req,res){
   // res.send('Hola estas en la pagina principl');
    res.sendFile(path.join(__dirname + "/index.html"));
});