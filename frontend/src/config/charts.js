import React from 'react'


export const AreaOptions = {
    chart: {
      toolbar:{
        show: false
      },
      zoom: {
        enabled: false
      },
      background: '0'
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
       colors: ['#fff', 'transparent'], // takes an array which will be repeated on columns
       opacity: 0
     },
    },
  
    title:{
      text: 'Taxa de atualizações primeiro playbook'
    },
    stroke: {
      width: 2
      }
   }

   export const Areaseries = [
    {name: 'Deploy', data: [31 , 120, 10]}
  ]


  export const LineOptions = {
    chart: {
      toolbar:{
        show: false
      },
      zoom: {
        enabled: false
      },
      background: '0'
    },
    // fill:{
    //  type: "gradient",
    //  gradient: {
    //    shadeIntensity: 1,
    //    opacityFrom: 0.7,
    //    opacityTo: 0.9,
    //    stops: [0, 90, 100]
    //  }
    // },
    xaxis: {
     categories: [
       "01 Jan",
       "02 Jan",
       "03 Jan",
     ]
   },
   grid: {
     row: {
       colors: ['#fff', 'transparent'], // takes an array which will be repeated on columns
       opacity: 0.6
     },
    },
    title:{
      text: 'Segundo Playbook'
    }
   }

      

   export const Lineseries = [
    {name: 'Atualizações', data: [5 , 10, 2]}
  ]




   
   
   export const Pieoptions = { 
     labels: ["Software Básico", "Redes", "SAP", "Segurança Lógica", "SciFi"],
   };
   export const Pieseries = [4, 5, 6, 1, 5];




   export const optionsRadial  = { 
    labels: ["Used Space", "Free Space"],
    legend: {
        position: 'bottom'
    }
  };
  export const seriesRadial = [483, 269];
  