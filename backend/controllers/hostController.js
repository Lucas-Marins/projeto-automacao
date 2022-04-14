const axios = require('axios')
const config = require('../settings/conexao')



const hostCrtl = {
    
    getHost: async (req,res) => {
    // const token = "ssnzCg0CmqAK9WwzYBtJM5F5WhBzsp"

     const hosts = await axios.get('http://192.168.1.10/api/v2/hosts/',config.axiosOptionsGet)
     return res.status(200).json(hosts.data)
   }

}

module.exports = hostCrtl