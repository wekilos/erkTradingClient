import React, { useContext, useState } from "react";
import {Redirect,useHistory} from 'react-router-dom'

import "./zayawka.css";

import cargoShip from "../../img/cargo-ship.svg";
import cargoShipWhite from "../../img/cargo-white.svg";
import demiryol from "../../img/underground.svg";
import demiryolWhite from "../../img/otly-white.svg";
import awto from "../../img/awto.svg";
import awtoWhite from "../../img/awto-white.svg";
import plane from "../../img/plane.svg";
import planeWhite from "../../img/plane-white.svg";

import search from "../../img/search.svg";
import searchWhite from "../../img/search-white.svg";
import shoppingCart from "../../img/shopping-cart.svg";
import shoppingCartWhite from "../../img/shopping-cart-white.svg";
import user from "../../img/user.svg";
import userWhite from "../../img/user-white.svg";
import beylekiler from "../../img/beylekiler.svg"
import beylekilerWhite from "../../img/beylekiler-white.svg"
import { ErkContext } from "../../context/Condex";

const Zayawka = (props)=>{

    const {dil} = useContext(ErkContext);

    const [ saylow, setSaylow] = useState(null);
    const [ hyzmat, setHyzmat] = useState(null);
    const history = useHistory();
    const ZayawkaSaylow = (event)=>{
        setSaylow(event);
        history.push({
            pathname: '/zayawkaUgratmak',
            // search: '?query=abc',
            state: { yolId: event}
        });
        localStorage.setItem("yolId",JSON.stringify(event));
    }
    const HyzmatSaylow = (event)=>{
        setHyzmat(event);
        if(event==1){
            history.push({
                pathname:"/harytGozlemek",
                state:{id:"gozlemek"}
            })
        }
        if(event==2){
            history.push({
                pathname:"/harytSatynAlmak",
                state:{id:"satyn almak"}
            })
        } 
        if(event==3){
            history.push({
                pathname:"/wekilchilik",
                state:{id:"wekilchilik"}
            })
        }
        if(event==4){
            history.push({
                pathname:"/beyleki",
                state:{id:"beyleki"}
            })
        }
    }
    

    return (
          
            <div >
       
         <div className="zayawka">
            <h2>{dil=="tm"?"Ýük ugratmak":"Перевозки"}</h2>
            <div onClick={()=>ZayawkaSaylow(1)} className="zayawka-ugry">
                <div className={saylow==1 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        <img src={saylow==1?cargoShipWhite:cargoShip} alt="icon"/>
                        <p>{dil=="tm"?"Deňiz gatnawlary":"Морские перевозки"}</p>
                    </div>
                    <div className={saylow==1 && `zayawka-nokat`}></div>
                </div>
            </div>
            <div onClick={()=>ZayawkaSaylow(2)} className="zayawka-ugry">
                <div className={saylow==2 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        <img src={saylow==2?planeWhite:plane} alt="icon"/>
                        <p>{dil=="tm"?"Howa gatnawlary":"Авиаперевозка"}</p>
                    </div>
                    <div className={saylow==2 && `zayawka-nokat`}></div>
                </div>
            </div>
            <div onClick={()=>ZayawkaSaylow(3)} className="zayawka-ugry">
                <div className={saylow==3 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        <img src={saylow==3 ?demiryolWhite: demiryol} alt="icon"/>
                        <p>{dil=="tm"?"Demirýol gatnawlary":"Ж-д перевозки"}</p>
                    </div>
                    <div className={saylow==3 && `zayawka-nokat`}></div>
                </div>
            </div>
            <div onClick={()=>ZayawkaSaylow(4)} className={`zayawka-ugry`}>
                <div className={saylow==4 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        {
                          saylow==4 ? <img src={ awtoWhite} alt="icon"/>
                          : <img src={ awto} alt="icon"/>
                        }
                        
                        <p>{dil=="tm"?"Awtoulag gatnawlary":"Автоперевозка"}</p>
                    </div>
                    <div className={saylow==4 && `zayawka-nokat`}></div>
                </div>
            </div>
            </div>



            <div className="hyzmatlar">
                <h2>{dil=="tm"?"Hyzmatlar":"Услуги"}</h2>
                <div onClick={()=>HyzmatSaylow(1)} className={hyzmat==1 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        {
                          hyzmat==1 ? <img src={ searchWhite} alt="icon"/>
                          : <img src={ search} alt="icon"/>
                        }
                        
                        <p>{dil=="tm"?"Haryt gözlemek":"Поиск товара"}</p>
                    </div>
                </div>
                <div onClick={()=>HyzmatSaylow(2)} className={hyzmat==2 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        {
                          hyzmat==2 ? <img src={ shoppingCartWhite} alt="icon"/>
                          : <img src={ shoppingCart} alt="icon"/>
                        }
                        
                        <p>{dil=="tm"?"Haryt satyn almak":"Выкуп товара"}</p>
                    </div>
                </div>
                <div onClick={()=>HyzmatSaylow(3)} className={hyzmat==3 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        {
                          hyzmat==3 ? <img src={ userWhite} alt="icon"/>
                          : <img src={ user} alt="icon"/>
                        }
                        
                        <p>{dil=="tm"?"Hytaýda wekilçilik":"Представитель  в Китае"}</p>
                    </div>
                </div>
                <div onClick={()=>HyzmatSaylow(4)} className={hyzmat==4 ?`sayawka-ugry-saylow`: `zayawka-saylow`}>
                    <div className="zayawka-text">
                        {
                          hyzmat==4 ? <img src={ beylekilerWhite} alt="icon"/>
                          : <img src={ beylekiler} alt="icon"/>
                        }
                        
                        <p>{dil=="tm"?"Beýleki hyzmatlar":"Другие"}</p>
                    </div>
                </div>
            </div>
        </div> 
                    
    )
}

export default Zayawka;