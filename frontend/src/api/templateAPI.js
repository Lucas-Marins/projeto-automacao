import { useState,useEffect, useContext } from "react";
import { api } from "../services/api";

function TemplateAPI(){
    const [templates, setTemplates] =  useState([]);

    useEffect(() => { 
        const getTemplates= async () => {
          const res = await api.get('/template')


          setTemplates(res.data)        
        }
     
        getTemplates()
     },[]) 


     return{
         templates:[templates, setTemplates],
     }
     
}

export default TemplateAPI;