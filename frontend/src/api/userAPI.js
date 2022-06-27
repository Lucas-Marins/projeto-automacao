import{useState, useEffect} from 'react';
import axios from 'axios'
import { api } from '../services/api';

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [userInfo, setUserInfo] = useState('')

  useEffect(() =>{
    if(token){
        const getUser = async () =>{
            try {
                const res = await api.get('/user/infor', {
                    headers: {Authorization: token}
                })

                setIsLogged(true)
                setUserInfo(res.data)
                res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getUser()
    }
},[token])
  
  return{
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    userInfo: [userInfo, setUserInfo],
  }
}

export default UserAPI;