// !Práctica 7
const fs = require('node:fs');

const express = require('express');
const server = express();
const port = 3000;

if (!fs.existsSync('koders.json')) {
  fs.writeFileSync('koders.json', '[]', { encoding: 'utf-8' });
}

let koders = JSON.parse(fs.readFileSync('koders.json', { encoding: 'utf-8' }));

const updateKoders = (data) => {
  fs.writeFileSync('koders.json', JSON.stringify(data), {
    encoding: 'utf-8',
  });
};

server.use(express.json());

server.get('/koders', (rq, rs) => rs.json(koders));

server.post('/koders', (rq, rs) => {
  koders.push(rq.body);

  updateKoders(koders);

  rs.json({ message: 'Koder agregado correctamente' });
});

server.delete('/koders/:name', (rq, rs) => {
  const validate = koders.find(({ name }) => name === rq.params.name);

  if (!validate) {
    rs.status(404).json({ message: 'Ese koder no existe...' });
    return;
  }

  const newkoders = koders.filter(({ name }) => name !== rq.params.name);
  koders = newkoders;

  updateKoders(koders);

  rs.json({ message: 'Koder eliminado correctamente' });
});

server.delete('/koders', (rq, rs) => {
  koders = [];

  updateKoders(koders);

  rs.json({ message: 'Koders eliminados correctamente' });
});

server.listen(port, () =>
  console.log(`Example server listening on port ${port}!`)
);