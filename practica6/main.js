const fs = require('fs');
const prompt = require('prompt-sync')();

const kodersDb = 'koders.json';

function loadKoders() {
  try {
    const data = fs.readFileSync(kodersDb, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveKoders(koders) {
  fs.writeFileSync(kodersDb, JSON.stringify(koders, null, 2), 'utf8');
}

function addKoder(koders) {
  const name = prompt('Ingresa el nombre del koder: ');
  const newKoder = { name };
  koders.push(newKoder);
  saveKoders(koders);
  console.log(`Koder "${name}" agregado.`);
}

function listKoders(koders) {
  console.log('Lista de Koders:');
  koders.forEach((koder, index) => {
    console.log(`${index + 1}. ${koder.name}`);
  });
}

function removeKoder(koders) {
  listKoders(koders);
  const indexToRemove = parseInt(prompt('Ingrese el número del koder que desea eliminar: '), 10) - 1;
  
  if (indexToRemove >= 0 && indexToRemove < koders.length) {
    const removedKoder = koders.splice(indexToRemove, 1)[0];
    saveKoders(koders);
    console.log(`Koder "${removedKoder.name}" eliminado.`);
  } else {
    console.log('Prueba otra vez, ese número no existe.');
  }
}

function resetKoders() {
  fs.writeFileSync(kodersDb, '[]', 'utf8');
  console.log('Todos los Koders fueron eliminados.');
}

function main() {
  const koders = loadKoders();

  while (true) {
    const action = prompt('¿Qué quieres hacer? Añadir Koder(add), Listar los Koders(ls), Borrar un Koder(rm), Borrarlos a todos(reset), Salir(exit) : ');

    if (action === 'add') {
      addKoder(koders);
    } else if (action === 'ls') {
      listKoders(koders);
    } else if (action === 'rm') {
      removeKoder(koders);
    } else if (action === 'reset') {
      resetKoders();
    } else if (action === 'exit') {
      break;
    } else {
      console.log('Prueba otra vez.');
    }
  }
}

main();
