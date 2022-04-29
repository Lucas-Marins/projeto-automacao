const axios = require('axios')
const config = require('../settings/conexao')

const Host = require('../models/host')

const hostCrtl = {
  
    
   getHost: async (req,res) => {

     const hosts = await axios.get('http://192.168.1.10/api/v2/hosts/',config.axiosOptionsGet)
     return res.status(200).json(hosts.data)
   },

   getHostEvents: async (req,res)=>{
    const events = await axios.get("http://192.168.1.10/api/v2/jobs/2/job_events/",config.axiosOptionsGet)

    return res.status(200).json(events.data)

   },

   getAllHostFacts: async (req,res) => {
      try {        
        const array_id = await axios.get('http://192.168.1.10/api/v2/hosts/',config.axiosOptionsGet)

        const id = Object.values(array_id.data.results).map(function(item){
          return item.id
        });

        
        const response = await axios.all(id.map((id) => axios.get(`http://192.168.1.10/api/v2/hosts/${id}/ansible_facts/`,config.axiosOptionsGet)))

        const data = Object.values(response).map(function(item){
          return item.data 
        });

        

          // axios.all(id.map((id) => axios.get(`http://192.168.1.10/api/v2/hosts/${id}/ansible_facts/`,config.axiosOptionsGet))).then((allResponses) => {
          //   allResponses.forEach((response) => {
          //       console.log(response.data);

          //       const hostsFacts = new Host({
          //         facts: response.data
          //       })
        
          //       hostsFacts.save()

          //       // return response.json({msg: "Upload completo"})
        
          //   });
          // });
        
      

        // for (let i = 0; i < id.length; i++){
        //   const response = await axios.get(`http://192.168.1.10/api/v2/hosts/${id}/ansible_facts/`,config.axiosOptionsGet)
        //   data.push(response.data)
        // }

        // const data_hostname = facts.data.ansible_hostname

        // const name = Object.values(data).map(function(item){
        //   return item.ansible_hostname
        // });

        // const hostname = await Host.findOne({data_hostname})
        // if(hostname) return res.status(500).json({msg: "Esse servidor ja existe no banco de dados"}) 

        // const hostname = await Host.findOne({name})
        // if(hostname) return res.status(500).json({msg: "Esse servidor ja existe no banco de dados"}) 
        
        // const details = facts.data

        // const hostsFacts = new Host({
        //   facts: response
        // })

        // await hostsFacts.save()

         return res.status(200).json({data})
      } catch (error) {
        return res.status(500).json({msg:error.message})
      }
   },
   getPerHost: async(req,res) => {
    try {
      // const factories = await Host.findById(req.params.id)
      // res.json({factories})


      const id = req.params.id

       const perhost = await axios.get(`http://192.168.1.10/api/v2/hosts/${id}/ansible_facts/`,config.axiosOptionsGet)


        return res.status(201).json(perhost.data)


        


    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
   }

}

module.exports = hostCrtl