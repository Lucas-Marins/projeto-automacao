import React, { useRef, useState } from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"


import {navigationItems} from "../../config"

import { Container, Content, SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSearch, SSearchIcon, SSidebarButton } from "./style"

import {
    AiOutlineLeft, AiOutlineSearch,
} from "react-icons/ai";

import logoSVG from '../../assets/bradesco.svg'

const Sidebar  = () => {
	const searchRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

	const useAuth = () => {
		const user = localStorage.getItem("user")
		if (user) {
			return true
		} else {
			return false
		}
	}
	const user = useAuth()
	const location = useLocation()
	const navigation = useNavigate()

	const logout = () => {
		localStorage.removeItem("user")
		navigation("/login")
	}


	return (
		<Container isOpen={sidebarOpen} >
			<Content >
			 <>
				<SSidebarButton isOpen={sidebarOpen}  onClick={() => setSidebarOpen((p) => !p)}>
						<AiOutlineLeft />
				</SSidebarButton>
			</>
			{/* <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo> */}
			<SSearch
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Search"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>
	
			{user && (
			<>
			<SDivider />
				{navigationItems.sidebar.map(({icon,name,text,to}) => (
					<SLinkContainer key={name} >
						<SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
							<SLinkIcon>{icon}</SLinkIcon>
							{sidebarOpen && (
								<>
									<SLinkLabel>{name}</SLinkLabel>
								</>
							)}
						</SLink>
					</SLinkContainer>
				))}	
			<SDivider />
			</>
		  )}
		  {!user && (
			<Link
				to="/login"
				className={location.pathname === "/login" ? "sidebar_active" : ""}>
				Login
			</Link>
			)}
			 {location.pathname !== "/login" && (
					<button onClick={logout}>logout</button>
			 )}
			</Content>
		</Container>
	)
}

export default Sidebar

