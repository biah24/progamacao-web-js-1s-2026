// Carrega Framework express
const express = require(`express`);
//Cria um app usando a funcao express()
const app     = express();
//Define porta da aplicação
const PORT = 8080;


app.listen(PORT, ()=>{
    console.log(`app rodando na porta ` + PORT);
});

app.get(`/`, function (req, res){
    res.send("<h1>Olá, mundo!</h1> <p> Estou na web...</p>");
});
app.get(`/bem-vindo`, function (req, res){
    res.send("<h1>Bem-vindo ao desenvolvimento WEB!</h1>");
});

