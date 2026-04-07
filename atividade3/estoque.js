let estoque = []; 

function adicionar(nome, id, qtd){
    let produto = { 
        nome: nome, 
        id: id, 
        qtd: qtd };
    estoque.push(produto);
}

function lista(){
    return estoque; 
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

module.exports = {
    adicionar,
    lista,
    remover,
    editar
};
