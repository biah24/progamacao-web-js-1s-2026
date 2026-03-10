
function verificarParidade(n) {    
  return n % 2 === 0;
}

function apresentaMensagemParidade(n) {
if (verificarParidade(n)){
    console.log(`${n} é par`);
  } else {
    console.log(`${n} é ímpar`);
  }
}

apresentaMensagemParidade(1); 
apresentaMensagemParidade(11); 
apresentaMensagemParidade(2);
apresentaMensagemParidade(355489);
apresentaMensagemParidade(1111111110);
apresentaMensagemParidade(9); 
