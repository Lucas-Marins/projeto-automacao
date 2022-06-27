import styled from "styled-components";
import {Link} from 'react-router-dom'


export const Content = styled.div`
    margin: 5rem;
    margin-left: 20rem;

    .button-user{
    margin-left: 1120px;
    margin-bottom: 10px;
    color: green;
    font-size:  21.8px;
    background-color: RGBA(0,208,65,0.04);
    /* border: none;
    border-radius: 0px;
    border-style: none; */
    /* background: #14dc45;
    background: linear-gradient(77deg,#14dc45 0%, #00ff00 80%);
    background: -webkit-linear-gradient(77deg,#14dc45 0%, #00ff00 80%);
    background: -moz-linear-gradient(77deg,#14dc45 0%, #00ff00 80%);     */
    }
    
    h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    margin-top: 4px;
  } 
`

export const Container = styled.div`
 /* margin-left: 100px; */
 /* border-style: solid; */
 /* border-color: #969CB3; */
 /* border-width: 2px; */
 box-shadow: 10px 10px 37px -12px rgba(0,0,0,0.75);
 -webkit-box-shadow: 10px 10px 37px -12px rgba(0,0,0,0.75);
 -moz-box-shadow: 10px 10px 37px -12px rgba(0,0,0,0.75);

  
  

  table{
      width: 100% ;
      border-spacing: 0.5rem ;
      
      th{
          color: #969CB3;
          font-weight: 400 ;
          /* padding: 1rem 2rem ; */
           text-align: left ;
          line-height: 0.5rem;
      }

      td{
          /* padding: 2rem  1.5rem; */
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
    /* margin-left: 1120px;
    margin-bottom: 5px;
    color: green;
    font-size: 22px; */

`

