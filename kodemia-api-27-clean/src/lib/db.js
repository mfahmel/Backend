const fs = require('fs');
const filePath = 'db.json';

const defaultDB = {
    koders: [],
    mentors: [],
    generaciones: [],
};




function createIfNotExists(){
    if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, JSON.stringify(defaultDB), 'utf8');
    }
}

function getData(){
  return JSON.parse(fs.readFileSync(filePath, 'utf8')); 
}

function updateData(newData){
    fs.writeFileSync(filePath, JSON.stringify(newData), 'utf8');    
}

module.exports = {
    createIfNotExists,
    getData,
    updateData,
};