import React, { useContext } from "react"
import {Routes, Route, Navigate} from "react-router-dom"


import Dashboard from "./Pages/Dashboard"
import Tabs from "./components/Tabs"

import Login from "./Pages/Login"
import ListUser from "./Pages/ListUser"
import SingleUser from "./Pages/SingleUser"
import NewUser from "./Pages/NewUser"
import DynamicForm from "./components/DynamicForm"
import Automation from "./components/Automation"
import  Relatorio  from "./Pages/Relatorio"
import DeployPage from "./Pages/DeployPage"
import DetailsHost from "./Pages/DetailsHost"
import Log from "./Pages/Log"
import LogJob from "./Pages/LogJob"
import LogWorkflow from "./Pages/LogWorkflow"
import Generator from "./Pages/Gerador"

import Tab1 from "./components/Tab1"
import Tab2 from "./components/Tab2"
import Tab3 from "./components/Tab3"

import ProtectedRoutes from "./components/ProtectedRoutes"
import PublicRoutes from "./components/PublicRoutes"
import PermissionDenied from "./components/PermissionDenied"
import { GlobalState } from "./GlobalState"

import NotFound from "./utils/not_found/NotFound"

function MainRoutes (){
	const state = useContext(GlobalState)
	const [isAdmin] = state.userAPI.isAdmin

	
	return(
		<Routes>
		{/** Protected Routes */}
		{/** Wrap all Route under ProtectedRoutes element */}
		<Route path="/" element={<ProtectedRoutes />}>
		
				<Route path="/" element={<Login />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="automation" element={<Automation />} />
				<Route path="deploy/:id" element={<DeployPage/>} />
				<Route path="relatorios" element={<Relatorio/>} />
				<Route path="generator" element={<Generator/>} />
				<Route path="logs" element={<Log />} />
				<Route path="logs/job/:id" element={<LogJob/>} />
				<Route path="logs/workflow/:id" element={<LogWorkflow/>} />
				<Route path="relatorios/details/:id" element={<DetailsHost/>} />
				
				
				<Route
					path="users"
					// element={isAdmin ? <ListUser /> : <NotFound />}
					element={<ListUser /> }
				/>
				<Route path="users/:userId" element={<SingleUser />} />
				<Route path="users/new" element={<NewUser />} />
		
		</Route>

		{/** Public Routes */}
		{/** Wrap all Route under PublicRoutes element */}
		<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>

		{/** Permission denied route */}
		<Route path="/denied" element={<PermissionDenied />} />
	</Routes>
	)
}

export default MainRoutes


{/* <Route path="tabs" element={<Tabs props={{userName: "Bikash web"}} />}>
<Route path="/tabs" element={<Navigate replace to="tab1" />} />
<Route path="tab1" element={<Tab1 />} />
<Route path="tab2" element={<ProtectedRoutes roleRequired="USER" />}>
	<Route path="/tabs/tab2" element={<Tab2 />} />
</Route>
<Route path="tab3" element={<Tab3 />} />
</Route> */}
{/* <Route path="dynamic-form" element={<DynamicForm />} /> */}