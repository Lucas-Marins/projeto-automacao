import React from 'react';

import Chart from 'react-apexcharts'
import { Container, Dheader} from './style';

const options = {
 chart: {
   toolbar:{
     show: false
   },
   zoom: {
     enabled: false
   },
 },
}

const series = [
  {name: 'series1', data: [31 , 120, 10]}
]

const  Dashboard=() =>{
  return <div className='dashboard'>
    <Dheader>
      <h1>
          Bem-vindo à 
          <span> BS - Automações</span>
      </h1>
    </Dheader>
  
    <Container>
            <div>
                <h1>Quantidade de deploy da semana</h1>
                <Chart options={options} series={series} type='area' height={160} />
             </div>
             <div>
                <h1>Taxa de atualizacções de patchs </h1>
                <Chart options={options} series={series} type='bar' height={160} />
            </div>  
             <div>
                <h1>Taxa uploads de arquivos do mês </h1>
                <Chart options={options} series={series} type='area' height={160} />
            </div>  
            <div>
                <h1>Taxa de upload de inventário</h1>
                <Chart options={options} series={series} type='bar' height={160} />
            </div>  
            <div>
                <h1>Quantidade de VMS criadas no mês </h1>
                <Chart options={options} series={series} type='area' height={160} />
            </div>  
            <div>
                <h1> Criação de usuários </h1>
                <Chart options={options} series={series} type='line' height={160} />
            </div>       
    </Container>
  </div>;
}

export default Dashboard;
