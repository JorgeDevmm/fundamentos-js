// ANCHOR --> Método Map, Filter y Find

// TODO Método Map
let numeros = [2, 4, 5];

let numeros2 = numeros.map((value, indice) => value + indice);
console.log(numeros2);

// TODO Método filter

let productos = [
  {
    nombre: 'telefono',
    precio: 150,
  },
  {
    nombre: 'computadora',
    precio: 200,
  },
  {
    nombre: 'tablet',
    precio: 150,
  },
];

let productosFiltrados = productos.filter((elemento) => elemento.precio <= 150);

console.log(productosFiltrados);

// TODO método find

let productoSeleccionado = productos.find(
  (elemento) => elemento.precio === 150
);

console.log(productoSeleccionado);
