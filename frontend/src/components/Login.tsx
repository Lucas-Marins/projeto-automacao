import {useNavigate} from "react-router-dom"

const Login = () => {
	const navigate = useNavigate()

	//ADMIN
	//USER

	const login = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/dashboard")
	}

	return (
		<div className="login">
			<h2>Bem-Vindo a página de Login </h2>
			<p>Por favor, clique em login para continuar</p>
			<button onClick={login}> Login</button>
		</div>
	)
}

export default Login
