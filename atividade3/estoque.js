function adicionar(nome, id, qtd){
    nome = req.params.nome;
    id = req.params.id;
    qtd = req.params.qtd;

    return estoque.adicionar(nome, id, qtd);
}

function listar(){
    for (let i = 0; i < estoque.length; i++){
        res.send(estoque[i]);
    }
}

function remover(id){
    for (let r = 0; r < estoque.length; r++){
        if (estoque[r].id == id){
            estoque.splice(r, 1);
        }
    }
}

function editar(id, qtd){
    for(let e = 0; e < estoque.length; e++){
        if(estoque[e].id == id){
            estoque[e].qtd = qtd;
        }
    }
}


