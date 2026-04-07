const express = require('express');
const estoque = require('./estoque');
const PORT = 8080;
const app = express();


app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});

app.get('/', (req, res)=>{
    let msg = "<h1>Rotas disponíveis</h1>";
    msg     += "<p>Para cadastrar/adicionar produtos: /estoque/adicionar/:nome/:id/:qtd</p>";
    msg     += "<p>Para listar os produtos: /estoque/lista</p>";
    msg     += "<p>Para remover os produtos: /estoque/remover/:id</p>";
    msg     += "<p>Para editar quantidade dos produtos: /estoque/editar/:id/:qtd</p>";
    res.send(msg);
});


app.get('/estoque/adicionar/:nome/:id/:qtd', function(req, res){
    let nome = req.params.nome;
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.adicionar(nome, id, qtd);
    res.send('Produto adicionado com sucesso!');
});

app.get('/estoque/lista', function(req, res){
    res.send(estoque.lista());
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

