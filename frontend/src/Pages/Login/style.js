import styled from "styled-components";


export const Container = styled.div`
   /* width: 350px;
   padding-left: 50px;
   margin-top: 250px;
   margin-left: 700px;
   height: 30vh;
   -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 4px 15px 4px rgba(0,0,0,0); 
   box-shadow: 0px 10px 13px -7px #000000, 5px 4px 15px 4px rgba(0,0,0,0);

   h2{
       margin-top: 50px;
   }

   p{
       margin-top: 10px;
   } */
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;

   .form{
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
     padding: 3rem;
   }
`

export const LoginButton = styled.button`
    width: 120px;
    height: 45px;
    margin-top: 100px;
    margin-left: 80px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    border-radius: 5px;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
        background-color: RGBA(193,0,0,0.22);
    }
`