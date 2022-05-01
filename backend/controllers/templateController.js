const axios = require('axios')
const config = require('../settings/conexao')
const _ = require("lodash")

const templateCrtl = { 
    getTemplate: async(req,res) => {
        const job_template = await axios.get(`http://${process.env.IP}/api/v2/job_templates/`,config.axiosOptionsGet)
        const workflow_template = await axios.get(`http://${process.env.IP}/api/v2/workflow_job_templates/`,config.axiosOptionsGet)

       
        const objTwo = [...job_template.data.results, ...workflow_template.data.results]
        const test = Object.assign({}, job_template.data.results, workflow_template.data)
        const finalObj = _.merge(job_template.data.results, ...workflow_template.data.results)

  
        
        return res.status(200).json(objTwo)
    },

    getJobListTemplate: async(req,res) => {
        const id = req.params.id
        const list = await axios.get(`http://${process.env.IP}/api/v2/job_templates/${id}/jobs/`,config.axiosOptionsGet)
        return res.status(200).json(list.data)
    }
}


module.exports = templateCrtl