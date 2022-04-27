import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.form`
  /* width: 400px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 650px;
  margin-top: 300px ;
  box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);



    input{
      outline: none;
      display: inline-block;
      border: 2px solid white;
      padding: .2em .4em;
      border-radius: 5rem;
      background-color: RGBA(0,2,12,0.22);
      transition: 1s;
      margin-bottom: 90px;
      

      &:hover{
        background-color: RGBA(83,0,14,0.36);
        border: 2px solid RGBA(83,0,14,0.36);
      }
    }
 
     button{
        position: absolute;
        padding: 0 1.5rem;
        height: 2rem;
        background: RGBA(255,27,78,0.87);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
 } */



 .site-card-wrapper {
  width: 80vw;
  
  margin-left: 80px;
  margin-top: 50px;

  padding: 20px;

  /* border: 3px outset #d63f3f;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */

  
}


h1 {
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  margin-top: 4px;
  }

.h-template{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ant-card.criclebox {
    box-shadow: 0px 20px 27px #0000000d;
    border-radius: 12px;
  }
  
`


export const Aheader = styled.header`
  margin-left: 760px;
  margin-top: 50px;

  h1{
        font-weight: 500;
        font-size: x-large ;
        font-style: italic;
        text-shadow: 4px 5px 10px rgba(0,0,0,0.51);
   }

`


export const SLink = styled(Link)`
   color: rgba(0,0,0,0.51);
   text-decoration: none;
   display: flex;
   justify-content: center;

   transition: filter 0.3s;

   &:hover{
     color: red;
     filter: brightness(0.9);
   }
`
