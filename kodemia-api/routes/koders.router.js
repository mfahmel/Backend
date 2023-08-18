const express = require('express')

const router = express.Router()

//GET /koders
router.use((request, response, next) => {
    console.log('middleware de koders');
    next();
});
                
router.get(
    "/",
    (request,response,next) => {
        console.log('middleware GET /koders');
        next();
    },
    (request, response) => {
        response.json({
            message: 'GET Koders'
        });
    }
);



module.exports = router;