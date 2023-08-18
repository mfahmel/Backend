const express = require('express');
const koders = require('../usecases/koders.usecase')


const router = express.Router();


//listar todos los koders
router.get('/', (req, res) => {
    const allKoders = koders.getAll();

    res.json({
        message: "GET /koders",
        koders: allKoders,
    });
}
);

//crear un koder

router.post('/', (req, res) => {
    const {name, email, program, generation} = req.body;
    koders.create(name, email, program, generation);
    res.json({
        
        message: "Koder created",
    });
}
);

//borrar un koder

router.delete('/:name', (req, res) => {

    const {name} = req.params;
    koders.remove(name);
    res.json({
        message: "Koder deleted",
    });
}
);



module.exports = router;