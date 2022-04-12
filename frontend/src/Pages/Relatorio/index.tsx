import React, { useState } from "react";
import Modal from 'react-modal'
import { Container, Content } from "./style";

// interface NewTransacationModalProps {
//     isOpen: boolean;
//     onRequestClose: () => void;
// }

const  Relatorio = () =>{
    const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTranscationModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTranscationModalOpen(false)
    }



 return(
    <Container>
         <button type="button" 
            onClick={handleOpenNewTransactionModal}
            className="react-modal-close"
            >
                Formulário para deploy máquina
            </button>
    <Modal
    isOpen={isNewTranscationModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
        <Content>
            <h2>Deploy de nova VM</h2>  
           

            <input 
              placeholder="Digite Nome da máquina"
            />

            <input 
              type="number"
              placeholder="Digite IP da máquina"
            />

            <input 
            placeholder="Digite o nome da Rede"
            />

            <input 
            placeholder="Digite o cluster"
            />
            
            <button type="submit">
                Fazer upload
            </button>
        </Content>
    </Modal>
</Container>

 )

}


export default Relatorio;