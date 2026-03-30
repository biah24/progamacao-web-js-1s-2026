// Carrega Framework express
const express = require(`express`);

const calculadora = require(`./calculadora`);
//Cria um app usando a funcao express()
const app     = express();
//Define porta da aplicação
const PORT = 8080;
//Cria um array para armazenar respostas ao usuario
const LOG = [];

//Iniciar aplicação na porta definida
app.listen(PORT, ()=>{
    console.log(`app rodando na porta ` + PORT);
});

app.get(`/`, function (req, res){
    res.send("<h1>Olá, mundo!</h1> <p> Estou na web...</p>");
});
app.get(`/bem-vindo`, function (req, res){
    res.send("<h1>Bem-vindo ao desenvolvimento WEB!</h1>");
});
// URL com parametro
app.get(`/ola/:nome`, function (req, res){
    res.send(`Olá, ${req.params.nome}!`);
});

//URL multiplos parametros
/*app.get(`/calculadora/somar/:a/:b`, function (req, res){
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calculadora.somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
});*/
//Outro modelo de somar sem o perseINT
//URL multiplos parametros
app.get(`/calculadora/somar/:a/:b`, function (req, res){
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let resultado = calculadora.somar(a, b);
    let string_resultado = `<h1>${a} - ${b} = ${resultado}<h1>`;
    LOG.push(string_resultado)
    res.send(string_resultado);
});
app.get(`/calculadora/log`, function (req, res){
    resultado = "";
    LOG.forEach(log => {
        resultado += log;
    });
    res.send(resultado);
});

app.get(`/calculadora/subtrair/:a/:b`, function (req, res){
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calculadora.subtrair(a, b);
    res.send(`${a} - ${b} = ${resultado}`);
});

app.get(`/calculadora/multiplicar/:a/:b`, function (req, res){
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calculadora.multiplicar(a, b);
    res.send(`${a} * ${b} = ${resultado}`);
});

app.get(`/calculadora/dividir/:a/:b`, function (req, res){
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calculadora.dividir(a, b);
    res.send(`${a} / ${b} = ${resultado}`);
});
//URL fixa
app.get(`/ola/joao`, function (req, res){
    res.send(`Olá, João`);
});

