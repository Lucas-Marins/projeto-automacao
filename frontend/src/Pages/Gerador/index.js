import React, { useContext, useState, useEffect, useRef  } from "react";
import {  Container, LContainer, RContainer, SDivider } from "./style";


import Chart from 'react-apexcharts'
import { optionsRadial,seriesRadial } from '../../config';
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { CSVLink, CSVDownload } from "react-csv";

import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form,InputNumber,Typography,Modal } from "antd";

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

const Generator = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [columnsdata, setColumnsData] = useState([]);
  const [teste, setTeste] = useState("");
  const [editingKey, setEditingKey] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const pageSize = 500;

  const isEditing = (record) => record.key === editingKey;
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  console.log(data)

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

    setColumnsData([
      ...columnsdata,
      {
        title: teste,
        dataIndex: teste,
        editable: true
      }
    ]);
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
    }
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
  <Container>
  {/* <Button type="primary" onClick={showModal}>
        Olha a mágica
  </Button> */}

  <Modal
    visible={visible}
    title="Gerador"
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Retornar
      </Button>,
      <Button
        // loading={loading}
        type="primary" 
      >
      </Button>
    ]}
  >
  </Modal>
<LContainer>
  <Form>
    <Form.Item >
        <Input
          onChange={(event) => setTeste(event.target.value)}
          placeholder="Selecionar nome da coluna"
          required
        ></Input>
      </Form.Item>
      <Form.Item onClick={handleColumns}>
        <Button  type="primary" htmlType="submit">
          Adicionar Coluna
        </Button>
      </Form.Item>

      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16
        }}
      >
        Adicionar Linha
      </Button>
     
    </Form>
    <Button
      type="primary"
    >
         <CSVLink data={data} separator={";"} enclosingCharacter={``} onClick={isNull(data)}>Gerar csv</CSVLink>
    </Button>
  
  </LContainer> 

<RContainer>
    <Form form={form} component={false}>

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
    </RContainer>
    </Container>
    </>
  );
};

export default Generator;
