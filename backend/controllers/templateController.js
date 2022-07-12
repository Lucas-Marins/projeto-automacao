const axios = require('axios')
const config = require('../settings/conexao')
const _ = require("lodash")

const templateCrtl = { 
    getTemplate: async(req,res) => {
        // const job_template = await axios.get(`http://${process.env.IP}/api/v2/job_templates/`,config.axiosOptionsGet)
        // const workflow_template = await axios.get(`http://${process.env.IP}/api/v2/workflow_job_templates/`,config.axiosOptionsGet)

       
        // const objTwo = [...job_template.data.results, ...workflow_template.data.results]
        // const test = Object.assign({}, job_template.data.results, workflow_template.data)
        // const finalObj = _.merge(job_template.data.results, ...workflow_template.data.results)

  
        
        // return res.status(200).json(objTwo)


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

        

        async function getPageOfResultsJob(page) {
            const response =  await axios.get(`http://${process.env.IP}/api/v2/job_templates/?page=${page}`,config.axiosOptionsGet)
            return response.data 
        }

        async function getPageOfResultsWorkflow(page){
            const response =  await axios.get(`http://${process.env.IP}/api/v2/workflow_job_templates/?page=${page2}`,config.axiosOptionsGet)
            return response.data
        }

        let jobs = [];
        let workflow = []
        let TotalSize = null;
        let page = 1;

        let TotalSize2 = null;
        let page2 = 1;


            while (page != TotalSize) {
                const responsejob =  await UrlExist(`http://${process.env.IP}/api/v2/job_templates/?page=${page}`)
                // const responseworkflow = await UrlExist(`http://${process.env.IP}/api/v2/workflow_job_templates/?page=${page}`)

                if(responsejob.status == 200) {
                    const newResultsJobs = await getPageOfResultsJob(page);
                    // const newResultsWorkflow = await getPageOfResultsWorkflow(page)
                    page++;
                    jobs = jobs.concat(newResultsJobs);
                    // workflow = workflow.concat(newResultsWorkflow)
                }else {
                    break
                }
            }

            while (page2 != TotalSize2) {
                // const responsejob =  await UrlExist(`http://${process.env.IP}/api/v2/job_templates/?page=${page}`)
                const responseworkflow = await UrlExist(`http://${process.env.IP}/api/v2/workflow_job_templates/?page=${page2}`)

                if(responseworkflow.status == 200) {
                    // const newResultsJobs = await getPageOfResultsJob(page);
                    const newResultsWorkflow = await getPageOfResultsWorkflow(page2)
                    page2++;
                    // jobs = jobs.concat(newResultsJobs);
                    workflow = workflow.concat(newResultsWorkflow)
                }else {
                    break
                }
            }

            
            const jobdata = jobs.map(function(item) {
                return item.results
            })

            const workflowdata = workflow.map(function(item) {
                return item.results
            })

        const objTwo = [...workflowdata, ...jobdata]

        const flatall = objTwo.flat()
                
        return res.status(200).json(flatall)
    },

    getJobListTemplate: async(req,res) => {
        const id = req.params.id
        const list = await axios.get(`http://${process.env.IP}/api/v2/job_templates/${id}/jobs/`,config.axiosOptionsGet)
        return res.status(200).json(list.data)
    },
    getOrganizationTemplate: async(req,res) => {

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

        async function getPageOfResultsJob(page) {
            const response =  await axios.get(`http://${process.env.IP}/api/v2/organizations/${id}/job_templates/?page=${page}`,config.axiosOptionsGet)
            return response.data 
        }

        async function getPageOfResultsWorkflow(page){
            const response =  await axios.get(`http://${process.env.IP}/api/v2/organizations/${id}/workflow_job_templates/?page=${page2}`,config.axiosOptionsGet)
            return response.data
        }

        let jobs = [];
        let workflow = []
        let TotalSize = null;
        let page = 1;
        let id_org = id

        let TotalSize2 = null;
        let page2 = 1;


            while (page != TotalSize) {
                const responsejob =  await UrlExist(`http://${process.env.IP}/api/v2/organizations/${id_org}/job_templates/?page=${page}`)

                if(responsejob.status == 200) {
                    const newResultsJobs = await getPageOfResultsJob(page);
                    page++;
                    jobs = jobs.concat(newResultsJobs);
                }else {
                    break
                }
            }

            while (page2 != TotalSize2) {
                const responseworkflow = await UrlExist(`http://${process.env.IP}/api/v2/organizations/${id_org}/workflow_job_templates/?page=${page2}`)

                if(responseworkflow.status == 200) {

                    const newResultsWorkflow = await getPageOfResultsWorkflow(page2)
                    page2++;
                    workflow = workflow.concat(newResultsWorkflow)
                }else {
                    break
                }
            }

            const jobdata = jobs.map(function(item) {
                return item.results
            })

            const workflowdata = workflow.map(function(item) {
                return item.results
            })

            const objTwo = [...workflowdata, ...jobdata]

            const flatall = objTwo.flat()
                    
            return res.status(200).json(flatall)
    },
    getOrganization: async(req,res) => {
        const list = await axios.get(`http://${process.env.IP}/api/v2/organizations/`,config.axiosOptionsGet)
        return res.status(200).json(list.data)
    },
    getTeams: async(req,res) => {

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

        async function getPageOfResultsJob(page) {
            const response =  await axios.get(`http://${process.env.IP}/api/v2/teams/${id}/roles/?page=${page}`,config.axiosOptionsGet)
            return response.data 
        }

        let jobs = [];
        let TotalSize = null;
        let page = 1;

            while (page != TotalSize) {
                const responsejob =  await UrlExist(`http://${process.env.IP}/api/v2/teams/${id}/roles/?page=${page}`)

                if(responsejob.status == 200) {
                    const newResultsJobs = await getPageOfResultsJob(page);
                    page++;
                    jobs = jobs.concat(newResultsJobs);
                }else {
                    break
                }
            }
            const jobdata = jobs.map(function(item) {
                return item.results
            })

            const flatall = jobdata.flat()

                    
            return res.status(200).json(flatall)
    }
    
}


module.exports = templateCrtl