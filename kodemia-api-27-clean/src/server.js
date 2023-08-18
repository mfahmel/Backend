//describir y montar el servidor
//levantar el servidor
const express = require('express');
const kodersRouter = require('./routes/koders.router');
const mentoresRouter = require('./routes/mentores.router');
const generacionesRouter = require('./routes/generaciones.router');




const app = express();

app.use(express.json());

app.use('/koders', kodersRouter);
app.use('/mentores', mentoresRouter);
app.use('/generaciones', generacionesRouter);


app.get('/', (req, res) => {
    res.json({
        message: "API kodemia clean",
    });
});

module.exports = app;

