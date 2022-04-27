import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import * as FaBs from 'react-icons/bs'
import * as FaRi from 'react-icons/ri'

export const navigationItems = {
  sidebar: [
    {
      name: 'Dashboard ',
      to: '/dashboard', 
      text: 'Dashboard',
      icon: < FaRi.RiDashboardFill />
      
    },
    {
      name: 'Usuários ',
      to: '/users', 
      text:'Usuários',
      icon: < FaIcons.FaUserFriends />
    },
    {
      name: 'Relatórios ',
      to: '/relatorios', 
      text:'Relatórios',
      icon: < FaIcons.FaClipboardList />
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
    // {
    //   name: 'Settings ',
    //   to: '/settings', 
    //   text:'Settings',
    //   icon: < FaBs.BsGearFill />
    // },
  

  ], 
  footer: [], 
  


}
export default navigationItems