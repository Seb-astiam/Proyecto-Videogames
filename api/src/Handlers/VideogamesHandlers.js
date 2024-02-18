const { 
    getAllVideogamesControllers,
    getVideogameIDController,
    getVideogameNameController,
    createVideogameController
} = require("../Controllers/VideogamesControllers.js");

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(name) {
            const videogame = await getVideogameNameController(name);
            return res.status(200).json(videogame)
        } else {
            const videogames = await getAllVideogamesControllers();
            return res.status(200).json(videogames);
        }
    } catch (error) {
        return res.status(500).send("Error al traer los videogames" + error)
    }
}

const getVideogameIDHandler = async (req, res) => {
    const { idVideogame } = req.params
    try {
        const videogame = await getVideogameIDController(idVideogame);
        return res.status(200).json(videogame)
    }
    catch (error) {
        return res.status(500).send("Error al traer el videogame por id", error)
    }
}

const createVideogameHandler = async (req, res) => {
    const { name, description, platforms, image, released, rating, genres } = req.body
    try {
        const sendNewVideogame = await createVideogameController({ name, description, platforms, image, released, rating, genres });
        return res.status(201).json({ message: "Videogame Creado", videogame: sendNewVideogame })
    } catch (error) {
        return res.status(500).send("Error en la creacion de videogame: " + error);
    }

}



module.exports = {
    getVideogamesHandler,
    getVideogameIDHandler,
    createVideogameHandler
}