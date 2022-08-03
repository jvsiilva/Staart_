//JSON
/*const programador = {
  nome: 'Gabriel',
  nascimento: '04/07/1980',
  casado: true,
  linguagensFavorita: ['JavaScript', 'PHP', 'Python'],
  trabalhoDesde: 1996,
};

console.table(programador);

console.log(programador.nome);*/

//Classes

/*class Programador {
  constructor(
    nome,
    nascimento,
    casado,
    linguagensFavoritas = [],
    trabalhaDesde = null
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.casado = casado;
    this.linguagensFavoritas = linguagensFavoritas;
    this.trabalhaDesde = trabalhaDesde;
  }
}
const jv = new Programador('Jv', '26/01/1996', false, ['Python', 'VBA'], 2014);
const dani = new Programador('Dani', '14/03/1996', false, ['PHP', 'JS'], 2018);

console.table(jv);
console.table(dani);*/

// FIlas

/*class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(item) {
    this.itens.push(item);
  }

  isEmpty() {
    return this.itens.length == 0;
  }
  dequeie() {
    if (this.isEmpty()) return undefined;

    return this.itens.shift();
  }

  front() {
    return this.itens[0];
  }

  rear() {
    return this.itens[this.itens.length - 1];
  }
}

const fila = new Fila();
console.log(fila.isEmpty());
fila.enqueue('Ferrari');
fila.enqueue('Golf');
fila.enqueue('BMW');
fila.enqueue('Mercedes');
fila.dequeie();

console.table(fila);

console.log(fila.isEmpty());

console.log(fila.front());
console.log(fila.rear());*/

//Deques

class Deque {
  constructor() {
    this.itens = [];
  }
  insertFront(item) {
    return this.itens.unshift(item);
  }
  insertLast(item) {
    return this.itens.push(item);
  }
  deleteFront() {
    if (this.isEmpty()) return undefined;
    return this.itens.shift();
  }
  deleteLast() {
    if (this.isEmpty()) return undefined;
    return this.itens.pop();
  }
  isEmpty() {
    return this.itens.length == 0;
  }
  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}

const deque = new Deque();
deque.insertFront('Ferrari');
deque.insertFront('Fusca');
deque.insertFront('Del Rey');
deque.insertLast('Vectra');
deque.insertLast('Kombi');

console.table(deque.itens);

deque.deleteFront();
deque.deleteLast();

console.table(deque.itens);

console.log(deque.front());
console.log(deque.rear());
