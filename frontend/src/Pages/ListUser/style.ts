import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
 margin-left: 100px;
 margin-top: 12px ;
 /* border-style: solid; */
 border-color: #969CB3;
 border-width: 2px;
 box-shadow: 10px 10px 37px -12px rgba(0,0,0,0.75);
 -webkit-box-shadow: 10px 10px 37px -12px rgba(0,0,0,0.75);
 -moz-box-shadow: 10px 10px 37px -12px rgba(0,0,0,0.75);


  table{
      width: 100% ;
      border-spacing: 1rem 0.5rem ;
      
      th{
          color: #969CB3;
          font-weight: 400 ;
          padding: 1rem 2rem ;
          text-align: left ;
          line-height: 1.5rem; 
                 
          
      }

      td{
          padding: 2rem  1.5rem;
          font-weight: normal;
          color: #969CB3;  
           

         &:first-child {
             color: #363F5F ;
         }
      }
  }
`

export const SDivider = styled.div`
     background: red;
    height: 0.1px;
    width: 465%;
    margin-right: 50px;
    background-color: #969CB3;
`

export const Theader = styled.header`
  margin-top: 80px;
  margin-left: 100px;
  
    h1{
        font-weight: 500;
        font-size: x-large ;
        font-style: italic;
        text-shadow: 4px 5px 10px rgba(0,0,0,0.51);
   }
`

export const Userlink = styled(Link)`
    margin-left: 1120px;
    margin-bottom: 5px;
`

