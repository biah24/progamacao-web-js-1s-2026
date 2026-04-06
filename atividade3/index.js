const express = require('express');

const estoque = require('./estoque');

const PORT = 8080;

const app = express();

//const LOG = [];

app.listen = (PORT, ()=>{
    console.log('app rodando na porta ') + PORT;
});

app.get('/', function(req, res){
    res.send('<h1>Olá!<h1>');
});

app.get('/estoque/adicionar/:nome/:id/:qtd', function(req, res){
    let nome = req.params.nome;
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.adicionar(nome, id, qtd);
    res.send('Produto adicionado com sucesso!');
});

app.get('/estoque/lista', function(req, res){
    listarProdutos = estoque.lista();
    res.send('Lista de Produtos: ' + listarProdutos);
});

app.get('/estoque/remover/:id', function(req, res){
    let id = req.params.id;
    estoque.remover(id);
    res.send('Produto removido com sucesso!');

});

app.get('/estoque/editar/:id/:qtd', function(req, res){
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editar(id, qtd);
    res.send("Produto editado com sucesso!");

});

