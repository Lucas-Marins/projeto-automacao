const axios = require('axios')
const config = require('../settings/conexao')


const userCrtl = {
    createUser: async(req,res) => {

        const template = await axios.get("/api/v2/organizations/{id}/users/",config.axiosOptionsGet)
        return res.status(200).json(template.data)
    }
}