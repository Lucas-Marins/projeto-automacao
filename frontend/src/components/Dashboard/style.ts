import styled from "styled-components";

export const Container = styled.div` 
    background-color: #FFFF;
    max-width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    gap: 5rem;
    margin-left: 50px;
`

export const Content = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: space-between;
`