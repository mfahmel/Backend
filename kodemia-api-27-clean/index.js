// levantar el servidor
// iniciar la aplicacion

const server = require('./src/server')
const port = 3003
const db = require('./src/lib/db')

//revizar si existe el archivo db.json
db.createIfNotExists()

server.listen(port, () => {
    console.log('server is listening on port: ', port)
}
)

