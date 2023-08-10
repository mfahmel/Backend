const fs =  require("fs");
const content = fs.readFileSync("nombres.json","utf8");

const contentAsObj = JSON.parse(content);

console.log(typeof contentAsObj);

contentAsObj.push({name: "Juan"});

fs.writeFileSync("nombres.json", JSON.stringify(contentAsObj), "utf8");