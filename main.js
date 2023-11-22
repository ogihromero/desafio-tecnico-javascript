function somaDiv3ou5(numero) {
  let total = 0;
  for (let index = 1; index < numero; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      total += index;
    }
  }
  return total;
}

const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Digite um número positivo: ", (numero) => {
  console.log(somaDiv3ou5(numero));
  rl.close();
});
