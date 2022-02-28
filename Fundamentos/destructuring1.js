// recurso introduzido no ES6

const pessoa = {
  nome: 'Ana',
  idade: 6,
  endereco: {
    logradouro: 'Rua X',
    numero: 185,
  },
};

const { nome, idade } = pessoa; // const {} representa o operador de desestruturação
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);

/*const {
  conta: { ag, numero },
} = pessoa;
console.log(ag, numero);*/
