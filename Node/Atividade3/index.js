const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mysql = require("mysql2")
const port = 8081;

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306
})

sql.query("use atividade3")

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/cadastro", (req, res) => {
    res.sendFile(__dirname + "/form.html");
});

app.post("/cadastro", (req, res) => {
    console.log(req.body);
    sql.query("insert into cliente values (?,?,?,?,?,?,?,?,?)", [req.body.cpf, req.body.nome, req.body.cep, req.body.uf, req.body.localidade, req.body.bairro, req.body.numero, req.body.logradouro, req.body.complemento])
    res.redirect("/cadastro")
})

app.listen(8081, () => {
    console.log("localhost:" + port + "/cadastro");
})