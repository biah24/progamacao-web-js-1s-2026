// 1. Criar o array (igual ao "const produtos" do prof)
let estoque = []; 

function adicionar(nome, id, qtd){
    // Simplifiquei para focar no essencial
    let produto = { 
        nome: nome, 
        id: id, 
        qtd: qtd };
    estoque.push(produto);
}

function lista(){
    return estoque; // O index.js trata de mostrar
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

// 2. EXPORTAR (Igual ao do prof, mas com os teus nomes)
module.exports = {
    adicionar,
    lista,
    remover,
    editar
};
