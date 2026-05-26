
const Usuario = require('../models/usuarioModel');

function getloginView(req, res){
    res.render('login.html');
}

function getCadastroView(req, res){
    let erro = req.query.erro;
    res.render('cadastro.html', {erro});
}

function postCadastrarUsuario(req, res){
    let dados_usuario = req.body = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
    }

    Usuario.create(dados_usuario).then(()=>{ //ver se a transiçãodeu certo
        res.redirect('/login');
    }).catch((err)=>{
        res.redirect('/cadastrar_usuario?erro=1');
    })
}
function postLogin(req, res){
    dados_login = {
        email: res.body.email,
        senha: res.body.senha
    }

    let usuario = Usuario.findOne({ //ADICIONAR AWAIT
        where: {
            email: dados_login.email,
            senha: dados_login.senha
        }
    });

    if(usuario != null){
        console.log('USUÁRIO AUTENTICADO')
        req.session.autorizado = true; //se tiver true, ele se utenticou
        req.sesion.usuario.nome = usuario.nome;
        req.session.usuario.email = usuario.email;
        res.redirect('/'); //de volta pra página raiza
    }
    else{
        console.log('USUÁRIO NÃO AUTENTICADO')
        res.redirect('/login?erro=1')
    }
}
function verificarAutenticacao(req, res, next){
    if(req.session.autorizado){
        //autorizado
        console.log("Usuário autorizado");
        next();
    }
    else{
        //não autorizado
        console.log("Usuário não autorizado");
        res.redirect('/login');
    }
}
    
module.exports = {
    getloginView,
    getCadastroView,
    postCadastrarUsuario,
    postLogin,
    verificarAutenticacao
}
