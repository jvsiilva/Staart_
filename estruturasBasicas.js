//------------JSON---------------
/*const programador = {
  nome: 'Gabriel',
  nascimento: '04/07/1980',
  casado: true,
  linguagensFavorita: ['JavaScript', 'PHP', 'Python'],
  trabalhoDesde: 1996,
};

console.table(programador);

console.log(programador.nome);*/

//--------Classes------------------

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

//------------------FIlas----------------

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

//----------------Deques---------------------

/*class Deque {
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
console.log(deque.rear());*/

//------LISTA ENCADEADA SIMPLEES ------

class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = undefined;
  }
}
class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }

  //insere um elemento (nó) no inicio da lista
  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }
    return elemento;
  }
  //Insere um elemento(nó) no fim da lista
  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }

      atual.proximo = novo;
    }
    return elemento;
  }

  //Insere um elemento(nó) na posição indicada
  insertAt(elemento, posicao) {
    const novo = new No(elemento);
    if (posicao == 0) {
      this.insertFirst(elemento);
    } else {
      const anterior = this.searchAt(posicao - 1);
      const atual = anterior.proximo;
      novo.proximo = atual;
    }
    return elemento;
  }

  //Remove um elemento(nó) que está em uma posição indicada
  deleteAt(posicao) {
    let atual = this.head;
    if (posicao == 0) {
      this.head = atual.proximo;
    } else {
      let anterior = atual;
      for (let i = 0; i < posicao; i++) {
        anterior = atual;
        atual = atual.proximo;
      }
      anterior.proximo = atual.proximo;
    }
    return posicao;
  }

  //encontra uma elemento(nó) de acordo com a posição indicada
  searchAt(posicao) {
    let atual = this.head;
    for (let i = 0; i < posicao && atual; i++) {
      atual = atual.proximo;
    }

    return atual;
  }

  //percorre todos dos elementos(nós)
  traversal() {
    if (!this.head) {
      return undefined;
    } else {
      let atual = this.head;
      let elementoLista = [];
      while (atual) {
        elementoLista.push(atual.elemento);
        atual = atual.proximo;
      }
      return elementoLista;
    }
  }

  //Retorna a posição de acordo com valor de elemento(nó)
  //indexOf()
}

const trem = new ListaEncadeada();

console.log(trem.insertFirst('Locomotiva'));
console.log(trem.insertLast('Vagão 1'));
console.log(trem.insertLast('Vagão 2'));
console.log(trem.searchAt(2));
console.log(trem.insertFirst('Vagão de Manobra'));
console.log(trem.insertAt('Novo Vagão', 2));
console.table(trem.traversal());

console.log(trem.deleteAt(2));
console.log(trem.deleteAt(0));
