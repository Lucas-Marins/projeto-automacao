import styled from "styled-components";


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
      border-spacing: 0.1rem 0.5rem ;
      
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
    height: 0.1px;
    width: 338%;
    background-color: #969CB3;
`

export const Theader = styled.header`
  margin-top: 70px;
  margin-left: 100px ;
  height: 50px ;
  
    h1{
        font-weight: 500;
        font-size: x-large ;
        font-style: italic;
        text-shadow: 4px 5px 10px rgba(0,0,0,0.51);
   }
`


// padding: 1.5rem;
// margin-right: 30px ;
  
//   h2 {
//   color: black;
//   font-size: 1.5rem;
//   margin-bottom: 2rem;
// }

// input{
//   width: 100%;
//   padding: 0 1.5rem;
//   height: 4rem;
//   border-radius: 0.25rem;
//   margin-top: 1.5rem;


//   border: 1px solid #d7d7d7;
//   background: #e7e9ee;

//   font-weight: 600;
//   font-size: 1rem;

//   &::placeholder{
//       color: #363F5F
//   }
// }

// button[type="submit"]{
//   width: 100%;
//   padding: 0 1.5rem;
//   height: 4rem;
//   background: green;
//   color: #FFF;
//   border-radius: 0.25rem;
//   border: 0;
//   font-size: 1rem;
//   margin-top: 1.5rem;
//   font-weight: 600;
//   margin-left: 30px ;

//   transition: filter 0.2s;

//   &:hover{
//       filter: brightness(0.9);
//   }
