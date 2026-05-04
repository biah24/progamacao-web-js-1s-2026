const express = require('express');
const mustacheExpress = require('mustache-express');
const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("index.html");
});

app.post('/agendamento', (req, res) => {
    let dados_agendamento = req.body;
    let erros = [];

    for (const campo in dados_agendamento) {
        if (campo !== 'observacao' && (!dados_agendamento[campo] || dados_agendamento[campo].trim() === "")) {
            erros.push({mensagem: `O campo ${campo} não pode estar vazio!`});
        }
    }
    if (dados_agendamento.data_consulta && dados_agendamento.hora_consulta) {
        const dataString = `${dados_agendamento.data_consulta}T${dados_agendamento.hora_consulta}`;
        const dataAgendamento = new Date(dataString);
        const dataAtual = new Date();

        if (isNaN(dataAgendamento.getTime())) {
            erros.push({mensagem: "Formato de data ou hora inválido!"});
        } else if (dataAgendamento <= dataAtual) {
            erros.push({mensagem: "A data do agendamento deve ser futura!"});
        }
    }

    if (erros.length > 0) {
        res.render("index.html", {erros, dados_agendamento});
    } else {
        console.log(dados_agendamento);
        res.render('agendamento.html', {dados_agendamento});
    }
});

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
