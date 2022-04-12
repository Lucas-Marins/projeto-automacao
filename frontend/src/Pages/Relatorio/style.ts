import styled from "styled-components";

export const Container = styled.form `
    max-width: auto;
`

export const Content = styled.div`
      padding: 1.5rem;
      margin-right: 30px ;
        
        h2 {
        color: black;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        margin-top: 1.5rem;
     

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 600;
        font-size: 1rem;

        &::placeholder{
            color: #363F5F
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: green;
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        margin-left: 30px ;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
` 
