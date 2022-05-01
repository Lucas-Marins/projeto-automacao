import React, { useState,useEffect,useReducer, useCallback } from "react"
import { api } from "../../services/api";

import 'antd/dist/antd.css'
import Paragraph from "antd/lib/typography/Paragraph";
import {
  Steps,
  Card,
  Col,
  Row,
  Typography,
  Popover,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
  Divider,
  Menu,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
  LoadingOutlined,
  CheckOutlined
  
} from "@ant-design/icons";

import { Container } from "./style"
import { useParams } from "react-router-dom";
import io from 'socket.io-client'


const { Step } = Steps;



const Log = () => {
    const params = useParams()
    const [log, setLog] = useState([])


    const biggestNames = log
          .filter(item => item.event_display == "Playbook Complete")
          .map(log => log.event_display);
          
    const results = biggestNames.map(function(item){
      return item
    })

    const getAPIData = useCallback(async () => {
      try {
        const res = await  api.get(`log/job/${params.id}`)
        setLog(res.data)
      } catch (error) { 
        console.log(error)
      }
    })

  
    useEffect(() => {

      // if(params){
      //         api.get(`log/job/${params.id}`)
      //         .then(res => setLog(res.data))
    
      // }

      // const getAPIData = async () => {
      //   try {
      //        const res = await  api.get(`log/job/${params.id}`)
      //        setLog(res.data)
      //   } catch (error) {
      //        console.log(error)
      //   }
      // }
      if (results == 'Playbook Complete')  return null
      getAPIData()

      // const interval = setInterval(() => {
      //   getAPIData()
      // }, 1000)

      // return () => clearInterval(interval)
      
    },[log])

  


	// useEffect(() => {
  //   if (params){
  //     const socket = io('ws://localhost:3333')
	
  //     socket.on('connnection', () => {
  //         console.log("client connection done.....");
  //     })

  //     socket.emit('receive_id', params.id)

  //     socket.on('FromAPI', (data) =>{
  //       for(let i = 0; i <= data.results.length; i++){
  //         console.log(i)
  //       }
  //     })
    
  //     socket.on('FromAPI', data => {
  //       setLog(data.results)
  //     })

  //     return () => socket.off('FromAPI')
    
  //     socket.on('disconnect', () => {
  //       console.log('Socket disconnecting');
  //     })

  //     return () => socket.off('FromAPI')
    
  //   }
		
	//   }, [])

    if(log.length === 0) return null;
   
    const { Title, Text } = Typography;

      var newArray = log.filter((item) =>
       item.event_display !=="Verbose"  
       && item.event_display !=="Play Started (all)" 
       && item.event_display !=="Host Started"  
       && item.event_display !=="Host OK"  
       && item.event_display !=="Task Started (Gathering Facts)"   );

	return (
	<Container>
        <Row className="row" gutter={[16, 0]}>
          <Col xs={10} sm={10} md={1} lg={10} xl={8} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>Status</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  <span className="bnb2">ID: {params.id}</span>
                </Paragraph>

                <Timeline
                  pending={ results == 'Playbook Complete' ? 'Finalizado' : 'Esperar Finalização....'}
                  pendingDot={results == 'Playbook Complete' ? <CheckOutlined /> : <LoadingOutlined />}
                  mode="alternate"
                >
                  {newArray.map((t, index) => (
                    <Timeline.Item
                    label 
                    color={t.failed == false ? 'blue' : 'red'} 
                    key={index}>                 
                      <Title  level={5}>{t.event_display}</Title>
                      <Popover content={t.stdout.replace(/[*["{}\\;^\\/#\[*?\]#]/g, '')} trigger="hover">
                        <Text > {t.stdout == "" ? '': 'Informações'}</Text>
                      </Popover>
                    </Timeline.Item> 
                  ))}
                </Timeline>

              </div>
            </Card>
          </Col>
        </Row>
  </Container>              
	)
}

export default Log;







// <Menu mode="inline" >
// <Menu.Item  >
//   Navigation One
//   <span>Option 1</span>
// </Menu.Item>
// </Menu>

















