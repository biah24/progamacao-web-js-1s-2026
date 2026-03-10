// Funcion - bloco de código que pode ser acionado 
// DRY - Don´t repeat yourself
function imprimirOlaMundo(){
    console.log('Olá, Mundo!');
}

imprimirOlaMundo(); //chamada de função
//com parametros, quando precisam passar os valores
function somar(A, B){
    let soma = A + B;
    console.log(`${A} + ${B} = ${soma}`);
}

somar(2, 5);
somar(3, 1);
somar(3.14, 0);

// Estruturas de repetição
let i;
for(let i = 0; i <= 10; i++){
    console.log(i);
}

console.log(i);

i = 0;
while(i<=5){
    console.log(i);
    i++;

}

//Estrutura condicionla

let idade = 18;
if(idade >= 18){
    console.log(`${idade} anos é maior de idade.`);
}
else{
    console.log(`${idade} anos não é maior de idade.`);
}