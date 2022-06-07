import React, { useContext, useState, useEffect, useRef  } from "react";


import Chart from 'react-apexcharts'
import { optionsRadial,seriesRadial } from '../../config';
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { CSVLink, CSVDownload } from "react-csv";

import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form,InputNumber,Typography,Modal,message } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'


const originData = [];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Filesystem = ({visible, showModal,handleOk,handleCancel,isNull}) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [columnsdata, setColumnsData] = useState([]);
  const [teste, setTeste] = useState("");
  const [editingKey, setEditingKey] = useState("");
  const [count, setCount] = useState(0);
  

  const isEditing = (record) => record.key === editingKey;
  const pageSize = 500;
  
  const edit = (record) => {
    form.setFieldsValue({
      ...record
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleAdd = () => {
    const newData = {
      key: count
      // name: `Edward King ${count}`,
      // age: "32",
      // address: `London, Park Lane no. ${count}`
    };
    setData([...data, newData]);
    setCount(count + 1);
  };

  const handleColumns = (event) => {
    event.preventDefault();

    if (!teste) {
      message.error('Coloque um nome para coluna')
      return;
    }

    setColumnsData([
      ...columnsdata,
      {
        title: teste,
        dataIndex: teste,
        editable: true
      }
    ]);

  };

  const RemoveColumn = () => {
    const data = columnsdata.slice(0, columnsdata.length - 1)
    setColumnsData(data)
  };

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
      const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window
        return { width, height }
      }

      const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

        useEffect(() => {
          const handleResize = () => setWindowDimensions(getWindowDimensions())

          window.addEventListener('resize', handleResize)

          return () => window.removeEventListener('resize', handleResize)

        }, [])

        return windowDimensions
      }

      const { width } = useWindowDimensions();

  const columns = [
    {
      title: "Ação",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8
              }}
            >
              Salvar
            </Typography.Link>
            <Popconfirm title="Cancelar operação?" onConfirm={cancel}>
              <a>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Editar
          </Typography.Link>
        );
      }
    },
    {
      title: "IP da máquina",
      dataIndex: "ip",
      editable: true
    },
    {
      title: "Nome da máquina",
      dataIndex: "name",
      editable: true
    },
  ];


  const objTwo = Object.assign(columnsdata,columns)

  const mergedColumns = objTwo.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });
  return (
  <>
  {/* <Button 
  type="primary" 
  // onClick={showModal}
  onClick={ showModal}
  >
        Template para Filesystem
  </Button> */}

  <Modal
    className="modal"
    title="Template Filesystem"

    visible={visible}
    onOk={ (handleOk)}
    onCancel={handleCancel}
    style={{ width: (300 * width / 100), minWidth: (100 * width / 100) }}
    footer={[
    ]}
  >

  <Form 
      className="form"
  >
    <Form.Item  >
        <Input
         
          onChange={(event) => setTeste(event.target.value)}
          placeholder="Selecionar nome da coluna"
          required
        ></Input>
      </Form.Item>

    <Form.Item 
         onClick={handleColumns}>
        <Button  type="primary" htmlType="submit">
          Adicionar Coluna
        </Button>
      </Form.Item> 
      
      <Form.Item onClick={RemoveColumn}>
        <Button  type="primary" htmlType="submit">
          Remover Coluna
        </Button>
      </Form.Item>   
  </Form>

   <div  className="button1">
     <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 10
        }}
      >
        Adicionar Linha
      </Button>
      
      <p
      className="button-text"
      >
        Ordem dos campos a serem colocados:&nbsp;device,&nbsp;filesystem,&nbsp;vg,&nbsp;lv,&nbsp;size,&nbsp;disk<br /> 
        Exemplo: &nbsp;device1,&nbsp;device2,&nbsp;filesystem1,&nbsp;filesystem2,&nbsp;vg1,&nbsp;vg2,&nbsp;lv1,&nbsp;lv2,&nbsp;size1,&nbsp;size2,&nbsp;disk1,&nbsp;disk2<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/dev/sdc,&nbsp;/dev/sdd,&nbsp;/teste1,&nbsp;/teste2,&nbsp;vg_teste,&nbsp;,lv_teste,&nbsp;20,&nbsp;35,&nbsp;20,&nbsp;35
      </p>
  </div>

      <Button
      type="primary"
    >
      <CSVLink 
      className="button2"
      data={data} 
      separator={";"} 
      enclosingCharacter={``} 
      onClick={isNull(data)}
      >
        Gerar csv
      </CSVLink>
    </Button>


    <Form
    form={form} component={false}>    
      <Table
        components={{
          body: {
            cell: EditableCell
          }
        }}
        dataSource={data}
        columns={mergedColumns}
        pagination={data.length > pageSize && { pageSize }} 

      />
      

    </Form>

  </Modal>
    </>
  );
};

export default Filesystem;
