import React, { useEffect, useState, useContext,useReducer } from "react";
import { Container } from './style';

import 'antd/dist/antd.css'
import {Upload, Button, message, Input, Form, Card} from 'antd'
import {UploadOutlined,InboxOutlined} from '@ant-design/icons'

import { api } from '../../services/api';

import { useNavigate,useParams } from 'react-router-dom';

import { GlobalState } from "../../GlobalState";

const DeployPage = () => {
    const params = useParams()

    const navigate = useNavigate();

    const state = useContext(GlobalState)
    const [templates] = state.templatesAPI.templates
    const [data,setData] = useState([])

    const [lastlogid, setLastLogId] =  useState(null);

    console.log(lastlogid)

    const [reduce, forceUpdate] = useReducer( x => x + 1 ,0)

    useEffect(() => { 
        let isCancelled = false
        const getLasID= async () => {
          const res = await api.get('/log')
     
          
        setLastLogId(res.data)        
        }
     
        getLasID()
        
        return () => {
            isCancelled = true;
          };
     },[reduce]) 

    useEffect(() => {
        if(params){
            templates.forEach(template =>{
                if(template.id == params.id) return setData(template.type)
            })
        }
    },[params,templates])

    const [fileData, setFileData] = useState([]);
    const [name, setFileName] = useState("")
    const [uploading, setUploading] = useState(false)
 
    const onSubmitHandler = () => {
    //  e.preventDefault()
      const data = new FormData();


      fileData.forEach(file => {
          data.append('file', file)
      })

      setUploading(true)

        api.post('upload', data)
        .then((res) => {
            setFileData([])
            if(fileData.length !== 0){
                setFileName(res.data.uploaded[0].filename)
                message.success('Arquivo enviado com sucesso')
            }
        })
        .catch(() =>{
            message.error('Falha envio de arquivo')
        })
        .finally(() => {
            setUploading(false)   
        })
    };

     function handleCreateNewTransaction() {
         if(params){
             if(data == "job_template") {
                api.post(`job/${params.id}`,{
                    csv_name: name
                 })
             }else if (data == "workflow_job_template") {
                api.post(`workflow/${params.id}`,{
                    csv_name: name
                 })
             }
         }

        forceUpdate()

        setTimeout(() => {
            navigate(`/logs/${lastlogid + 1}`)
          }, "2000")
  }

    return(
    <Container >
        
        <Form>
            <Form.Item>
                <Card 
                
                >
            <Upload
            type="drag"
            loading={uploading}
            onChange={onSubmitHandler}
             beforeUpload={(file) => {
                // setFileData([...fileData,file])
                setFileData([file])
                return false
            }}
            onRemove={(file) => {
                const index = fileData.indexOf(file)
                const newFileList = fileData.slice()
                newFileList.splice(index,1)
                setFileData(newFileList)
                setFileName("")
                    }}
                maxCount={1}
            >
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Clique ou Arraste o arquivo para realizar o upload</p>
                    <p className="ant-upload-hint">
                    Suporte para enviar apenas um arquivo por vez. Restrito para arquivos em formato CSV/TXT
                    </p>
                </Upload>
                        {/* <Button
                    
                            style={{ marginTop: 16 }}
                            disabled={fileData.length === 0}
                            loading={uploading}
                            onClick={onSubmitHandler}
                        >
                            { uploading ? 'Uploading' : 'Fazer upload'}
                        </Button> */}
                </Card>
                <Button  
                block 
                style={{ marginTop: 16 }} 
                type="primary" 
                htmlType="submit"
                onClick={handleCreateNewTransaction}
                // disabled={!name}
                disabled={lastlogid == null || !name}
                  >Enviar</Button>
                </Form.Item>
            </Form>   
     </Container>


    )
}


export default DeployPage;

