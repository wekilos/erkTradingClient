import React, { useContext, useEffect, useState } from "react";

import "./taryh.css";

import {useHistory} from 'react-router-dom';
import tradingCard from "../../img/trading-card.svg";
import tardingCardRed from "../../img/trading-card-red.svg";
import { axiosInstance } from "../../utils/axiosIntance";
import { ErkContext } from "../../context/Condex";

const Taryh = ()=>{
    const history = useHistory();
    const {dil} = useContext(ErkContext);
    const [trading,setTrading]=useState(null);
    const [yatyrlan,setYatyrlan] = useState(false);
    const [data,setData] = useState();
    const TradingCard = (event)=>{
        setTrading(event);
        // history.push("/taryhInside");
        history.push({
            pathname: '/taryhInside',
            // search: '?query=abc',
            state: { id: event }
        });
    }


    useEffect(()=>{
        getData(JSON.parse(localStorage.getItem("erkProfile")))
    },[])

    const getData = async(user)=>{
        axiosInstance.get("/api/sargytlar/taryh/"+user.id).then((data)=>{
            console.log(data.data);
            setData(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="tradings">
            <h2>{dil=="tm"?"Ýükleriň Taryhy":"История грузов"}</h2>

           { data && data.map((taryh)=>{
             return  <div onClick={()=>TradingCard(taryh.id)} className={trading==taryh.id? `trading-card-clicked` : `trading-card`}>
                <img src={taryh.yatyryldy ?tardingCardRed: tradingCard} alt="trading-card" />
                <div>
                    <h3>{taryh.product_name} </h3>
                    <p>{dil=="tm"?"Gowşurylan senesi:":"Дата доставки"} <span className={taryh.yatyryldy && `yatyrlan`}>{JSON.stringify(taryh.gowshurylmaly_date).slice(1,11)}</span></p>
                </div>
           </div>
         })   
        }


           {/* <div onClick={()=>TradingCard(2)} className={trading==2? `trading-card-clicked` : `trading-card`}>
                <img src={tradingCard} alt="trading-card" />
                <div>
                    <h3>Toyota camry 2018 podşiwka </h3>
                    <p>Gowşurylan senesi: <span className={yatyrlan && `yatyrlan`}>17.08.2021  09:21 </span></p>
                </div>
           </div>
           <div onClick={()=>TradingCard(3)} className={trading==3? `trading-card-clicked` : `trading-card`}>
                <img src={true ?tardingCardRed: tradingCard} alt="trading-card" />
                <div>
                    <h3>Toyota camry 2018 podşiwka </h3>
                    <p>Ýatyrlan senesi: <span className={true && `yatyrlan`}>17.08.2021  09:21 </span></p>
                </div>
           </div> */}
           
        </div>
    )
}

export default Taryh;