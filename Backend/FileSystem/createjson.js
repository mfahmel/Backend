const fs = require("fs");

const obj = [{name: "Charles"}, {name: "mario"}, {name: "pepe"}];

const objString = JSON.stringify(obj);

fs.writeFileSync("nombres.json", objString, "utf8");