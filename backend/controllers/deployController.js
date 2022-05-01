const axios = require('axios')
const config = require('../settings/conexao')
const upload = require("../settings/configMulter")


const deployCrtl = { 
     deployJob: async (req,res) => {
         const id = req.params.id
         const {csv_name} = req.body

        const triggerhost = await axios.post(`http://${process.env.IP}/api/v2/job_templates/${id}/launch/`,{
            extra_vars:{
                csv_Lista: csv_name
            }
        }, config.axiosOptionsPost)
        return res.status(201).json(triggerhost.data)
    
        // const triggerhost = await axios.post('http://192.168.1.10/api/v2/job_templates/7/launch/',{
        //     extra_vars: {
        //       survey_var: 7,
        //       name: 'lucas',
        //       equipe: 'diti',
        //     }
        //   }, config.axiosOptionsPost)
        // return res.status(201).json(triggerhost.data)
        
        
    },

    deployWorkflow: async (req,res) => {
        const id = req.params.id
        const {csv_name} = req.body

        const triggerhost = await axios.post(`http://${process.env.IP}/api/v2/workflow_job_templates/${id}/launch/`,{
            extra_vars:{
                csv_Lista: csv_name
            }
        }, config.axiosOptionsPost)
        return res.status(201).json(triggerhost.data)
    },
    
    GetJobLastId: async(req,res) => {

        const jobs = await axios.get(`http://${process.env.IP}/api/v2/jobs/`,config.axiosOptionsGet)
        return res.status(200).json(jobs.data)
    }
   
}



module.exports = deployCrtl