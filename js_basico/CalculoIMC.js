function calcularIMC(peso, altura){
  
    IMC = peso / (altura **2);

    if (IMC < 18.5){
            console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC.toFixed(2)}, IMC.categoria = Abaixo do Peso`);
        }else if (IMC < 24.9){
            console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC.toFixed(2)}, IMC.categoria = Peso Normal`);
        }else if (IMC < 29.9){
            console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC.toFixed(2)}, IMC.categoria = Excesso de Peso`);
        }else if (IMC < 35){
            console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC.toFixed(2)}, IMC.categoria = Obesidade`);
        }else{
            console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC.toFixed(2)}, IMC.categoria = Obesidade Extrema`);
        }

}
calcularIMC(100, 1.70);

