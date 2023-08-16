const express = require('express')

const router = express.Router()

//GET /koders
router.get('/', (request, response) => {
    response.json({
        message: 'GET Koders'
    });
}
);

module.exports = router;