const fs = require("fs");

fs.writeFileSync("hola.txt","Hola desde create","utf8");

fs.writeFileSync(process.env.HOME + "/hola.txt","Hola desde create","utf8");

