import React, { useRef, useState } from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"


import {navigationItems} from "../../config"

import { Container, Content, SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSearch, SSearchIcon, SSidebarButton, SsideButton } from "./style"

import {
    AiOutlineLeft, AiOutlineSearch,
} from "react-icons/ai";

import {FiLogOut} from 'react-icons/fi'

import logoSVG from '../../assets/bradesco.svg'


import 'antd/dist/antd.css'
import {Upload, Button, message, Input, Form, Card} from 'antd'
import {UploadOutlined,InboxOutlined} from '@ant-design/icons'

const Sidebar  = () => {
	const searchRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

	const useAuth = () => {
		const user = localStorage.getItem("firstLogin")
		if (user) {
			return true
		} else {
			return false
		}
	}
	const user = useAuth()
	const location = useLocation()
	const navigation = useNavigate()

	sessionStorage.clear();

	const logout = () => {
		localStorage.removeItem("firstLogin")
		navigation("/login")
	}


	return (
		<Container isOpen={sidebarOpen} >
			<Content >
	 	<SLinkContainer >
			{user && (
			<>
	
				<SSidebarButton isOpen={sidebarOpen}  onClick={() => setSidebarOpen((p) => !p)}>
						<AiOutlineLeft />
				</SSidebarButton>

			<SDivider />
				{navigationItems.sidebar.map(({icon,name,to}) => (			
						<SLink key={name} to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
							<SLinkIcon>{icon}</SLinkIcon>
							{sidebarOpen && (
								<>
									<SLinkLabel>{name}</SLinkLabel>
								</>
							)}
						</SLink>
				))}	
			<SDivider />
			</>
		  )}
		  {!user && (
			<Link
				to="/login"
				// className={location.pathname === "/login" ? "sidebar_active" : ""}
				>
				{/* Login */}
			</Link>
			)}
			 {location.pathname !== "/login" && (
				<SsideButton onClick={logout} style={!sidebarOpen ? { width: `fit-content` } : {}} >
					<FiLogOut  />
					{sidebarOpen && (
						<>
						<SLinkLabel>Logout</SLinkLabel>
						</>
					)}
				</SsideButton>
			 )}
	      </SLinkContainer>
		 </Content>
		</Container>
	)
}

export default Sidebar

