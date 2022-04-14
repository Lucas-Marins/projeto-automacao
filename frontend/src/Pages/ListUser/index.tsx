import React from "react"
import { BsPlusSquare } from "react-icons/bs"
import {Link} from "react-router-dom"
import { Container, SDivider, Theader, Userlink } from "./style"

export type UserType = {
	id: number
	name: string
	email: string
	phone: string
	website: string
}
type UsersType = Array<UserType>

const ListUser = (props: any) => {
	// const [users, setUsers] = React.useState<UsersType>([])

	// React.useEffect(() => {
	// 	//fetch users from json placeholder
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then((response) => response.json())
	// 		.then((json) => setUsers(json))
	// }, [])

	return (
		<div>
			<>
     <Theader>
         <h1>Lista de usuários</h1>
     </Theader>
     <Userlink to="/users/new" state={{from: "all users", userName: "Bikashweb"}}>
         <BsPlusSquare/>
	</Userlink>
     
    <Container>
        <table>
            <thead>
                <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              <SDivider></SDivider>
                <tr>
                    <td>Lucas</td>
                    <td>lmarins02@hotmail.com.br</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>João</td>
                    <td>joazinho@hotmail.com.br</td>
                </tr>
            </tbody>
        </table>
    </Container>
          </>

		</div>
	)
}

export default ListUser;








































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