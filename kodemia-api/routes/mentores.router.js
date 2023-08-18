const express = require('express')

const router = express.Router()

router.use((request, response, next) => {
    console.log('Middleware de mentores');
    next();
});




//GET /mentores
router.get('/', (request, response) => {
    response.json({
        message: 'GET Mentores'
    });
}
);

module.exports = router;