import React, { useContext, useEffect,useState } from "react"
import { BsPlusSquare } from "react-icons/bs"
import {Link} from "react-router-dom"
import { Container, SDivider, Theader, Userlink,Content } from "./style"

import "antd/dist/antd.css";
import { Button, Table, Modal, Input,Form,message,Select,Divider,Radio } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { api } from "../../services/api";
import { GlobalState } from "../../GlobalState";
const { Option } = Select;


// export type UserType = {
// 	id: number
// 	name: string
// 	email: string
// 	phone: string
// 	website: string
// }
// type UsersType = Array<UserType>

const ListUser = () => {


  const state = useContext(GlobalState)
  const [isAdmin] = state.userAPI.isAdmin

  const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [organization,setOrganization] = useState([])
	const [organizationid,setOrganizationId] = useState('')
  const [role,setRole] = useState('')
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const [visible, setVisible] = useState(false)
	
	useEffect(() => {
		api.get(`organization`)
		.then(res => setOrganization(res.data.results))
     },[])

     
    useEffect(() => {
        api.get(`/user/all`)
        .then(res => setDataSource(res.data))
    },[])


	const Register = async e =>{
		e.preventDefault()
		try {
		  await api.post('/user/register', {
			name: name,
			email: email,
			password: password,
			organization_id: organizationid,
            role: role
		  })
		  
		  setName('')
		  setEmail('')
		  setPassword('')
		  message.success('Usuário criado')
		} catch (err) {
		//   alert(err.response.data.msg)
		  message.error(err.response.data.msg)
		}
	  }

	  const handleChange = (value) => {
        // console.log(`selected ${value}`);
        setOrganizationId(value)
      };

      const handleChangeRole = (value) => {
        // console.log(`selected ${value}`);
        setRole(value)
      }; 

      const showModal = () => {
        setVisible(true);
      };
    
      const handleOk = () => {

        setTimeout(() => {
          setVisible(false);
        }, 3000);
      };
    
      const handleCancel = () => {
        setVisible(false);
      };



const columns = [
//   {
//     key: "1",
//     title: "ID",
//     dataIndex: "_id",
//   },
  {
    key: "2",
    title: "Nome",
    dataIndex: "name",
  },
  {
    key: "3",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "5",
    title: "Actions",
    render: (record) => {
      return (
        <>
          <EditOutlined
            onClick={() => {
              onEditStudent(record);
            }}
          />
          <DeleteOutlined
            onClick={() => {
              onDeleteStudent(record);
            }}
            style={{ color: "red", marginLeft: 12 }}
          />
        </>
      );
    },
  },
];

const onAddStudent = () => {
  const randomNumber = parseInt(Math.random() * 1000);
  const newStudent = {
    id: randomNumber,
    name: "Name " + randomNumber,
    email: randomNumber + "@gmail.com",
  };
  setDataSource((pre) => {
    return [...pre, newStudent];
  });
};
const onDeleteStudent = (record) => {
  Modal.confirm({
    title: "Are you sure, you want to delete this student record?",
    okText: "Yes",
    okType: "danger",
    onOk: () => {
      setDataSource((pre) => {
        return pre.filter((student) => student.id !== record.id);
      });
    },
  });
};
const onEditStudent = (record) => {
  setIsEditing(true);
  setEditingStudent({ ...record });
};
const resetEditing = () => {
  setIsEditing(false);
  setEditingStudent(null);
};
return (
    
  <div>
    <header className="App-header">
    
      <Content>
      <h1 className='h-template'> Usuários </h1> 
      <Divider style={{width: '35vw'}}/> 
   

       
           <BsPlusSquare onClick={showModal} className="button-user"  />           
            <Modal title="Criação usuário" visible={visible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                  Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={Register}>
                  Salvar
                </Button>
              ]}
            >
                <Form
                        layout="horizontal"
                        // onSubmitCapture={Register}
                        className="form-user"
                   >
        <Form.Item label="Usuário">
        <Input placeholder="Usuário" value={name} onChange={event => setName(event.target.value)} required></Input>
        </Form.Item>
        <Form.Item label="E-mail">
        <Input placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required ></Input>
        </Form.Item>
        <Form.Item label="Senha">
        <Input.Password placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} required></Input.Password>
        </Form.Item>
        <Form.Item label="Organização">
                <Select
                // defaultValue="lucy"
                style={{
                    width: 200,
                }}
                onChange={handleChange}
                placeholder="Organização"
                optionFilterProp="children"
                >
                    <>
                    {organization.map((org) => (
                        <Option value={org.id}>{org.name}</Option>
                    ))}
                    </>
                </Select>
        </Form.Item>
        <Form.Item label="Administrador"
  
        >
            <Radio.Group>
            <Radio value="1"  onClick={event => setRole(event.target.value)}> Sim </Radio>
            <Radio value="0" onClick={event => setRole(event.target.value)}> Não </Radio>
            </Radio.Group>
        </Form.Item>
                </Form>   
            </Modal>


        <Container>
        <Table columns={columns} dataSource={dataSource}></Table>
        </Container>

      </Content>

      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStudent?.name}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
      </Modal>
    </header>
  </div>
 );
}

export default ListUser;































{/* <Theader>
<h1>Lista de usuários</h1>
</Theader> */}
{/* <Userlink to="/users/new" state={{from: "all users", userName: "Bikashweb"}}>
<BsPlusSquare/>
</Userlink> */}

// <Container>

// </Container>




		{/* <div className="users__list">
				{users &&
					users.map((user) => (
						//single user card
						<div className="users__card" key={user.id}>
							<Link to={`/users/${user.id}`}>
								<p>
									Name:
									<span className="normal">{user.name}</span>
								</p>
							</Link>
						</div>
					))}
			</div> */}