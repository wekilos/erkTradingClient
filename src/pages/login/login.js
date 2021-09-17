import {useContext, useState} from 'react';
import {BASE_URL,axiosInstance} from '../../utils/axiosIntance'
import { message } from 'antd';
import {useHistory} from 'react-router-dom';
import "antd/dist/antd.css";
import "./login.css";
import Input from "../../components/input"
import Button from "../../components/button";

import goz from ".././../img/goz.svg";
import { ErkContext } from '../../context/Condex';

const Login = () =>{
  const {dil} = useContext(ErkContext);
    const history = useHistory()
    const [username,setUsername] = useState("+9936");
    const [password, setPassword] = useState("")
    const [show,setShow] = useState(false);
    const [check,setCheck] = useState(false);

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onSubmit()
      }
    }

const onSubmit=async()=>{
  setCheck(true)
await axiosInstance.post('/api/user/login',{
 
phoneNumber:username,
password: password,
     
} ).then((res)=>{
 
 console.log(res.data)
  if(res.data.login===true){
        localStorage.setItem("erkProfile", JSON.stringify(res.data))
        message.success(dil=="tm"?"Siz ulgama girdiňiz!":"Вы вошли в систему!");
        window.location.href="/home";    
    }else{
        message.warn(dil=="tm"?"Hasaba alynmadyk ulanyjy!":"Незарегистрированный пользователь!")
    }
    

}).catch((err)=>{
    console.log(err);
    message.warn(dil=="tm"?"Gaýtadan Barlap görüň!":"Проверьте это снова!")
})

}

const showText = ()=>{
  setShow(!show);
}

return(
    
    <div className="login-page">
      <h2 className="login-header">{dil=="tm"?"Maglumatlaryňyzy giriziň":"Введите данные"}</h2>
      {/* <p style={{textAlign:"left"}}>Введите номер телефона и пароль</p> */}

      <div className="login-input">
        {check && (username=="+9936" || username==null ) ?   <Input
      style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
        addBefore={dil=="tm"?"Telefon belgiňiz:":"Телефон"}
        placeholder="+99365555555"
        value={username} onChange={(e)=>setUsername(e.target.value)}
      />
      :<Input
      addBefore={dil=="tm"?"Telefon belgiňiz:":"Телефон"}
      placeholder="+99365555555"
      value={username} onChange={(e)=>setUsername(e.target.value)}
    />}
      </div>
      <div className="login-input">
      {check && (password=="" || password==null ) ?   <Input
      style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
        onKeyDown={handleKeyDown}
        addBefore={dil=="tm"?"Açarsözi:":"Пароль"}
        className="login-input"
        type={!show && "password"}
        placeholder="********"
        value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      :<Input
      onKeyDown={handleKeyDown}
      addBefore={dil=="tm"?"Açarsözi:":"Пароль"}
      className="login-input"
      type={!show && "password"}
      placeholder="********"
      value={password} onChange={(e)=>setPassword(e.target.value)}
    />}
      <img src={goz} onClick={showText} />
      </div>
      <div onClick={()=>history.push("/sign-up")} className="Hasapyok">{dil=="tm"?"Sizde Hasap ýokmy?":"Нет учетной записи?"}</div>
      <div className="login-button">
      <Button  onClick={()=>onSubmit()}  >{dil=="tm"?"Içeri Gir":"Войти"}</Button>
      </div>
    </div> 

    
)


}



export default Login;