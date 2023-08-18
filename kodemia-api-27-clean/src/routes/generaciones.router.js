const express = require('express');
const generations = require('../usecases/generaciones.usecase')


const router = express.Router();


//listar todos las generaciones
router.get('/', (req, res) => {
    const allGenerations = generations.getAll();

    res.json({
        message: "GET /generaciones",
        generations: allGenerations,
    });
}
);

//crear una generacion

router.post('/', (req, res) => {
    const {name} = req.body;
    generations.create(name);
    res.json({
        
        message: "Generation created",
    });
}
);

//borrar una generacion

router.delete('/:name', (req, res) => {

    const {name} = req.params;
    generations.remove(name);
    res.json({
        message: "Generation deleted",
    });
}
);



module.exports = router;