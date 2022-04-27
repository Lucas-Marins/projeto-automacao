import { useState,useEffect } from "react";
import { api } from "../services/api";


function HostsAPI(){
    const [facts, setFacts] =  useState([]);
    const [hosts, setHosts] = useState([])

    useEffect(() => { 
        const getFacts = async () => {
          const res = await api.get('/facts')
     
          setFacts(res.data.data)
        }
     
        getFacts()
     },[])
     
     useEffect(() => { 
      const getHosts = async () => {
        const res = await api.get('/hosts')
   
        setHosts(res.data.results)
      }
   
      getHosts()
   },[])


     return{
         facts: [facts, setFacts],
         hosts: [hosts, setHosts]
     }
     
}

export default HostsAPI;