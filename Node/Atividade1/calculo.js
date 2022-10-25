const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const adicao = require("./operacoes/adicao").adicao;
const areaTriangulo = require("./operacoes/areaTriangulo").areaTriangulo;
const bhaskara = require("./operacoes/bhaskara").bhaskara;
const divisao = require("./operacoes/divisao").divisao;
const multiplicacao = require("./operacoes/multiplicacao").multiplicacao;
const perimetroCirculo = require("./operacoes/perimetroCirculo").perimetroCirculo;
const pitagoras = require("./operacoes/pitagoras").pitagoras;
const subtracao = require("./operacoes/subtracao").subtracao;
const volumeCubo = require("./operacoes/volumeCubo").volumeCubo;
const volumeCilindro = require("./operacoes/volumeCilindro").volumeCilindro;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Programa Finalizado!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  console.log("Adição: " + adicao(4, 5));
  console.log("Subtração: " + subtracao(7, 3));
  console.log("Multiplicação: " + multiplicacao(3, 4));
  console.log("Divisão: " + divisao(8, 2));
  console.log("Bháskara: " + bhaskara(2, -5, -7));
  console.log("Pitágoras: " + pitagoras(3, 4));
  console.log("Área de um Triângulo: " + areaTriangulo(6, 4));
  console.log("Perímetro de um Círculo: " + perimetroCirculo(6));
  console.log("Volume de um Cubo: " + volumeCubo(4));
  console.log("Volume de um Cilindro: " + volumeCilindro(4, 6));
});