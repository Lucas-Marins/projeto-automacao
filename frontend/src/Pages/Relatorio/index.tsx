import React, { useState } from "react";
import Modal from 'react-modal'
import { Container, SDivider, Theader } from "./style";

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
     <>
     <Theader>
         <h1>Relatório de servidores</h1>
     </Theader>
     
    <Container>
        <table>
            <thead>
                <tr>
                <th>Servidores</th>
                <th>IP</th>
                <th>Sistema Operacional</th>
                <th>Versão</th>
                <th>Virtualização</th>
                </tr>
            </thead>
            <tbody>
            <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>Redhat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
                <SDivider></SDivider>
                <tr>
                    <td>d71560214.hml.bradseg.com.br</td>
                    <td>157.589.547.20</td>
                    <td>Linux</td>
                    <td>RedHat 8.0</td>
                    <td>Vmware/guest</td>
                </tr>
            </tbody>
        </table>
    </Container>
  
    </>
 )

}


export default Relatorio;





 {/* <button type="button" 
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
    </Modal> */}