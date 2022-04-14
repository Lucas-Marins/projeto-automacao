import {useNavigate} from "react-router-dom"
import { Container, LoginButton } from "./style"

const Login = () => {
	const navigate = useNavigate()

	//ADMIN
	//USER

	const login = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/dashboard")
	}

	return (
		<Container>
			<h2>Bem-Vindo a página de Login </h2>
			<p>Por favor, clique em login para continuar</p>
			<LoginButton onClick={login}> Login</LoginButton>
		</Container>
	)
}

export default Login
