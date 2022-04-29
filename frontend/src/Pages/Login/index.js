import {useNavigate} from "react-router-dom"
import { Container, LoginButton } from "./style"
import io from 'socket.io-client'


import 'antd/dist/antd.css'
import {Button, Form, Input} from 'antd'
import { useEffect } from "react"

const Login = () => {
	const navigate = useNavigate()

	//ADMIN
	//USER

	const login = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/dashboard")
	}


	// useEffect(() => {
	// 	const socket = io('ws://localhost:3333')
	
	// 	socket.on('connnection', () => {
	// 	  console.log('connected to server');
	// 	})
	
	// 	socket.on('message', (message) => {
	// 	  console.log(message);
	// 	})
	
	// 	socket.on('disconnect', () => {
	// 	  console.log('Socket disconnecting');
	// 	})
	
	//   }, [])

	return (
	
		// 	<h2>Bem-Vindo a página de Login </h2>
		// 	<p>Por favor, clique em login para continuar</p>
		// 	<LoginButton onClick={login}> Login</LoginButton>
		

		<Container>
			<Form className="form">
				<Form.Item name='username' >
                 <Input placeholder="Username" required></Input>
				</Form.Item>
				<Form.Item name='password'>
                 <Input.Password placeholder="Password" required></Input.Password>
				</Form.Item>
				<Form.Item>
                 <Button block type="primary" htmlType="submit" onClick={login} >Log in</Button>
				</Form.Item>
			</Form>
		</Container>
	
	)
}

export default Login
