import React,{useContext, useEffect, useState} from "react";

import { message,Drawer,Carousel } from 'antd';
import {useHistory,useLocation } from 'react-router-dom';
import "antd/dist/antd.css";
import "./taryhInside.css";

import track from "../../img/track.svg";
import tkmAmbar from "../../img/tkmambar.svg";
import yukUgradyldy from "../../img/yukUgradyldy.svg";
import { axiosInstance, BASE_URL } from "../../utils/axiosIntance";
import { ErkContext } from "../../context/Condex";

const TaryhInside = (props)=>{
   const location = useLocation();
   const {dil} = useContext(ErkContext)
   const [data,setData] = useState();
   useEffect(() => {
      // console.log(location.pathname); // result: '/secondpage'
      // console.log(location.search); // result: '?query=abc'
      console.log(location.state.id); // result: 'some_value'
      getSargyt(location.state.id);
   }, [location]);

   const getSargyt = (id)=>{
      axiosInstance.get("/api/sargyt/"+id).then((data)=>{
         console.log(data.data);
         setData(data.data);
      }).catch((err)=>{
         console.log(err);
      })
   }
   
   return(
      <div className="taryhInside">
         <Carousel autoplay>
            {data && data.product_image && <div>
               <img style={{width:"90%",height:"300px",objectFit:"contain",margin:"0 auto"}} src={BASE_URL+"/"+data.product_image} alt="Ýüküň Suraty"/>
            </div>}
            {data && data.surat2 && <div>
               <img style={{width:"90%",height:"300px",margin:"0 auto",objectFit:"contain"}} src={BASE_URL+"/"+data.surat2} alt="Ýüküň Suraty"/>
            </div>}
            {data && data.surat3 && <div>
               <img style={{width:"90%",height:"300px",margin:"0 auto",objectFit:"contain"}} src={BASE_URL+"/"+data.surat3} alt="Ýüküň Suraty"/>
            </div>}
         </Carousel>
         <h2> {dil=="tm"?"Harydyň Ady":"Наименование товара"}: <span>{ data && data.product_name} </span>  </h2>
         <div className="taryhInside-details">
               <h2>{dil=="tm"?"Zakaz edilen wagty":"При заказе"}: {data && JSON.stringify(data.ordered_date).slice(1,11)}</h2>
               {data && !data.yatyryldy && <h2 style={{color:"green"}}>{dil=="tm"?"Gowşurylan wagty":"Срок поставки"}: {data && JSON.stringify(data.gowshurylmaly_date).slice(1,11)}</h2>}
               {data && data.yatyryldy && <h2 style={{color:"red"}}>{dil=="tm"?"Ýatyrylan wagty":"При отмене"}: {data && JSON.stringify(data.gowshurylmaly_date).slice(1,11)}</h2>}
               <h2>{dil=="tm"?"Guty sany":"Количество коропок:"}: {data && data.guty_sany}</h2>
               <h2>Kg: {data && data.kg}</h2>
               <h2>CBM (m3): {data && data.m3}</h2>
               <h2>{dil=="tm"?"Ýüküň umumy bahasy":"Общая сумма"}: {data && data.total_price}</h2>

         </div>
    </div>
   )
}

export default TaryhInside;