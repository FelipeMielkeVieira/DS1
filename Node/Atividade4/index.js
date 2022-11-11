const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mysql = require("mysql2");
const port = process.env.PORT || 8081;

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'getpizza'
});

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

app.get("/get-sabores", (req, res) => {
    sql.query("select * from sabor", (err, results, fields) => {
        res.json(results);
    });
})

app.get("/get-adicionais", (req, res) => {
    sql.query("select * from adicional", (err, results, fields) => {
        res.json(results);
    });
})

app.post("/endereco", (req, res) => {
    sql.query("insert into endereco values (?,?,?,?,?,?)", [req.body.cep, req.body.email, req.body.numero, req.body.complemento, req.body.cpf, req.body.estado]);
    res.send("");
})

app.post("/cliente", (req, res) => {
    sql.query("insert into cliente values (?,?,?,?,?)", [req.body.cpf, req.body.nome, req.body.email, req.body.telefone, req.body.nascimento]);
    res.send("");
})

app.post("/pedido", (req, res) => {
    sql.query("insert into pedido values (null,?,?,?,?)", [req.body.cpf, req.body.cep, req.body.preco, req.body.data]);
    res.send("");
})

app.listen(port, () => {
    console.log("localhost:" + port);
});