const { Videogame, Users } = require("../db");
const { getInfoApi } = require("../Helpers/getInfoApi");



const getAllVideogamesControllers = () => {   

    const arrVideogames = getInfoApi()  
    return arrVideogames
}

const getVideogameIDController = (id) => {
    const videogame = getInfoApi(id, null);
    return videogame
}

const getVideogameNameController = (name) => {
    const videogame = getInfoApi(null, name);
    return videogame
}

const createVideogameController = async ({ name, description, platforms, image, released, rating, genres }) => {
    await Videogame.create({ name, description, platforms, image, released, rating, genres })
}

module.exports = {
    getAllVideogamesControllers,
    getVideogameIDController,
    getVideogameNameController,
    createVideogameController
}