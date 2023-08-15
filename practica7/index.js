const fs = require('node:fs');
const express = require('express');
const server = express();
const port = 3001;

if (!fs.existsSync('koders.json')) fs.writeFileSync('koders.json', '[]', 'utf-8');

let koders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

const updateKoders = () => fs.writeFileSync('koders.json', JSON.stringify(koders), 'utf-8');

server.use(express.json());

server.get('/koders', (req, res) => res.json(koders));

server.post('/koders', (req, res) => {
  koders.push(req.body);
  updateKoders();
  res.json({ message: 'Koder agregado' });
});

server.delete('/koders/:name', (req, res) => {
  const koderName = req.params.name;
  const initialKodersLength = koders.length;
  koders = koders.filter(({ name }) => name !== koderName);
  if (koders.length < initialKodersLength) {
    updateKoders();
    res.json({ message: `Koder ${koderName} eliminado` });
  } else {
    res.status(404).json({ message: `Koder ${koderName} no encontrado` });
  }
});

server.delete('/koders', (req, res) => {
  koders = [];
  updateKoders();
  res.json({ message: 'Todos los koders han sido eliminados' });
});

server.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}!`));
