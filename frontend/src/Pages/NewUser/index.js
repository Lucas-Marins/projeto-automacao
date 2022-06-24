import React, { useEffect } from "react"
import {Link, useLocation} from "react-router-dom"


import 'antd/dist/antd.css';
import {
	Button,
	Cascader,
	Checkbox,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Radio,
	Select,
	Switch,
	TreeSelect,
	message,
  } from 'antd';
import { useState } from 'react';
import { api } from "../../services/api";
const { Option } = Select;

// import { UserType } from "../ListUser"

const NewUser = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [organization,setOrganization] = useState([])
	const [organizationid,setOrganizationId] = useState('')
	

	useEffect(() => {
		api.get(`organization`)
		.then(res => setOrganization(res.data.results))
   },[])

   console.log(organization)

	const Register = async e =>{
		e.preventDefault()
		try {
		  await api.post('/user/register', {
			name: name,
			email: email,
			password: password,
			organization_id: organizationid
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

  return (
    <Form
    //   labelCol={{
    //     span: 4,
    //   }}
    //   wrapperCol={{
    //     span: 14,
    //   }}
      layout="horizontal"
	  onSubmitCapture={Register}
    //   onValuesChange={onFormLayoutChange}
    >

      <Form.Item label="Usuário">
	  <Input placeholder="Usuário" value={name} onChange={event => setName(event.target.value)} ></Input>
      </Form.Item>
	  <Form.Item label="E-mail">
	  <Input placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} ></Input>
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
	  <Form.Item>
                 <Button block type="primary" htmlType="submit" >Salvar</Button>
	  </Form.Item>
	  
	  {/* <Form.Item label="Admin?">
        <Radio.Group>
          <Radio value="apple"> Sim </Radio>
          <Radio value="pear"> Não </Radio>
        </Radio.Group>
      </Form.Item> */}
    </Form>
  );
}

export default NewUser

{/* <h1> */}
				{/* Adicione um novo usuário{locatioState.from} {locatioState.userName} */}
				
			{/* </h1>
			<Link to="/users">Go back</Link> */}
{/* 
			<div className="new-user__form">
				<div className="new-user__form-group">
					<label htmlFor="">Name</label>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={newUserData.name}
						placeholder="John Doe"
					/>
				</div>
				<div className="new-user__form-group">
					<label htmlFor="">Phone</label>
					<input
						type="text"
						name="phone"
						onChange={handleChange}
						value={newUserData.phone}
						placeholder="0004172"
					/>
				</div>
				<div className="new-user__form-group">
					<label htmlFor="">Email</label>
					<input
						type="text"
						name="email"
						onChange={handleChange}
						value={newUserData.email}
						placeholder="abc@something.com"
					/>
				</div>
				<div className="new-user__form-group">
					<label htmlFor="">Website</label>
					<input
						type="text"
						name="website"
						onChange={handleChange}
						value={newUserData.website}
						placeholder="www.something.com"
					/>
				</div>
				<div className="new-user__form-group">
					<button onClick={handlePostData}>Save user data</button>
				</div> */}
			{/* </div> */}