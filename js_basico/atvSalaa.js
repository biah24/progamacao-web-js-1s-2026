
function calculuarIMC(peso, altura){

    let IMC = peso / (altura * altura);
        if (IMC < 18.5){
            console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC}, IMC.categoria = Abaixo do Peso);
        }else if (IMC < 24.9){
            console.log(`Peso Normal`);
        }else if (IMC < 29.9){
            console.log(`Excesso de Peso`);
        }else if (IMC < 35){
            console.log(`Obesidade`);
        }else{
            console.log(`Obesidade Extrema`);
        }
      console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC}, IMC.categoria = ${resultadoIMC}`);  
}

calculuarIMC(30, 1.70);
