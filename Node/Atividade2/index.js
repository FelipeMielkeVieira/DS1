const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/dadosPessoais.html");
})

app.get("/tamanho", (req, res) => {
    res.sendFile(__dirname + "/html/tamanho.html");
})

app.get("/sabores", (req, res) => {
    res.sendFile(__dirname + "/html/sabores.html");
})

app.get("/adicionais", (req, res) => {
    res.sendFile(__dirname + "/html/adicionais.html");
})

app.get("/entrega", (req, res) => {
    res.sendFile(__dirname + "/html/entrega.html");
})

app.get("/confirma", (req, res) => {
    res.sendFile(__dirname + "/html/confirma.html");
})

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
})