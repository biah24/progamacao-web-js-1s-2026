//Strings

let nome = "João"; //let permite que o valor da variavel seja alterado
const sobrenome = 'Santos';//const não permite alteração do valor
nome = 'João'; //aparece no final
let templateString = `O meu nome é ${nome} ${sobrenome}`;

console.log(templateString);

//number - não diferencia por poonto flutuante
let A = 2;
let B = 5.56;
let C = -3.14;
const PI = 3.14;

console.log(typeof A);
console.log(typeof C);


//boolean
let veradeiro = true;
let falso = false;
console.log(typeof verdadeiro);

//Operadore Lógicos 

let E = veradeiro && falso;
let Ou = veradeiro || falso;
console.log(E);
console.log(Ou);


let maior_que = B > A; //Outros: >=, <, <=, ++, !=
console.log(`${B}>${A}=${maior_que}`);

//Arrays
let numeros = [1, 3.14, -7, 99, 505.67];
console.log(numeros);
console.log(`numeros[0]=${numeros[0]}`); //Usando índice para acessar
console.log(`numeros[3]=${numeros[3]}`); //Começa no 0
console.log(typeof numeros);

//Object - um tipo de dado onde vou ter uma coleção de atributos e valores. 
//ex: cadastro de uma pessoa, onde tem varias informações(atributors)
// Podem ser compostos por atributos  de todos os tipos
let pessoa ={
    nome: "João",
    cpf: 123,
    telefone: 61999999999    
}
console.log(pessoa);
console.log(`pessoa.nome = ${pessoa.nome}`);
