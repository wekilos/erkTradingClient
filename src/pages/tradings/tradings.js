import React, { useContext, useEffect, useState } from "react";

import {Redirect, useHistory} from 'react-router-dom';
import "./tradings.css";
import Status from "../Status/status";
import {axiosInstance} from "../../utils/axiosIntance";

import tradingCard from "../../img/trading-card.svg";
import { ErkContext } from "../../context/Condex";

const Tradings = ()=>{
    const {dil} = useContext(ErkContext);
    const history = useHistory()
    const [user,setUser] = useState(null);
    const [data,setData] = useState();
    const [trading,setTrading]=useState(null);
    const TradingCard = async(event)=>{
        setTrading(event);
        // history.push("/status");
        
       await localStorage.setItem("trackId",JSON.stringify(event))
        window.location.href = "/status"
    }
    useEffect(async()=>{
            setUser(JSON.parse(localStorage.getItem("erkProfile")));
            if(localStorage.getItem("erkProfile"))
            getData(JSON.parse(localStorage.getItem("erkProfile")).id);
    },[])
    const getData = (id)=>{
        axiosInstance.get("/api/sargytlar/"+id).then((data)=>{
            console.log(data.data);
            setData(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="tradings">
            <h2>{dil=="tm"?"Tracking":"Трекинг"}</h2>


           {data && data.map((trak)=>{
            return  <div onClick={()=>TradingCard(trak.id)} className={trading==trak.id? `trading-card-clicked` : `trading-card`}>
                <img src={tradingCard} alt="trading-card" />
                <div>
                    <h3>{trak.product_name} </h3>
                    <p>{dil=="tm"?"Ugradylan senesi:":"Дата отправки"} <span>{" "+JSON.stringify(trak.ordered_date).slice(1,11)} </span></p>
                </div>
           </div>
        })   
        }


           {/* <div onClick={()=>TradingCard(2)} className={trading==2? `trading-card-clicked` : `trading-card`}>
                <img src={tradingCard} alt="trading-card" />
                <div>
                    <h3>Toyota camry 2018 podşiwka </h3>
                    <p>Ugradylan senesi: <span>17.08.2021  09:21 </span></p>
                </div>
           </div>
           <div onClick={()=>TradingCard(3)} className={trading==3? `trading-card-clicked` : `trading-card`}>
                <img src={tradingCard} alt="trading-card" />
                <div>
                    <h3>Toyota camry 2018 podşiwka </h3>
                    <p>Ugradylan senesi: <span>17.08.2021  09:21 </span></p>
                </div>
           </div> */}
           
        </div>
    )
}

export default Tradings;