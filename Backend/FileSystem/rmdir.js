const fs = require("fs");
fs.rmdirSync("DirectorioNuevo",{recursive:true}); //cuando tiene algo dentro
fs.rmdirSync("Directorio");//cuando está vacío
