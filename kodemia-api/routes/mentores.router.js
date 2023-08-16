

const express = require('express')

const router = express.Router()

//GET /mentores
router.get('/', (request, response) => {
    response.json({
        message: 'GET Mentores'
    });
}
);

module.exports = router;