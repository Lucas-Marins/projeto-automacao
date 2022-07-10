import {useNavigate} from "react-router-dom"
import { Container, LoginButton } from "./style"
import io from 'socket.io-client'

import { api } from "../../services/api"

import 'antd/dist/antd.css'
import {Button, Form, Input,message} from 'antd'
import { useEffect,useState } from "react"

const Login = () => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')


	const [ user, setUser] = useState({
		email:'',
		password:''
	  })

	
	  const onChangeInput = e =>{
		const {name, value} = e.target;
		setUser({...user, [name]:value})
	  }

	//ADMIN
	//USER

	const login = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/dashboard")
	}

	const loginSubmit = async e =>{
		e.preventDefault()
		try {
		//  await api.post('/user/login', {
		// 	name: name,
		// 	password: password
		//  })

		await api.post('/user/tower_login', {
			name: name,
			password: password
		 }).then(function(res){
			const data = res.data
			const user = data[Object.keys(data)[0]];
			
			localStorage.setItem('firstLogin', user.user)
			
			window.location.href ="/dashboard"
		 })


		//  const token = res.data.accesstoken
		//  localStorage.setItem('firstLogin', JSON.stringify(token))

	
		} catch (err) {
		//   alert(err.response.data.msg)
		  message.error("Usuário ou senha incorreto")
		}
	  }
	

	return (
	
		// 	<h2>Bem-Vindo a página de Login </h2>
		// 	<p>Por favor, clique em login para continuar</p>
		// 	<LoginButton onClick={login}> Login</LoginButton>
		

		<Container className="image-login">
			<Form className="form-login" onSubmitCapture={loginSubmit}>
				<Form.Item name='username' >
                 <Input placeholder="Username" value={name} onChange={event => setName(event.target.value)}  required></Input>
				</Form.Item>
				<Form.Item name='password'>
                 <Input.Password placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} required></Input.Password>
				</Form.Item>
				<Form.Item>
                 <Button block type="primary" htmlType="submit" >Log in</Button>
				</Form.Item>
			</Form>
		</Container>
	
	)
}

export default Login
