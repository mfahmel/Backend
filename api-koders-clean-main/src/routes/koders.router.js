const express = require("express");
const koders = require("../usecases/koders.usecase");

const router = express.Router();

router.get("/", async (request, response) => {
  const allKoders = await koders.getAll();

  response.json({
    message: "Koders list",
    data: {
      koders: allKoders,
    },
  });
});

router.post("/", async (request, response) => {
  try {
    const koderData = request.body;
    const newKoder = await koders.create(koderData);

    response.status(201);
    response.json({
      message: "Koder created",
      data: {
        koder: newKoder,
      },
    });
  } catch (error) {
    response.status(500);
    response.json({
      message: "something went wrong",
      error: error,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const koder = await koders.getById(id);
    const koderData = request.body;
    const koderName = koderData.firstName;



    response.json({
      message: `Koder found`,
      data: { koder },
    });
  } catch (error) {
    response.status(500);
    response.json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const koderDeleted = await koders.deleteById(id);

    response.json({
      message: `Koder deleted`,
      data: { koderDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      message: "something went wrong",
      error: error.message,
    });
  }
});
  
router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const koderData = request.body;
    const koderUpdated = await koders.updateById(id, koderData);
    const koderName = koderData.firstName;

    response.json({
      message: `Koder ${koderName} id ${id} updated`,
      data: { koderUpdated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

module.exports = router;