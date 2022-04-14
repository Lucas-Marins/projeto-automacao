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
 fill:{
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 90, 100]
  }
 },
 xaxis: {
  categories: [
    "01 Jan",
    "02 Jan",
    "03 Jan",
  ]
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
}

const options2 = { labels: ["Software Básico", "Redes", "SAP", "Segurança Lógica", "SciFi"] };
const series3 = [4, 5, 6, 1, 5];

const series = [
  {name: 'Deploy', data: [31 , 120, 10]}
]
const series2 = [
  {name: 'Atualizações', data: [5 , 10, 2]}
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
                <h1>Taxa de atualizações de patchs </h1>
                <Chart options={options} series={series2} type='bar' height={160} />
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
                <Chart options={options2} series={series3} type='pie' width={350} />
            </div>       
    </Container>
  </div>;
}

export default Dashboard;
