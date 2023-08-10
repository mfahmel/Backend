const prompt = require('prompt-sync')();
const arregloNombres = [];

let continuar = true;

while (continuar) {
    const nombre = prompt('Ingresa un nombre (o escribe "no" para parar): ');

    nombre.toLowerCase() === 'no' ? continuar = false : arregloNombres.push(nombre);
}

console.log('Hay', arregloNombres.length, 'nombres en el arreglo');

let nombreMasLargo = arregloNombres[0];
let nombreMasCorto = arregloNombres[0];

for (let i = 1; i < arregloNombres.length; i++) {
    if (arregloNombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = arregloNombres[i];
    }
    
    if (arregloNombres[i].length < nombreMasCorto.length) {
        nombreMasCorto = arregloNombres[i];
    }
}

console.log('El nombre más largo es:', nombreMasLargo);
console.log('El nombre más corto es:', nombreMasCorto);

const nombresRepetidos = [];
const nombresNoRepetidos = {};

for (const nombre of arregloNombres) {
    nombresNoRepetidos[nombre] ? nombresRepetidos.push(nombre) : nombresNoRepetidos[nombre] = true;
}

nombresRepetidos.length > 0 ? console.log('El nombre que se repite es:', nombresRepetidos) : console.log('No hay nombres repetidos.');

process.exit(0);