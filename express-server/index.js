const express = require('express');

const server = express();

server.use(express.json());

let koders = [];

//listar koders
server.get('/koders', (request, response) => {
    response.json(koders);
});

//agregar koders

server.post('/koders', (request, response) => {
 koders.push(request.body);

 response.json({ message: 'koder added', koders });
});

server.delete('/koders/:name', (request, response) => {
    const koderExists = koders.find((koder) => {
        return koder.name === request.params.name;
    });
    if (!koderExists) {
        response.status(404);
        response.json({ message: 'koder not found' });
        return;
    }
    koders = koders.filter((koder) => {
        return koder.name !== request.params.name;
    });

    response.json({ message: 'koder deleted', koders });
});






server.listen(8080, () => {
    console.log('Server listening on port 8080');
} );



//get /hola

// server.get("/hola", (request, response) => {
//   response.json({ message: "Hola desde express con get" });
// }
// );


// server.get('/hola', (request, response) => {
//     response.end('Hola desde express');
// }
// );

// server.post('/hola', (request, response) => {
//   response.json({ message: 'Hola desde express con post' });
// });

// server.get("/hola/:nombre/saludo:tipo", (request, response) => {
//     const nombre = request.params.nombre;
//     const tipo = request.params.tipo;
//     let saludo = "Hola";

//     if (tipo === "formal") {
//         saludo = "Buenos tardes"
//     }

//     response.json({ message: `${saludo} ${nombre}` });
//     }
// );



//     server.get('/', (request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('GET DESDE LA RAIZ');
//     });

//     server.get("/hola/:nombre", (request, response) => {
//         response.json({ message: `Hola ${request.params.nombre}` });
//         }   
//     );
    
        
        




