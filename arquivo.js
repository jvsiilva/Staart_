
let frutas = new Array("Abaxaxi");

console.table(frutas);


// - console.table() -- a visualização em tabela, tipo display 

frutas.push("Banana"); // adiciona ao final 
frutas.push("Maça");

console.table(frutas);

frutas.unshift("Uva"); // adiciona ao inicio

console.table(frutas);

//frutas.pop(); remove ultimo elemento
//frutas.shift();  remove primeiro elemento 
console.table(frutas);

frutas.splice(2,1);  // remove de acordo con indice - segundo elemento = sequencia para remover - 3 elemento = remover por ..