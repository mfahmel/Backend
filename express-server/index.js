const express = require('express');
const server = express();
const port = 3000;

let koders = [];

//PARA PETICIONES
//! ACCEDE AL BODY
server.use(express.json());

server.get('/koders', (rq, rs) => rs.json(koders));

server.post('/koders', (rq, rs) => {
  /* koders.push({ name: rq.params.name }); */
  koders.push(rq.body);

  rs.json({ message: 'Koder agregado correctamente', koders: koders });
});

server.delete('/koders/:name', (rq, rs) => {
  const validate = koders.find(({ name }) => name === rq.params.name);

  validate || rs.status(404).json({ message: 'Ese koder no existe...' });

  const newkoders = koders.filter(({ name }) => name !== rq.params.name);
  koders = newkoders;
  rs.json({ message: 'Koder eliminado correctamente', koders: koders });
});

/* server.get('/hola', (req, res) => {
  res.type('html').send('<h1>Hola</h1>');
});

server.post('/hola', (req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain',
//   });
//   res.end('HOLA DESDE EXPRESS CON POST');
  res.status(201).json({ message: 'hola desde post' });
});

server.post('/hola/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `¡Hola, ${name}!` });
}); */

server.listen(port, () =>
  console.log(`Example server listening on port ${port}!`)
);