import {React,useState,useEffect, useContext} from 'react';
import {Redirect,useHistory} from 'react-router-dom'
import Button from "../../components/button";
import "./home.css";

import zayawka from "../../img/samalyotik.svg";
import shertler from "../../img/shertler.svg";
import treking from "../../img/trecking.svg";
import soraglar from "../../img/soraglar3.svg";
import tarih from "../../img/tarih.svg";
import { ErkContext } from '../../context/Condex';

const Home = () =>{

    const history = useHistory()

const ToLogin = ()=>{
    history.push("/login");
}
const ToSignUp = ()=>{
    history.push("/sign-up")
}

const Zayawka = async()=>{
    history.push("/zayawka")
}

const {dil} = useContext(ErkContext);

return(
    <div className="home2">
        <div onClick={Zayawka} className="home--button">
                <p> {dil=="tm"?"Zaýawka ugratmak":"Отправить заявку"} </p>
                <img src={zayawka} alt="zayawka"/>
        </div>
        <div onClick={()=>history.push("./shertler")} className="home--button">
                <p> {dil=="tm"?"Şertler":"Условия"} </p>
                <img src={shertler} alt="zayawka"/>
        </div>
        <div onClick={()=>history.push("./tradings")} className="home--button">
                <p> {dil=="tm"?"Tracking":"Трекинг"} </p>
                <img src={treking} alt="zayawka"/>
        </div>
        <div onClick={()=>history.push("./soraglar")} className="home--button">
                <p>{dil=="tm"?"Soraglar":"FAQ"} </p>
                <img src={soraglar} alt="zayawka"/>
        </div>
        <div onClick={()=>history.push("./taryh")} className="home--button">
                <p> {dil=="tm"?"Ýükleriň taryhy":"История заказов"} </p>
                <img src={tarih} alt="zayawka"/>
        </div>
    </div> 

    
)


}



export default Home;