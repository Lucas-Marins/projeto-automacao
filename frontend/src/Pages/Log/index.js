import React, { useState,useContext, useEffect } from "react";
import { Container, SLink } from "./style";

import 'antd/dist/antd.css'
import {Table,Input,Button,Divider,Skeleton,Spin, Empty} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";

import { api } from "../../services/api";


const Log = () => {
	
	const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => { 

        setLoading(true)

        const getLastID= async () => {
            const res = await api.get('/log/')
            setLoading(false)
            setData(res.data)        
          }
    
        getLastID()
     },[]) 

    console.log(data)
	
    const [page,setPage] = useState(1)
    const [pageSize, setPageSize] = useState(20)
      
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
            title: 'Id',
            dataIndex: ['id'],
            key: 'id',
			render: (text,record) => {
                return (      
                 <>
                    <SLink key={record.id} to={'/logs/job/' + record.id}>{text}</SLink>
                 </>

                )
            },
			filterDropdown:({setSelectedKeys, selectedKeys,confirm}) => {
                return(
                    <Input
                     autoFocus
                     placeholder="Digite o Id"
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
                 return record.id.toString().toLowerCase().includes(value.toLowerCase())
				// return console.log(record.id)
				 
            }
        },
        {
            title: 'Nome',
            dataIndex: ['name'],
            key: 'name',
            filterDropdown:({setSelectedKeys, selectedKeys,confirm}) => {
                return(
                    <Input
                     autoFocus
                     placeholder="Digite o nome do playbook"
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
				// return console.log(record.id)
				 
            }
        },
        {
            title: 'Status',
            dataIndex: ['status'],
            key: 'status'
        },
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
  <h1 className='h-template'> Logs </h1> 
  <Divider style={{width: '80vw'}}/> 


            <Table
             loading={data.length === 0 ? <Spin /> : ''}
            className="table"
            rowKey="id"
            dataSource={data}
            columns={columns}
            pagination={{
                current:page,
                total: 100000,
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

export default Log
