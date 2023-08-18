const db = require('../lib/db');

function create(name) {
  const newGeneration = {
    name,
    
  };
  const data = db.getData();
  data.generations.push(newGeneration);
  db.updateData(data);
}

function remove(name) {
  const data = db.getData();
  const newGenerationsList = data.generations.filter(generations => generations.name !== name);
  data.generations = newGenerationsList;
  db.updateData(data);
}

function getAll() {
  const data = db.getData();
  return data.generations;
}

module.exports = {
  create,
  remove,
  getAll
};