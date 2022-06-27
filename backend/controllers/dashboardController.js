const axios = require('axios')
const config = require('../settings/conexao')
const upload = require("../settings/configMulter")
const Users = require('../models/user')


const dashboardCrtl = { 
     getData: async (req,res) => {
    
        const response = await axios.get(`http://${process.env.IP}/api/v2/jobs/`,config.axiosOptionsGet)

        // const test = Object.assign({}, triggerhost.data, person)


        return res.status(201).json(response.data)       
        
    }   
}



module.exports = dashboardCrtl