import React, { useState,useContext } from "react";
import { Container, SLink } from "./style";

import 'antd/dist/antd.css'
import {Table,Input,Button,Divider,Spin} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";


const  Relatorio = () =>{


    const state = useContext(GlobalState)
    const [facts] = state.hostsAPI.facts
    const [hosts] = state.hostsAPI.hosts

    const [page,setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
      
    // const columns =  [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         key: 'key',
    //         render: name => {
    //             return <a >{name}</a>
    //         },
    //         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
    //             return ( 
    //             <>
    //             <Input 
    //                autoFocus 
    //                placeholder="Faça sua busca" 
    //                value={selectedKeys[0]}
    //                onChange={(e) => {
    //                 setSelectedKeys(e.target.value ?[ e.target.value] : [])
    //                 confirm({closeDropdown: false})
    //                }}
    //                onPressEnter={() => {
    //                    confirm()
    //                }}
    //                onBlur = {() => {
    //                    confirm()
    //                }}
    //             ></Input>; 
                
    //             {/* <Button onClick={() => {
    //                 confirm()
    //             }} type="primary" >
    //                 Search
    //             </Button>
    //             <Button onClick={() => {
    //                 clearFilters()
    //             }} type="danger" >
    //                 Reset
    //             </Button> */}
    //         </>)
    //         },
    //         filterIcon: () => {
    //             return <SearchOutlined />
    //         },
    //         onFilter:(value,record) => {
    //             return record.name.toLowerCase().includes(value.toLowerCase())
    //         }
    //     },
    //     {
    //         title: 'Age',
    //         dataIndex: 'age',
    //         key: 'key',
    //         sorter: (a,b) => a.age - b.age
    //     },
    //     {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         key: 'key'
    //     },
    //     {
    //         title: 'Graduated',
    //         key: 'key',
    //         render: payload => {
    //             return <p>{payload.age > 20 ? 'Passou': 'Reprovou'}</p>
    //         },
    //         filters:[
    //             { text:'Passou', value:true},
    //             { text:'Reprovou', value:false}
    //         ],
    //         onFilter:(value, record) => {
    //             return record.completed === value
    //         }
    //     },
    // ];

    const columns = [
        {
            title: 'Nome',
            dataIndex: ['name'],
            key: 'name',
            render: (text,record) => {
                return (

                   
       
                 <>
                     {/* {hosts.map((item, index) =>  <SLink key={index} to={`/relatorios/details/${item.id}`} >{ansible_nodename}</SLink>)}  */}

                    <SLink to={'details/' + record.id}>{text}</SLink>
                 </>

                )
            },
            filterDropdown:({setSelectedKeys, selectedKeys,confirm}) => {
                return(
                    <Input
                     autoFocus
                     placeholder="Digite o nome do servidor"
                     value={selectedKeys[0]}
                     onChange={(e) => {
                        setSelectedKeys(e.target.value? [e.target.value]: [] )
                        confirm({closeDropdown: false})
                     }}
                     onPressEnter={() => {
                         confirm()
                     }}
                     onBlur={() => {
                         confirm()
                     }}
                    >
                    </Input>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter:(value,record) => {
                return record.name.toLowerCase().includes(value.toLowerCase())
            }
        },
        // {
        //     title: 'IP',
        //     dataIndex: ['ansible_all_ipv4_addresses', '0'],
        //     key: 'ansible_all_ipv4_addresses'
        // },
        // {
        //     title: 'Sistema Operacional',
        //     dataIndex: ['ansible_distribution'],
        //     key: 'ansible_distribution'
        // },
        // {
        //     title: 'Versão',
        //     dataIndex: ['ansible_distribution_version'],
        //     key: 'ansible_distribution_version'
        // },
        // {
        //     title: 'Virtualização',
        //     dataIndex: ['ansible_virtualization_type'],
        //     key: 'ansible_virtualization_type'
        // },
        
    ]
 return(
  <Container>
  <h1 className='h-template'> Servidores </h1> 
  <Divider style={{width: '80vw'}}/> 

   <Table
    loading={hosts.length === 0 ? <Spin /> : ''}
    className="table"
    rowKey="id"
    dataSource={hosts}
    columns={columns}
    pagination={{
        current:page,
        total: 3000,
        pageSize:pageSize,
        onChange:(page,pageSize) => {
            setPage(page);
            setPageSize(pageSize)
        }
    }}
   >

   </Table>
  </Container>
 )

}



export default Relatorio;


