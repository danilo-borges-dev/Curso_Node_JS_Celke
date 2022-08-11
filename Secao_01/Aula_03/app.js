const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html")
});

app.get("/contato", function (req, res){
    res.sendFile(__dirname + "/src/pagina-contato.html")
});

app.listen(8080);