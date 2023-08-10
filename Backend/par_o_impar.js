/*const par_o_impar = num => {
    if (isNaN(num)) {
        return "No es un número";
    } else if (num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }

};

console.log(par_o_impar(Number(process.argv[2])));

process.exit(0);*/

// así cacho si el argv es un número o no y si es error lo aviso, después cacho si es par o impar y lo imprimo
const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
    console.error("Debes ingresar un número");
    process.exit(1);
}

const esPar = num % 2 === 0;

esPar ? console.log(`${num} es par`) : console.log(`${num} es impar`);

process.exit(0);