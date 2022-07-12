import React, { FormEvent, useState, useContext, useEffect } from 'react';
import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';
import { Aheader, Container,SLink } from './style';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import 'antd/dist/antd.css'
import {Card, Col, Row, Divider, Button,List,Input,Pagination,Spin,Select} from 'antd'


import { GlobalState } from '../../GlobalState';
const { Option } = Select;


const  Automation=() =>{
  const state = useContext(GlobalState)
  const [templates] = state.templatesAPI.templates
  const [user] = state.userAPI.userInfo
  const [page,setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)  
  const [searchTerm, setSearchTerm] = useState('')
  const [teams,setTeams] = useState([])
  // const [organization,setOrganization] = useState([])
  // const [organizationid,setOrganizationId] = useState(1)
  // const [organizationtemplate,setOrganizationTemplate] = useState([])


  // const {organization_id} = user   

  const id = Object.values(user).map(function(item){
    if(item.summary_fields.resource_type == "team")   return item.summary_fields.resource_id
  }); 

  const id_team = id.filter(element => {
    return element !== undefined;
  });

  useEffect(()=> {
    const firstLogin = JSON.parse(localStorage.getItem('firstLogin'));

    if(firstLogin && id.length != 0){
      const getTeams = async () =>{
        try {
            const res = await api.get(`/teams/${id_team}`)


            setTeams(res.data)


        } catch (err) {
            alert(err.response.data.msg)
        }
     }
     getTeams()
     }
    },[user])
 
    if(user.length === 0) return null;

    // var newArray = user.filter((item) =>
    // item.name !== "Dev-DITI-Primeiro-Playbook"
    // )

    var newArray = teams.filter((item) =>
       item.summary_fields.resource_type !==  "organization" &&
       item.summary_fields.resource_type !==  "team" && 
       item.summary_fields.resource_type !==  "project" &&
       item.summary_fields.resource_type !==  "inventory" &&
       item.summary_fields.resource_type !==  "credential"
    )
    const indexOfLastPost = page * pageSize
    const indexOfFirstPost = indexOfLastPost - pageSize
    const currentPost = newArray.slice(indexOfFirstPost,indexOfLastPost)

    // useEffect(() => {
    //        api.get(`organization`)
    //        .then(res => setOrganization(res.data.results))
    // },[])

    // useEffect(() => {
    //        api.get(`organization/${organization_id}`)
    //       .then(res => setOrganizationTemplate(res.data))
    // },[organization_id])


    const array = []
    for (let i = 0; i < 1; i++){
        array.push(currentPost)
    }


   

      // const handleChange = (value) => {
      //   // console.log(`selected ${value}`);
      //   setOrganizationId(value)
      // };

  
  return (
      <Container>
  
<div className="site-card-wrapper">
  <div className='h-template'>
    <h1> Templates</h1> 
        <Input 
        type="text" 
        placeholder='Procurar...'
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
        style={{ width: 200}}
        allowClear
        />
        
    {/* <Select
      // defaultValue="lucy"
      style={{
        width: 200,
      }}
      onChange={handleChange}
      placeholder="Selecione sua Organização"
      optionFilterProp="children"
    >
        <>
          {organization.map((org) => (
            <Option value={org.id}>{org.name}</Option>
          ))}
        </>
    </Select> */}
</div>
  <Divider style={{width: '70vw'}}/>

  
  <List
    grid={{ gutter: 50, column: 3 }}
    dataSource={array}
    renderItem={item => (
      item.filter((val) => {
        if(searchTerm == ""){
          return val
        } else if (val.summary_fields.resource_name?.toLowerCase().includes(searchTerm.toLowerCase()) || ''){
          return val
        }
      }).map((val) => {
        return(
          <>
            <List.Item  >
              
              <Card className="criclebox " title={val.summary_fields.resource_name} hoverable={false}  >
                <SLink to={'/deploy/' + val.summary_fields.resource_id} >
                      Selecionar
                </SLink>
                </Card>
            </List.Item>
            
          </>
        )
      })
    )}
    pagination={{
      current:page,
      total: 1000,
      pageSize:pageSize,
      onChange:(page,pageSize) => {
          setPage(page)
          setPageSize(pageSize)
      }
  }}
  />


  </div>


 
</Container>

    )
}

export default Automation;
