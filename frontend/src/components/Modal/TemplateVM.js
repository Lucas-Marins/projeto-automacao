import React, { useContext, useState, useEffect, useRef  } from "react";


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

const MaquinaVM = ({visible, showModal,handleOk,handleCancel,isNull }) => {
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

    setColumnsData([
      ...columnsdata,
      {
        title: teste,
        dataIndex: teste,
        editable: true
      }
    ]);
  };


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
    // {
    //   title: "Quantidade de Hosts",
    //   dataIndex: "v_qtdhosts",
    //   editable: true
    // },
    {
      title: "Vcenter Dominio",
      dataIndex: "v_vcenter",
      editable: true
    },
    {
      title: "Cluster",
      dataIndex: "v_cluster",
      editable: true
    },
    {
      title: "Usuário do vcenter",
      dataIndex: "v_user",
      editable: true
    },
    {
      title: "Sistema Operacional",
      dataIndex: "sv_o",
      editable: true
    },
    {
      title: "Nome pasta para salvar máquina",
      dataIndex: "v_folder",
      editable: true
    },
    {
      title: "Nome do datastore",
      dataIndex: "v_datastore_name",
      editable: true
    },
    {
      title: "Nome da máquina",
      dataIndex: "v_namevm",
      editable: true
    },
    {
      title: "Domínio da máquina",
      dataIndex: "v_domain",
      editable: true
    },
    {
      title: "Template da máquina",
      dataIndex: "v_tmpl_name",
      editable: true
    },
    {
      title: "Nome do segmento DADOS",
      dataIndex: "v_segdados",
      editable: true
    },
    {
      title: "IP do segmento DADOS",
      dataIndex: "v_ipdados",
      editable: true
    },
    {
      title: "Máscara de DADOS",
      dataIndex: "v_maskdados",
      editable: true
    },
    {
      title: "Nome do segmento NOC",
      dataIndex: "v_segnoc",
      editable: true
    },
    {
      title: "IP do segmento NOC",
      dataIndex: "v_ipnoc",
      editable: true
    },
    {
      title: "Máscara NOC",
      dataIndex: "v_masknoc",
      editable: true
    },
    {
      title: "Nome do segmento SOC",
      dataIndex: "v_segsoc",
      editable: true
    },
    {
      title: "IP do segmento SOC",
      dataIndex: "v_ipsoc",
      editable: true
    },
    {
      title: "Máscara SOC",
      dataIndex: "v_masksoc",
      editable: true
    },
    {
      title: "Nome do segmento BACKUP",
      dataIndex: "v_segbkp",
      editable: true
    },
    {
      title: "IP do segmento BACKUP",
      dataIndex: "v_ipbkp",
      editable: true
    },
    {
      title: "Máscara BACKUP",
      dataIndex: "v_maskbkp",
      editable: true
    },
    {
      title: "IP do DNS",
      dataIndex: "v_vdns",
      editable: true
    },
    {
      title: "IP Gateway",
      dataIndex: "v_ipgateway",
      editable: true
    },
    {
      title: "CPU",
      dataIndex: "v_cpu",
      editable: true
    },
    {
      title: "Memória",
      dataIndex: "v_memory",
      editable: true
    },
    // {
    //   title: "Disco",
    //   dataIndex: "v_disk1",
    //   editable: true
    // },
    // {
    //   title: "Area",
    //   dataIndex: "v_area",
    //   editable: true
    // },
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
  onClick={showModal}
  >
        Templates criação de máquinas
  </Button> */}

  <Modal
    className="modal"
    title="Template Máquina Virtual"
    // visible={visible}
    // onOk={handleOk}
    // onCancel={handleCancel}

    visible={visible}
    onOk={handleOk}
    onCancel={handleCancel}
    // width={2000}
    style={{ width: (300 * width / 100), minWidth: (500 * width / 100) }}
    footer={[
      // <Button 
      // key="back" onClick={handleCancel}>
      //   Retornar
      // </Button>,
      <Button
        // loading={loading}
        type="primary" 
      >
      </Button>
    ]}
  >

  <Form>
    {/* <Form.Item >
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
      </Form.Item> */}

      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 10
        }}
      >
        Adicionar Linha
      </Button>
     
    </Form>
    <Button
      type="primary"
    >
      <CSVLink 
      data={data} 
      separator={";"} 
      enclosingCharacter={``} 
      onClick={isNull(data)}
      >Gerar csv</CSVLink>
    </Button>

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

  </Modal>

  
    </>
  );
};

export default MaquinaVM;
