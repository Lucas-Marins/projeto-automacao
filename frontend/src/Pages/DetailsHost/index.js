import React, { useEffect, useState } from "react";
import {  Container, LContainer, RContainer, SDivider } from "./style";

import Chart from 'react-apexcharts'
import { optionsRadial,seriesRadial } from '../../config';
import { useParams } from "react-router-dom";
import { api } from "../../services/api";


const DetailsHost = () => {
    const params = useParams()
    const [infos, setInfos] = useState([])

    useEffect(() => {
        if(params){
             api.get(`facts/${params.id}`)
            .then(res => setInfos(res.data))
        }
    },[])

    if(infos.length === 0) return null;

    const array = []
    for (let i = 0; i < 1; i++){
        array.push(infos)
    }

    var arr = Object.keys(infos)

    var arrObj = arr.map(function(key){
        return {[key]: infos[key]}
    })

 
    {array.map(item => {
        console.log(item)
    })}
    
  

//    {arrObj.map((item)=> {
//        console.log(item.ansible_all_ipv4_addresses)
//    })}
    

    return (
        <Container>

                {array.map(item => {
                    return (
                    <LContainer key={item.ansible_hostname}>     
                        <div className="h-container">
                            <h1 >Sistema</h1>    

                            <h2>Hostname</h2>

                            <h3>{item.ansible_hostname}</h3>

                            <h2>Versão</h2>
                            <h3>{item.ansible_lsb.description}</h3>

                            <h3>Release: {item.ansible_lsb.release}</h3>

                            <h2>Memória</h2>

                            <h3>{item.ansible_memtotal_mb}</h3>
 
                            <h2>CPU</h2>

                            <h3>{item.ansible_processor_cores}</h3>

                            <h2>Virtualização</h2>

                            <h3>{item.ansible_virtualization_type}</h3>

                            {/* <div className="l-chart">
                                <Chart options={optionsRadial} series={seriesRadial} type='donut' width={200} />
                            </div> */}
                        </div>


                               
                        <div className="m-container">
                            <h1>Redes</h1>
                            <h2>IPV4</h2>
                            <h3>{item.ansible_all_ipv4_addresses[0]}</h3>
                        </div>
                 </LContainer>
                    )
                })}
                    
           
     

        <RContainer>
          <>
   
            <div className="divider">
                <span>Volume Status</span>
                <SDivider></SDivider>
            </div>
           
                {array.map(item => {
                   return (
                    <div key={item.ansible_hostname} className="r-chart">
                      <div >
                        <h1>Path</h1>
                        <h2 className="volume">{item.ansible_mounts[0].device}</h2>
                        <h2 className="numero-size">2.24 <span className="size">TiB</span></h2>
                        <h3>Volume Size</h3>
                        <Chart options={optionsRadial} series={seriesRadial} type='donut' width={250} />
                      </div>

                      <div>
                        <h1>Path</h1>
                        <h2 className="volume">{item.ansible_mounts[0].device}</h2>
                        <h2 className="numero-size">2.24 <span className="size">TiB</span></h2>
                        <h3>Volume Size</h3>
                        <Chart options={optionsRadial} series={seriesRadial} type='donut' width={250} />
                      </div>

                      <div>
                        <h1>Path</h1>
                        <h2 className="volume">{item.ansible_mounts[0].device}</h2>
                        <h2 className="numero-size">2.24 <span className="size">TiB</span></h2>
                        <h3>Volume Size</h3>
                        <Chart options={optionsRadial} series={seriesRadial} type='donut' width={250} />
                      </div>

                      <div>
                        <h1>Path</h1>
                        <h2 className="volume">{item.ansible_mounts[0].device}</h2>
                        <h2 className="numero-size">2.24 <span className="size">TiB</span></h2>
                        <h3>Volume Size</h3>
                        <Chart options={optionsRadial} series={seriesRadial} type='donut' width={250} />
                      </div>
                      </div>    
                   )
                })}
                   
            <div className="divider">
                <span>Mounted Devices</span>
                <SDivider></SDivider>
            </div>
        </>
        </RContainer>
        
    </Container>
    )

}


export default DetailsHost