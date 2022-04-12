import React from "react";
import { Container } from './style';

import { api } from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import { useNavigate } from 'react-router-dom';



const DeployPage = () => {
    const navigate = useNavigate();

     function handleCreateNewTransaction() {
         api.post('deploy')
     }

  

    return(
    <Container >
        <div>
            <header>
                <strong>Deploy de Máquina</strong>
            </header>
            <button type='submit' onClick={handleCreateNewTransaction}>Iniciar</button>
        </div>
        <div>
            <header>
               <strong>Atualização de inventário</strong>  
            </header>
            <button  disabled >Disabled</button>
        </div>
        <div>
            <header>
               <strong>Atualização de Patch</strong>  
            </header>
            <button disabled >Disabled</button>
        </div>
     </Container>
    )
}


export default DeployPage;