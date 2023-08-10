
let max = process.argv[2];

if (isNaN(max)) {
    console.error("Debes ingresar un número");
    process.exit(1);
}

function fizzBuzz() {
    for (let i = 1; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i,"- fizzbuzz");
        } else if (i % 3 === 0) {
            console.log(i,"- fizz");
        } else if (i % 5 === 0) {
            console.log(i,"- buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
process.exit(0);