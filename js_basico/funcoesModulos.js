const operacoes = require(`./operacoes`); //importar função

function imprimirTexto(texto){
}

//Testa a função com diferentes argumentos
imprimirTexto("Olá, WEB!");
imprimirTexto("Vai teia...");


// Funçaõ que imprime o resultado de uma operação dada.
function executarOperacao(operacao, a, b){
    return operacao(a,b);
}


console.log(`3 + 5 = ${executarOperacao(operacoes.soma, 3,5)}`);
console.log(`3 - 5 = ${executarOperacao(operacoes.subtrair, 3,5)}`);


