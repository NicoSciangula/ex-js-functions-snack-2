const somma = (a, b) => a + b;
const moltiplicazione = (a, b) => a * b;

function eseguiFunzione(numA, numB, operazione) {
  return operazione(numA, numB);
}

console.log(eseguiFunzione(3, 5, somma));

console.log(eseguiFunzione(6, 7, moltiplicazione));
