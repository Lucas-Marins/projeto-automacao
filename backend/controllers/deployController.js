const axios = require('axios')
const config = require('../settings/conexao')



const deployCrtl = { 
     deployTemplate: async (req,res) => {

        const triggerhost = await axios.post('http://192.168.1.10/api/v2/job_templates/7/launch/',{}, config.axiosOptionsPost)
        return res.status(201).json(triggerhost.data)
    
        // const triggerhost = await axios.post('http://192.168.1.10/api/v2/job_templates/7/launch/',{
        //     extra_vars: {
        //       survey_var: 7,
        //       name: 'lucas',
        //       equipe: 'diti',
        //     }
        //   }, config.axiosOptionsPost)
        // return res.status(201).json(triggerhost.data)
        
    }
    
}



module.exports = deployCrtl