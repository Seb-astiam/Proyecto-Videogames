const cleanInfoApi = (responseApi, id) => {
    if(id){
        const videogame = {
            id: id,
            name: responseApi.name,
            description: responseApi.description,
            platforms: responseApi.parent_platforms.map((platform) => platform.platform.name),
            image: responseApi.background_image,
            released: responseApi.released,
            rating: responseApi.rating,
            genres: responseApi.genres?.map(genre => genre.name)
        }

        return videogame

    } else {

        const mapResponseApi = responseApi.map((indexArr) => {
            const videogame = {
                id: indexArr.id,
                name: indexArr.name,
                image: indexArr.background_image,
                rating: indexArr.rating,
                genres: indexArr.genres?.map(genre => genre.name)
            }
            return videogame
        })
    
        return mapResponseApi
    }
}

module.exports = { 
    cleanInfoApi
}