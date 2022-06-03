const axios = require('axios')
const config = require('../settings/conexao')
const upload = require("../settings/configMulter")
const Users = require('../models/user')


const deployCrtl = { 
     deployJob: async (req,res) => {
        //  const user = await Users.findById(req.user.id).select('name')
        //  if(!user) return res.status(400).json({msg: "User does not exist."})
    
        // const {_id, name} = user

         const id = req.params.id
         const {csv_name,v_fstmp } = req.body

     
        //  const person = {
        //      username: name
        //  }

        const triggerhost = await axios.post(`http://${process.env.IP}/api/v2/job_templates/${id}/launch/`,{
            extra_vars:{
                csv_Lista: csv_name,
                v_fstmp: v_fstmp
                // usuario: name
            },
        }, config.axiosOptionsPost)

        // const test = Object.assign({}, triggerhost.data, person)


        return res.status(201).json(triggerhost.data)       
        
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