import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  
   margin-left: 80px;

   display: flex;
   flex-direction: column;
   justify-content: flex-start;


   
   height: 100vh;
   overflow-x: hidden;

  .h-template{
    margin-top: 4rem;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    margin-top: 4px;
  } 

  .table{
     /* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
    padding: 2rem;
    box-shadow: 0px 20px 27px #0000000d;
    border-radius: 12px;

  }

`

export const SLink = styled(Link)`
   color: black;
   text-decoration: none;

   transition: filter 0.3s;

   &:hover{
     color: #969CB3;
     filter: brightness(0.9);
   }
`
