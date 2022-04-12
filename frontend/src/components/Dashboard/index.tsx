import React from 'react';

import Chart from 'react-apexcharts'
import { Container, Content } from './style';

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
    <Container>
            <div>
                <h1>Quantidade de deploy da semana</h1>
                <Chart options={options} series={series} type='area' height={160} />
             </div>
             <div>
                <h1>Taxa de atualizacções de patch </h1>
                <Chart options={options} series={series} type='bar' height={160} />
            </div>  
            <div>
                <h1>Taxa uploads de arquivos do mês </h1>
                <Chart options={options} series={series} type='pie' height={160} />
            </div>  
            <div>
                <h1>Taxa de upload de inventário</h1>
                <Chart options={options} series={series} type='line' height={160} />
            </div>  
            <div>
                <h1>Quantidade de VMS criadas no mês </h1>
                <Chart options={options} series={series} type='donut' height={160} />
            </div>  
            <div>
                <h1> Teste </h1>
                <Chart options={options} series={series} type='line' height={160} />
            </div>  
    </Container>
  </div>;
}

export default Dashboard;
