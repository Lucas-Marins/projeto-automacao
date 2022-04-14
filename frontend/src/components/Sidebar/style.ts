import styled from "styled-components";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export const Container = styled.div<RadioBoxProps>`
    width: ${({ isOpen }) => (!isOpen ? `auto` : `250px`)};
    background: #dfc4c4;
background: linear-gradient(123deg,#dfc4c4 0%, #ec2f2f 40%, #da1e1e 80%);
background: -webkit-linear-gradient(123deg,#dfc4c4 0%, #ec2f2f 40%, #da1e1e 80%);
background: -moz-linear-gradient(123deg,#dfc4c4 0%, #ec2f2f 40%, #da1e1e 80%);
    padding-top:200px;
    padding-left:20px;
    height:100vh;

    position: relative;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;  

    a{
        color: #EBF8FE;
        font-size:20px;
        margin-bottom:40px;
        text-decoration: none;
    }

` 

interface RadioBoxProps{
  isOpen: boolean;
}

export const SSidebarButton=styled.button<RadioBoxProps>`
  outline: none;
  border: none;
  background: RGBA(133,0,0,0.5);
  color: black;
  padding: 0;
  position: absolute;
  top: 48px;
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-30px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

 
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`


export const SSearch = styled.div`
    background: white;
    border: 2px solid white ;
    border-radius: 8px;
    margin-left: 14px;
    margin-right: 5px;
    color: black;
    input {
        padding: 0 8px;
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    display: flex;
`;


export const SSearchIcon = styled.button`
    padding: 16px;
    display: flex;
    border-style: initial;
    cursor: pointer;
    svg {
        font-size: 16px;
    }

    transition: filter 0.3s;

    &:hover{
       filter: brightness(0.9);
    }
`;


export const SDivider = styled.div`
    height: 0.5px;
    width: 80%;
    margin: 24px 0;
    margin-left: 15px ;
    background-color: #FFF;
`;

export const SLinkContainer = styled.div`
    border-radius: 6px;
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 15px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #E52E4D;
        height: 45px;
        border-radius: 5px;
        /* margin-right: 0.5px; */
    }
`;

export const SLinkIcon = styled.div`
    padding: 8px 16px;
    display: flex;
    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: 8px;
`;

export const SLogo = styled.div`

    img {
        background: white;
        padding: 0;
        position: absolute;
        top: 50px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    cursor: pointer;
`

export const SsideButton = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    margin-left: 17px;
    font-size: 15px;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
        color: #E52E4D;
        height: 45px;
        border-radius: 5px;
        margin-right: 1px;
    }
    svg {
        font-size: 20px;
    }

`