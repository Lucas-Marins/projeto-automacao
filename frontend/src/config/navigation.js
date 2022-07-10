import React, { useContext } from 'react'
import * as FaIcons from 'react-icons/fa' 
import * as FaBs from 'react-icons/bs'
import * as FaRi from 'react-icons/ri'
import * as FaLo from 'react-icons/io5'


export const navigationItems = {
  
  sidebar: [
    {
      name: 'Dashboard ',
      to: '/dashboard', 
      text: 'Dashboard',
      icon: < FaRi.RiDashboardFill />
      
    },
    // {
    //   name: 'Usuários ',
    //   to: '/users', 
    //   text:'Usuários',
    //   icon: < FaIcons.FaUserFriends />
    // },
    {
      name: 'Servidores ',
      to: '/relatorios', 
      text:'Relatórios',
      icon: < FaIcons.FaServer />
    },
    {
      name: 'Automação ',
      to: '/automation', 
      text: 'Automação',
      icon: < FaIcons.FaAdn />
    },
    // {
    //   name: 'Tabs Demo ',
    //   to: '/tabs', 
    //   text:'tabsdemo'
    // },
    // {
    //   name: 'Dynamic Form ',
    //   to: '/dynamic-form', 
    //   text:'dynamicform'
    // },
    {
      name: 'Formulário ',
      to: '/generator', 
      text:'Settings',
      icon: < FaIcons.FaClipboardList />
    },
    {
      name: 'Logs ',
      to: '/logs', 
      text:'Settings',
      icon: < FaLo.IoInformationCircleSharp />
    },

  ], 
  footer: [], 
  


}
export default navigationItems