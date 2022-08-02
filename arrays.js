// map -> execulta um calculo em cima de uma lista
/*const aPagarEmReais = [10, 20, 40, 100];
const cotacaoDolar = 5;
const aPagaremDolar = aPagarEmReais.map((valor) => valor * cotacaoDolar);

console.table(aPagarEmReais);
console.table(aPagaremDolar);*/

// filter  -> execulta um filtro em cima de uma lista
/*const aPagarEmReais = [10, 20, 40, 100];
const aPagarJv = aPagarEmReais.filter((valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagarJv);*/

// find/findindex  -> execulta uma procura e para quando encontrar
/*const aPagarEmReais = [10, 20, 40, 100];
const aPagarJv = aPagarEmReais.find((valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagarJv);*/

// reduce  -> execulta um calculo incrementando uma lista com ou sem valor inicial
/*const aPagarEmReais = [10, 20, 30, 100];
const totalAPagar = aPagarEmReais.reduce(
  (acumulador, valor) => acumulador + valor,
  0
);
console.table(aPagarEmReais);
console.table(totalAPagar);*/

// every ->  retorna true ou false se todas os itens da lista atender a condição
/*const aPagarEmReais = [10, 20, 30, 100];
const contasBaixas = aPagarEmReais.every((valor) => valor < 10);

console.table(aPagarEmReais);
console.table(contasBaixas);*/

// every -> retorna true ou false se todas os itens da lista atender a condição
/*const aPagarEmReais = [500, 20, 30, 100];
const temContaAlta = aPagarEmReais.every((valor) => valor > 100);

console.table(aPagarEmReais);
console.table(temContaAlta);*/

// some ->  retorna true ou false se algum item da lista atender a condição
/*const aPagarEmReais = [500, 20, 30, 100];
const temContaAlta = aPagarEmReais.some((valor) => valor > 100);

console.table(aPagarEmReais);
console.table(temContaAlta);*/

// concat -> adiciona uma lista no final de outra
/*const contasDaVanessa = [10, 20, 30, 40];
const contasDoGabriel = [5, 6, 7, 8];
const contasDosCDFs = contasDaVanessa.concat(contasDoGabriel);

console.table(contasDosCDFs);

// fill(x) ->  define uma valor para toda a lista, valor dentro do ()
contasDosCDFs.fill(0);
console.table(contasDosCDFs);*/

/*const clientes = ['Vanessa', 'Gabriel', 'Andreia', 'Juliana', 'Gilberto'];
console.table(clientes);
clientes.sort();
console.table(clientes);*/

/*const numeros = [10, 5, 1000, 50000, 1.99];
console.table(numeros);
numeros.sort();
console.table(numeros);*/

/*const numeros = [10, 5, 1000, 50000, 1.99];
console.table(numeros);
numeros.sort((a, b) => a - b);
console.table(numeros);*/

const clientes = [
  ['Vanessa', 4],
  ['Gabriel', 1],
  ['Andreia', 3],
  ['Juliana', 5],
  ['Gilberto', 2],
];
console.table(clientes);
clientes.sort((a, b) => b[1] - a[1]);
console.table(clientes);
