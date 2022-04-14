const axios = require('axios')
const config = require('../settings/conexao')



const templateCrtl = { 
    getTemplate: async(req,res) => {

        const template = await axios.get("http://192.168.1.10/api/v2/job_templates/",config.axiosOptionsGet)
        return res.status(200).json(template.data)
    }
}


module.exports = templateCrtl