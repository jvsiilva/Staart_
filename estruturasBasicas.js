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

class Programador {
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
console.table(dani);
