const {
    createUsersController,
    getUserController
} = require("../Controllers/UserControllers.js")

const createUsersHandler = async (req, res) => {
    const { newUsers }  = req.body;

    try{
        const sendNewUsers = await createUsersController(newUsers);
        return res.status(201).send("User Creado");
    } catch (error) {
        return res.status(500).send("Error en la creacion del usuario", error)
    }

}

const getUserHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const getUser = await getUserController(id);
        return res.status(200).json(getUser);
    } catch (error) {
        return res.status(500).send("Error al obtener el usuario", error)
    }
}

module.exports = {
    createUsersHandler,
    getUserHandler
}