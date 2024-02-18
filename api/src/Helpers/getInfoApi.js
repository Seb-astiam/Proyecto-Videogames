require('dotenv').config();
const { Videogame, Users } = require("../db");
const { API_KEY } = process.env;
const { cleanInfoApi } = require("./cleanInfoApi");

const getInfoApi = async (id, name) => {

    try{
        if(id){
            const responseApi  = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                .then((response) => response.json())
                .then((data) => data)
                .catch((error) => {
                    console.error('Fetch error en getVideogameIDController:', error);
                })
            
            const infoApiClean = cleanInfoApi(responseApi, id)
            return infoApiClean
    
        } else if (name) {

            const responseBD = await Videogame.findOne({ 
                where: { name: name },
                attributes: ["id", "name", "image", "rating", "genres"]
             })

            const responseApi = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
                .then((response) => response.json())
                .then((data) => data)
                .catch((error) => {
                    console.error('Fetch error en getVideogameNameController:', error);
            }); 

            const infoApiClean = cleanInfoApi(responseApi.results);

           const respuesta =  responseBD ? responseBD : infoApiClean
           return respuesta

        } else {
            const responseBD = await Videogame.findAll({
                attributes: ["id", "name", "image", "rating", "genres"]
            });

            const responseApi = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
                .then((response) => response.json())
                .then((data) => data.results)
                .catch((error) => {
                    console.error('Fetch error en getAllVideogamesControllers:', error);
            });

            const infoApiClean = cleanInfoApi(responseApi);

            return [...responseBD.flat(), ...infoApiClean.flat()]
        }
    }
    catch (error) {
        console.error('Algo fallo en la funcion helper getInfoAPi', error);
    }
   
}

module.exports = {
    getInfoApi
}

