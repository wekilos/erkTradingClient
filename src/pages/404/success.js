import React, { useContext } from "react";
import { useHistory } from "react-router";
import Button from "../../components/button";
import { ErkContext } from "../../context/Condex";

import success from "../../img/success.png"

const Success = () => {
    const history = useHistory()
    const BashSahypa =()=>{
        history.push("/home")
    }
    const {dil} = useContext(ErkContext);
  return (
    
    <div style={{marginTop:"130px",width:"100%"}}>
        <img src={success} alt="404" style={{width:"60%",margin:"0 auto"}}/>
        <h2 style={{color:"#038117",width:"70%",margin:"20px auto"}}>
           {dil=="tm"?"Biz bilen işleşeniňiz üçin köp sag boluň!":"Спасибо что доверились нам!"}</h2>
        <div style={{marginTop:"20px"}}>
        <Button onClick={()=>BashSahypa()}>{dil=="tm"?"Baş sahypa dolan":"Вернуться на главную страницу"}</Button>
        </div>
    </div>
  );
};

export default Success;
