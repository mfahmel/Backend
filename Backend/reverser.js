const reverseString = str => {
    let strReverse = str.split("").reverse().join("");
    return strReverse;
};

console.log(reverseString(process.argv[2]));

process.exit(0);


