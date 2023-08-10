const fs = require("fs");

fs.readdirSync("DirectorioNuevo").forEach(file => {
    console.log(file);
}
);
