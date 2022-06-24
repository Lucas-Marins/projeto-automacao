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

  const {organization_id} = user   


  const [page,setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)  

  const [searchTerm, setSearchTerm] = useState('')

  const [organization,setOrganization] = useState([])
  const [organizationid,setOrganizationId] = useState(1)
  const [organizationtemplate,setOrganizationTemplate] = useState([])

    // if(templates.length === 0) return null;

    const indexOfLastPost = page * pageSize
    const indexOfFirstPost = indexOfLastPost - pageSize
    const currentPost = organizationtemplate.slice(indexOfFirstPost,indexOfLastPost)

    useEffect(() => {
           api.get(`organization`)
           .then(res => setOrganization(res.data.results))
    },[])

    useEffect(() => {
           api.get(`organization/${organization_id}`)
          .then(res => setOrganizationTemplate(res.data))
    },[organization_id])


    const array = []
    for (let i = 0; i < 1; i++){
        array.push(currentPost)
    }

    var newArray = array.filter((item) =>
      item.name !== "Dev-DITI-Primeiro-Playbook"
      )

      const handleChange = (value) => {
        // console.log(`selected ${value}`);
        setOrganizationId(value)
      };
  
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
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val) => {
        return(
          <>
            <List.Item  >
              <Card className="criclebox " title={val.name} hoverable={false}>
                <SLink to={'/deploy/' + val.id}>
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
