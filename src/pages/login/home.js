import {useState,useEffect, useContext} from 'react';
import {Redirect,useHistory} from 'react-router-dom'
import Button from "../../components/button";
import { ErkContext } from '../../context/Condex';
import "./home.css";
const Home = () =>{

    const {dil} = useContext(ErkContext);
    const history = useHistory()

const ToLogin = ()=>{
    history.push("/login");
}
const ToSignUp = ()=>{
    history.push("/sign-up")
}

return(
    <div className="home">
      <h2 className="home--header">{dil=="tm"?"Erk trading kompaniýasyna Hoş Geldiňiz!":"Добро пожаловать в Erk trading"}</h2>
     <div className="hamo-buttons">
      <Button onClick={ToLogin}>{dil=="tm"?"Içeri Gir":"Войти"}</Button>
      <button onClick={ToSignUp} className="account">{dil=="tm"?"Akkaunt döret":"Создать аккаунт"}</button>
      </div>
    </div> 

    
)


}



export default Home;