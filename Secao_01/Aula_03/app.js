const express = require("express");

const app = express();

app.get("/", function (req, res){
    res.send("Gerenciador Financiero");
});

app.get("/contato", function(req, res){
    res.send("Página de Contato Teste");
});

app.listen(8080);