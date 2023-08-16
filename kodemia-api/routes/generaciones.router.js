const express = require('express')

const router = express.Router()

//GET /generaciones
router.get('/', (request, response) => {
    response.json({
        message: 'GET generaciones'
    });
}
);

module.exports = router;