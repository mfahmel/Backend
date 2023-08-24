const Koder = require("../models/koders.model");
const mongoose = require("mongoose");
const createError = require("http-errors");

// GET /koders
async function getAll() {
  const allKoders = await Koder.find();
  return allKoders;
}

// POST /koders
async function create(koderData) {
  // Para validar usamos el mismo create
  // Lanza un objeto de error con propiedades:
  // name: 'ValidationError'
  // message: 'el error' error legible
  const newKoder = await Koder.create(koderData);
  return newKoder;
}

// GET /koders/:id
async function getById(id) {
  // Validar id antes de buscarlo con mongoose.isValidObjectId()
  if (!mongoose.isValidObjectId(id)) {
    //throw new Error("Invalid id");
    throw new createError(404, "Koder not found");
  }
  const koder = await Koder.findById(id);

 


  return koder;
}

async  function deleteById(id) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, "Invalid id");
  }
  const koderDeleted = await Koder.findByIdAndDelete(id);
  
  return koderDeleted;
}

async function updateById(id, koderData) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, "Invalid id");
  }
  const koderUpdated = await Koder.findByIdAndUpdate(id, koderData, {
    new: true,
  });

  if (!koderUpdated) {
    throw new createError(404, "Koder not found");
  }

  return koderUpdated;
}


module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById
};
