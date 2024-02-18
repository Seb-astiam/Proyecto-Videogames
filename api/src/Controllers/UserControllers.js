const { Users } = require("../db");

const createUsersController = async (newUser) => {
    const { name, userName, email } = newUser;
    try{
        const sendNewUsertoDB =  await Users.create({ name, userName, email })
        return sendNewUsertoDB
    } catch (error) {
        console.error('Verifica la informacion', error)
    }
}

const getUserController = async (id) => {
    try {
        const user = await Users.findByPk(id)
        return user

    } catch (error) {
        console.error("Error:", error);
    }

}

module.exports = {
    createUsersController,
    getUserController
}