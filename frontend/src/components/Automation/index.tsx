import React, { FormEvent, useRef, useState } from 'react';
import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';
import { Container } from './style';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const  Automation=() =>{

    const [fileData, setFileData] = useState();

    const notify = () => toast.success("Arquivo enviado com sucesso!");

    const navigate = useNavigate();
    
    const fileChangeHandler = (e) => {
      setFileData(e.target.files[0]);
    };
  
    const onSubmitHandler = (e:FormEvent) => {
     e.preventDefault()
  
      // Handle File Data from the state Before Sending
      const data = new FormData();
  
      data.append("file", fileData!);

        api.post('upload', data)
        .then(response => {
            console.log(response.data);
        });

        setTimeout(()=>navigate('/deploy'), 2000);
    };

  return (
      <div>
      <ToastContainer 
        autoClose={1000}
       />
        < Container onSubmit={onSubmitHandler}>
            
            <input type="file" onChange={fileChangeHandler} />
            <button type="submit" onClick={notify}>Enviar Arquivo</button>
        </Container>

      </div>


    )
}

export default Automation;
