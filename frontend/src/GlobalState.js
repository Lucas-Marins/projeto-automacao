import React, {createContext, useState, useEffect} from 'react'
import { api } from './services/api'

import HostsAPI from './api/hostAPI'
import TemplateAPI from './api/templateAPI'

export const GlobalState = createContext()



export const DataProvider = ({children}) => {
  const [token, setToken] = useState(false)


//   useEffect(() =>{
//     const firstLogin = localStorage.getItem('firstLogin')
//     if(firstLogin){
//         const refreshToken = async () =>{
//             const res = await axios.get('/user/refresh_token')
    
//             setToken(res.data.accesstoken)

//             setTimeout(() => {
//                 refreshToken()
//             }, 10 * 60 * 1000)

//         }
//         refreshToken()
//     }
// },[])


      

  const state= {
    hostsAPI:  HostsAPI(),
    templatesAPI: TemplateAPI(),
  }
  return(
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
  )
}