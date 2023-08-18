const express = require('express');
const kodersRouter = require("./routes/koders.router");
const mentoresRouter = require("./routes/mentores.router");
const generacionesRouter = require("./routes/generaciones.router");

//server
const server = express(); 
const port = 3001; 


server.use(express.json()); 

server.use((request, response, next) => {
    console.log('Middleware de aplicación 2');
    next();
});

server.use((request, response, next) => {
    console.log('Middleware de aplicación');
    next();
}, (request, response, next) => {
    console.log('Middleware de aplicación 3');
    next();
});



server.use("/koders", kodersRouter); 
server.use("/mentores", mentoresRouter); 
server.use("/generaciones", generacionesRouter);


//ENDPOINT

// GET /koders hacer un get a tal ruta

server.get('/', (req, res) => { // Cambiado de 'server' a 'server'
    res.json({ message: 'Kodemia Apiv27' }); // Cambiado de 'response' a 'res'
});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
