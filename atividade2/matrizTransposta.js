let matrizOriginal = [[1, 2], [3, 4], [5, 6]];


let matrizTransposta = [
  [matrizOriginal[0][0], matrizOriginal[1][0], matrizOriginal[2][0]], 
  [matrizOriginal[0][1], matrizOriginal[1][1], matrizOriginal[2][1]]  
];

console.log("Original:");
for (const linha of matrizOriginal) {
  console.log(...linha);
}


console.log("\nTransposta:");
for (const linha of matrizTransposta) {
  console.log(...linha);
}


