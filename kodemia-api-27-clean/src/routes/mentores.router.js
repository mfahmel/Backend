const express = require('express');
const mentors = require('../usecases/mentores.usecase')


const router = express.Router();

router.get('/', (req, res) => {
    const allMentors = mentors.getAll();

    res.json({
        message: "GET /mentores",
        mentores: allMentors,
    });
}
);

//crear un mentor

router.post('/', (req, res) => {
    const {name, email} = req.body;
    mentors.create(name, email);
    res.json({
        
        message: "mentor created",
    });
}
);

//borrar un koder

router.delete('/:name', (req, res) => {

    const {name} = req.params;
    mentors.remove(name);
    res.json({
        message: "mentor deleted",
    });
}
);

module.exports = router;