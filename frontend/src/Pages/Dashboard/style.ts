import styled from "styled-components";

export const Container = styled.div` 
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    gap: 8rem;    
    margin-left: 300px ;
    margin-top: 150px ;


    h1{
       font-weight: 500;
    }
`



export const Dheader = styled.header`
  margin-left: 650px ;
  height: 50px ;
  width: 500px ;


     h1{
        font-weight: 500;
        font-size: x-large ;
        font-style: italic;
     }

     span{
        padding: 10px;
        color:  red;
        text-shadow: 2px 5px 20px rgba(0,0,0,0.68);
        font-style: italic;
     }
`
