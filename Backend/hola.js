/*console.log("Hola mundo")
const nombre = "Max";*/
console.log(`Hola ${process.argv[2]}`);  

console.log(process.argv)

const nombres = process.argv.slice(2);

nombres.forEach((nombre) => {
    console.log(`hola ${nombre}`);
});

    


/*no tenemos window ni document, pero si tenemos globalThis */

