// ANCHOR -->Condicional ternario y operador and (&&)

let rolUsuario = 'comprador';

// no se puede usar en react
// if (rolUsuario === 'vendedor') {
//   console.log('Tu stock e de 10 productos');
// } else {
//   console.log(`Lo siento no puedo brindarte esa info`);
// }

// simulando un if
let mensaje2 = rolUsuario === 'vendedor' && 'Tu stock es de 10 productos';

// simulando un if/else
let mensaje =
  rolUsuario === 'vendedor'
    ? 'Tu stock es de 10 productos'
    : 'Lo siento no puedo brindarte esa info';

console.log(mensaje2);
