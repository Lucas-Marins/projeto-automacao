import styled from "styled-components";

export const Container = styled.form`
  width: 1000px;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 300px;



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
 }
  
`