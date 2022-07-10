import React, {createContext, useState, useEffect} from 'react'
import { api } from './services/api'

import HostsAPI from './api/hostAPI'
import TemplateAPI from './api/templateAPI'
import UserAPI from './api/userAPI'
export const GlobalState = createContext()



export const DataProvider = ({children}) => {
  // const firstLogin = JSON.parse(localStorage.getItem('firstLogin'));
  const [token, setToken] = useState('')

  // useEffect(() =>{
  //    const firstLogin = JSON.parse(localStorage.getItem('firstLogin'));
  //     if(firstLogin){
  //         const refreshToken = async () =>{
  //             const res = await api.get('/user/refresh_token')
            
  //             setToken(res.data.accesstoken)
  
  //             setTimeout(() => {
  //                 refreshToken()
  //             }, 10 * 60 * 1000)
  //         }
  //         refreshToken()
  //     }
  // },[])



  const state= {
    token: [token, setToken],
    hostsAPI:  HostsAPI(),
    // userAPI: UserAPI(token),
    userAPI: UserAPI(token),
    templatesAPI: TemplateAPI()
  }
  return(
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
  )
}