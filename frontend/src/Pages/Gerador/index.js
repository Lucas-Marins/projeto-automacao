import React, { useContext, useState, useEffect, useRef  } from "react";
import {  Container, Content} from "./style";


import Chart from 'react-apexcharts'
import { optionsRadial,seriesRadial } from '../../config';
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { CSVLink, CSVDownload } from "react-csv";

import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form,InputNumber,Typography,Modal,Card,Row,Col } from "antd";
import MaquinaVM from "../../components/Modal/TemplateVM";
import Filesystem from "../../components/Modal/TemplateFilesystem";




const Generator = () => {

  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState('start')

    const handleClick = (gameState) => {
      setGame(gameState)
      setVisible(true)
    }

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      setGame('')
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  

  const showModal = () => {
    setVisible(true);
  }

  function isNull(object) {
    for (const [key, value] of Object.entries(object)) {
        if (typeof(value) === "object" && value !== null) {
            isNull(value)
        }else if(!value){
            object[key] = '*'
        }
    }
    return object
}

  return (
  <>
  <Container>
    <Content>
     <div className="site-card-wrapper">
    <Row gutter={30}>
      <Col  >
        <Card
        className="top-space"
        title="Formulário Máquina virtual" bordered={false}>
            <Button block onClick={() => handleClick('vm')}>
                  Selecionar
              </Button>
        </Card>
      </Col>
      <Col
      
      className="top-space"
     >
        <Card className="teste" title="Formulário Filesystem" bordered={false}>
          <Button block onClick={() => handleClick('filesystem')}>
                  Selecionar
              </Button>
        </Card>
      </Col>
    </Row>
  </div>
  </Content>
  </Container>


      {(() => {
              switch (game) {
                case 'vm':
                  return <MaquinaVM showModal={showModal} visible={visible} handleOk={ handleOk} handleCancel={ handleCancel} isNull={isNull}></MaquinaVM>
                case 'filesystem':
                  return <Filesystem showModal={showModal} visible={visible} handleOk={ handleOk} handleCancel={ handleCancel} isNull={isNull}></Filesystem> 
                // case 'won':
                //   return <Won handleClick={handleClick} />
                // case 'lost':
                //   return <Lost handleClick={handleClick} />
                default:
                  return null
              }
      })()}
  </>
  );
};

export default Generator;
