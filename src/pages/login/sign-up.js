import {useState,useEffect, useContext} from 'react';
import {Redirect,useHistory} from 'react-router-dom';
import { message } from 'antd';

import "./home.css";

import "./login.css";
import Input from "../../components/input"
import Button from "../../components/button";
import goz from ".././../img/goz.svg";
import { axiosInstance } from '../../utils/axiosIntance';
import { ErkContext } from '../../context/Condex';


const SignUp = () =>{

    const [show,setShow] = useState(false);
    const [name,setName] = useState();
    const [lastname,setLastname] = useState();
    const [phone,setPhone] = useState("+9936");
    const [email,setEmail] = useState();
    const [ password,setPassword] = useState();
    const [check,setCheck] = useState(false);

    const history = useHistory()

const onSubmit = ()=>{
    setCheck(true);
  axiosInstance.post("/api/user/create/",{
    name:name,
    lastname:lastname,
    phoneNumber:phone,
    email:email,
    password:password,
    type:1,
  }).then((data)=>{
    console.log(data.data);
    if(data.data.msg=="Suссessfully"){
      localStorage.setItem("erkProfile",JSON.stringify(data.data));
      message.success(dil=="tm"?"Siz ulgama girdiňiz!":"Вы вошли в систему!");
      window.location.href="/home";
    }else{
      message.warn(dil=="tm"?"Bu nomurda öňden ulanyjy bar!":"У этого номера уже есть пользователь!");
    }
  }).catch((err)=>{
    console.log(err);
    message.warn(dil=="tm"?"Gaýtadan Barlap görüň!":"Проверьте это снова!");
  })

}

const showText = ()=>{
    setShow(!show);
  }

  const {dil} = useContext(ErkContext);
  const empty = "empty"
return(
    <div className="login-page">
    <h2 className="login-header">{dil=="tm"?"Maglumatlaryňyzy giriziň":"Введите данные"}</h2>


    <div className={`login-input  `}>
      {
        check && (name=="" || name==null) ?  <Input
      style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
      required={true}
      addBefore={dil=="tm"?"Adyňyz:":"Имя"}
      placeholder="Meret"
      value={name} 
      onChange={(e)=>setName(e.target.value)}
    />
        :<Input
        required={true}
        addBefore={dil=="tm"?"Adyňyz:":"Имя"}
        placeholder="Meret"
        value={name} 
        onChange={(e)=>setName(e.target.value)}
      />
  }
    </div>

    <div className="login-input">
      {  
       check && (lastname=="" || lastname==null) ?   <Input
          style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
          addBefore={dil=="tm"?"Familýanyň:":"Фамилия"}
          placeholder="Meredow"
          value={lastname} 
          onChange={(e)=>setLastname(e.target.value)}
        />
        : <Input
        addBefore={dil=="tm"?"Familýanyň:":"Фамилия"}
        placeholder="Meredow"
        value={lastname} 
        onChange={(e)=>setLastname(e.target.value)}
        />
    }
    </div>

    <div className="login-input">
     {  check && (phone=="+9936" || phone==null ) ?   <Input
          style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
        addBefore={dil=="tm"?"Telefon:":"Телефон"}
        placeholder="+99365555555"
        value={phone} 
        onChange={(e)=>setPhone(e.target.value)}
      />
      :<Input
      addBefore={dil=="tm"?"Telefon:":"Телефон"}
      placeholder="+99365555555"
      value={phone} 
      onChange={(e)=>setPhone(e.target.value)}
    />
  }
    </div>

    <div className="login-input">
      {check && (email=="" || email==null ) ?   <Input
      style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
      addBefore={dil=="tm"?"Email:":"Почта"}
      placeholder={dil=="tm"?"Nusga@gmail.com":"Например@gmail.com"}
      value={email}
      onChange={(e)=>setEmail(e.target.value)} 
    />
    :<Input
    addBefore={dil=="tm"?"Email:":"Почта"}
    placeholder={dil=="tm"?"Nusga@gmail.com":"Например@gmail.com"}
    value={email}
    onChange={(e)=>setEmail(e.target.value)} 
  />
  }
    </div>

    <div className="login-input">
    {check && (password=="" || password==null ) ?   <Input
      style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
      addBefore={dil=="tm"?"Açarsözi:":"Пароль"}
      className="login-input"
      type={!show && "password"}
      placeholder="********"
      value={password} 
      onChange={(e)=>setPassword(e.target.value)}
    />
    :<Input
    addBefore={dil=="tm"?"Açarsözi:":"Пароль"}
    className="login-input"
    type={!show && "password"}
    placeholder="********"
    value={password} 
    onChange={(e)=>setPassword(e.target.value)}
  />}
    <img src={goz} onClick={showText} />
    </div>
    <div onClick={()=>history.push("/login")} className="Hasapyok">{dil=="tm"?"Sizde Hasap barmy?":"У тебя есть аккаунт?"}</div>
    <div className="login-button">
    <Button  onClick={()=>onSubmit()}  >{dil=="tm"?"Akkaunt döret":"Создать аккаунт"}</Button>
    </div>
  </div> 
    
)


}



export default SignUp;