const axios = require('axios')
const config = require('../settings/conexao')

// const instance = axios.create({
//     baseURL: 'https://api.com',
//     headers: {
//         'X-Application-Key': 'APPLICATION_KEY'
//     }
// });

const logCrtl = { 
    
    GetJobLastId: async(req,res) => {

        // const jobs =  await axios.get(`http://192.168.1.10/api/v2/jobs/?page=8`,config.axiosOptionsGet)
        
        async function UrlExist(url) {
            let apiRes = null;
            try {
              apiRes =  await axios.get(url,config.axiosOptionsGet)
            } catch (err) {
                apiRes = err.response.status;
            }finally{
                return apiRes
            }
        }

        async function getPageOfResults(page) {
            const response =  await axios.get(`http://${process.env.IP}/api/v2/jobs/?page=${page}`,config.axiosOptionsGet)
            return response.data 
        }

        let customers = [];
        let TotalSize = null;
        let page = 1;
        
            while (page != TotalSize) {
                const response =  await UrlExist(`http://${process.env.IP}/api/v2/jobs/?page=${page}`)

                if(response.status == 200) {
                    const newResults = await getPageOfResults(page);
                    page++;
                    customers = customers.concat(newResults);
                }else {
                    break
                }
            }

        const data = customers.map(function(item) {
            return item.results
        })

        const flat = data.flat()

         const id = Object.values(flat).map(function(item){
            return item.id
          });

        const lastElement = id[id.length - 1]
                
        return res.status(200).json(lastElement)
    },
    GetJobPerID: async(req,res) =>{
        const id = req.params.id

        // const response = await axios.get(`http://192.168.1.10/api/v2/jobs/${id}/job_events/`, config.axiosOptionsGet)

          
        async function UrlExist(url) {
            let apiRes = null;
            try {
              apiRes =  await axios.get(url,config.axiosOptionsGet)
            } catch (err) {
                apiRes = err.response.status;
            }finally{
                return apiRes
            }
        }


        async function getPageOfResults(page) {
            const response =  await axios.get(`http://${process.env.IP}/api/v2/jobs/${id}/job_events/?page=${page}`,config.axiosOptionsGet)
            return response.data 
        }

        let customers = [];
        let TotalSize = null;
        let page = 1;
        
            while (page != TotalSize) {
                const response =  await UrlExist(`http://${process.env.IP}/api/v2/jobs/${id}/job_events/?page=${page}`)

                if(response.status == 200) {
                    const newResults = await getPageOfResults(page);
                    page++;
                    customers = customers.concat(newResults);
                }else {
                    break
                }
            }

        var result = customers.map(customer => ({ value: customer.results }));

        const data = result.map(function(item) {
            return item.value
        })

        const flat = data.flat()
                  
        return res.status(201).json(flat)
    },
    GetWorkflowLastId: async(req,res) => {
        const id = req.params.id

         const response =  await axios.get(`http://${process.env.IP}/api/v2/workflow_jobs/`,config.axiosOptionsGet)
       
         return res.status(200).json(response.data)
        
    },
    GetWorkflowPerID: async(req,res) => {
        const id = req.params.id

        async function UrlExist(url) {
            let apiRes = null;
            try {
              apiRes =  await axios.get(url,config.axiosOptionsGet)
            } catch (err) {
                apiRes = err.response.status;
            }finally{
                return apiRes
            }
        }

            async function getPageOfResults(page) {
                const response =  await axios.get(`http://${process.env.IP}/api/v2/workflow_jobs/${id}/workflow_nodes/?page=${page}`,config.axiosOptionsGet)
                return response.data 
            }

            
            let customers = [];
            let TotalSize = null;
            let page = 1;
            
                while (page != TotalSize) {
                    const response =  await UrlExist(`http://${process.env.IP}/api/v2/workflow_jobs/${id}/workflow_nodes/?page=${page}`)

                    if(response.status == 200) {
                        const newResults = await getPageOfResults(page);
                        page++;
                        customers = customers.concat(newResults);
                    }else {
                        break
                    }
                }

            var result = customers.map(customer => ({ value: customer.results }));

            const data = result.map(function(item) {
                return item.value
            })

            const flat = data.flat()
                    
            return res.status(201).json(flat)

    },
    GetAll: async(req,res) => {

        // const jobs =  await axios.get(`http://192.168.1.10/api/v2/jobs/?page=8`,config.axiosOptionsGet)
        
        async function UrlExist(url) {
            let apiRes = null;
            try {
              apiRes =  await axios.get(url,config.axiosOptionsGet)
            } catch (err) {
                apiRes = err.response.status;
            }finally{
                return apiRes
            }
        }

        async function getPageOfResults(page) {
            const response =  await axios.get(`http://${process.env.IP}/api/v2/jobs/?page=${page}`,config.axiosOptionsGet)
            return response.data 
        }

        let customers = [];
        let TotalSize = null;
        let page = 1;
        
            while (page != TotalSize) {
                const response =  await UrlExist(`http://${process.env.IP}/api/v2/jobs/?page=${page}`)

                if(response.status == 200) {
                    const newResults = await getPageOfResults(page);
                    page++;
                    customers = customers.concat(newResults);
                }else {
                    break
                }
            }

        const data = customers.map(function(item) {
            return item.results
        })

        const flat = data.flat()

        const reverse = flat.reverse()
                
        return res.status(200).json(reverse)
    },
   
}



module.exports = logCrtl