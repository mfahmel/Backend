fetch('https://api.kodemia.com').then(respuesta => {
    console.log('respuesta', respuesta)
    return respuesta.json()
}
).then ((respuestaJson) => {
    console.log('respuestaJson', respuestaJson)
});

console.log("holi")


//then se ejecuta al pasar de pendiente a resuelto


