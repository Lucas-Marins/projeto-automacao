import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: space-evenly;
margin-top: 2rem;

`


export const  LContainer = styled.div`
    width: 350px;
    margin-left: 5rem;


  
    h1{
        padding: 1.1rem;
        font-weight: bolder;       
    }
    
    h2{
        margin-left: 17px ;
        margin-top: 1.5rem;
        
    }

    h3{
        margin-left: 17px ;
        color: #969CB3;
    }

    .h-container{
        height: 30rem;
        box-shadow: 1px 17px 45px -24px rgba(0,0,0,0.57);
        -webkit-box-shadow: 1px 17px 45px -24px rgba(0,0,0,0.57);
        -moz-box-shadow: 1px 17px 45px -24px rgba(0,0,0,0.57);
    }

    .m-container{
        margin-top: 3.5rem;
        height: 15rem;
        box-shadow: 1px 17px 45px -24px rgba(0,0,0,0.57);
        -webkit-box-shadow: 1px 17px 45px -24px rgba(0,0,0,0.57);
        -moz-box-shadow: 1px 17px 45px -24px rgba(0,0,0,0.57);
    }

    .l-chart{
        display: flex;
        margin-top: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
    }

    

`

export const RContainer = styled.div`

width: 980px;
margin-left: 2rem;


.divider{
    color: #969CB3;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1{
    margin-top: 1rem;
}

.volume{
    display: flex;
    width: 120px;
    color: #fff;
    margin-top: 0.5rem;
    background-color: #969CB3;
    border-radius: 10px;
    justify-content: center;
    
}

h2{
    margin-top: 2rem;
}

.size{
  font-size: 15px;
}

.numero-size{
    font-size: 30px;
}

h3{
    color: #969CB3;
}


.r-chart{
    display: flex;
}

`

export const SDivider = styled.div`
    display: flex;
    height: 0.1px;
    width: 85%;
    background-color: #969CB3;

`