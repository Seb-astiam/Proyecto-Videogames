const { Router } = require('express');

const { getVideogamesHandler, getVideogameIDHandler, createVideogameHandler } = require("../Handlers/VideogamesHandlers.js");

const { createUsersHandler, getUserHandler} = require("../Handlers/UsersHandler.js")



const router = Router();

/* rutas de videogames */

router.get("/videogames", getVideogamesHandler);

router.get("/videogames/:idVideogame", getVideogameIDHandler);

router.post("/videogames", createVideogameHandler);


/* rutas de user */

router.get("/users/:id", getUserHandler);

// router.put("/users", updateUserHandler)

router.post("/users", createUsersHandler);



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
