// ANCHOR -->DESESCTRUCTURACIÓN OBJETOS Y ARREGLOS

let mascota = {
  nombre: 'Jack',
  edad: 2,
  raza: 'callejero',
  datos: {
    habitos: 'gloton',
    comportamiento: 'agresivo',
  },
};

// aplicando desestructuración, y desestructuración anidada
const {
  nombre,
  edad,
  raza,
  datos: { comportamiento },
} = mascota;

let validarEdad = edad >= 1 ? 'edad adulta' : 'edad temprana';

console.log(nombre);
console.log(edad);
console.log(raza);
console.log(comportamiento);
console.log(validarEdad);

//ANCHOR ARRAY

const arrayMascotas = ['Jack', 'Rojo', 'Lola', 'Lorenzo', 'Misifus', 'bako'];

const [, , , , mascota1] = arrayMascotas;

console.log(mascota1);
