import React, { useContext } from "react";
import { useHistory } from "react-router";
import Button from "../../components/button";
import { ErkContext } from "../../context/Condex";

import notfound from "../../img/404.png"

const NotFound = () => {
    const history = useHistory()
    const BashSahypa =()=>{
        history.push("/home")
    }
    const {dil} = useContext(ErkContext);
  return (
    
    <div style={{marginTop:"160px",width:"100%"}}>
        <img src={notfound} alt="404" style={{width:"90%",margin:"0 auto"}}/>
        <h2 style={{color:"#038117",width:"90%",margin:"40px auto"}}>
          {dil=="tm"?"Bir zatlar ýalňyş gitdi. Haýyş! Internediňizi barlap görüň.":"Что-то пошло не так.Пожалуйста, проверьте ваше интернет соединение!"}</h2>
        <div style={{marginTop:"50px"}}>
        <Button onClick={()=>BashSahypa()}>{dil=="tm"?"Baş sahypa dolan":"Вернуться на главную страницу"}</Button>
        </div>
    </div>
  );
};

export default NotFound;
