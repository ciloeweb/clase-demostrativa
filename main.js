// Consola
console.log('Hola Mundo, Javascript');

//Variables
let num=10;
let str="texto";
let b=true;
let und=undefined;
let nul=null;

console.log(num);

// Objetos
let persona={
  nombre: "Juana",
  apellido:"Herrera",
  edad:25,
  direccion: {
    calle:"principal",
    ciudad:"Tegucigalpa",
    pais:"Honduras"
  }
}


// Notacion de punto
console.log(persona.nombre);
console.log(persona.direccion);
console.log(persona.direccion.pais)

persona.direccion.zipcode=11101;
console.log(persona.direccion.zipcode);

console.log(persona["nombre"]);


// Operadores
let x = 5;
let y = 2;
let z = x + y;

let resultado = 10 + 5; // 15
resultado += 10; // resultado = resultado + 10 = 25
resultado *= 4; // resultado = resultado * 4 = 100
resultado++; // resultado = resultado + 1
resultado--; // resultado = resultado -1


// Condicionales

const dia = 'viernes';

switch (dia) {
  case 'lunes': // day === 'monday'
    console.log('Preparar agenda');
    break;
  case 'martes':
    console.log('Estudiar');
    break;
  case 'miercoles':
  case 'jueves':
    console.log('Finalizar tareas');
    break;
  case 'viernes':
    console.log(' Examenes');
    break;
  case 'sabado':
  case 'domingo':
    console.log('Fin de semana');
    break;
  default:
    console.log('Opcion no valida');
}

if (day === 'lunes') {
  console.log('Preparar agenda');
} else if (day === 'martes') {
  console.log('Estudiar');
} else if (day === 'miercoles' || day === 'jueves') {
  console.log('Finalizar tareas');
} else if (day === 'viernes') {
  console.log(' Examenes');
} else if (day === 'sábado' || day === 'domingo') {
  console.log('Fin de semana');
} else {
  console.log('Opcion no valida');
}


// Funciones
function primeraFuncion(){
  var a=20;
  console.log(a);
}

const multiplicar = (p1, p2) => {
  return p1 * p2;
}

