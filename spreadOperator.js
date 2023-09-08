// ANCHOR -->operador spread para objetos y arreglos

let usuario = {
  mombre: 'pepito',
  email: 'pepito@gmail.com',
};

let usuarioConConId = {
  id: 2,
  ...usuario,
};

console.log(usuarioConConId);
console.log(usuario);

// ANCHOR -> spreadOperator de array

let numeros = [1, 2, 3];

let numerosNuevos = [...numeros];

numerosNuevos.push(4);

console.log(numeros);
console.log(numerosNuevos);
