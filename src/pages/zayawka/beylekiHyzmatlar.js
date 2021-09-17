import React, { useContext, useEffect, useState } from "react";
import { useLocation,useHistory } from "react-router";
import Button from "../../components/button";
import Input from "../../components/input";
import "./harytGozlemek.css";
import upload from "../../img/upload.png"
import { ErkContext } from "../../context/Condex";
import { axiosInstance } from "../../utils/axiosIntance";
import {  Drawer, message,} from "antd";
import TextArea from "antd/lib/input/TextArea";


const Gozlemek = ()=>{
    const location = useLocation();
    const history = useHistory();
    const [username,setUsername] = useState()
    
    const [openmail,setOpenmail] = useState(false);
    const [text,setText] = useState();
    const [subject,setSubject] = useState();
    const {dil} =useContext(ErkContext);
    useEffect(()=>{
        // console.log(location.pathname)
        // console.log(location.state)
        if(dil=="tm"){
            setSubject("Beýleki hyzamatlar")
          }else{
              setSubject("Другие услуги");
               }
    },[])
    const Indiki = ()=>{
        history.push("./zayawka")

    }
    const Gozle = ()=>{

    }
    const Mail = ()=>{
        setOpenmail(!openmail);
      }
    const SendMail = async()=>{
        let user = JSON.parse(localStorage.getItem("erkProfile"));
        axiosInstance.get("/api/user/"+user.id).then((data)=>{
          console.log(data.data);
          axiosInstance.post("/api/mail/sent/UsertoAdmin",{
            name:data.data.name,
            email:data.data.email,
            text:text,
            subject:subject
          }).then((data)=>{
            message.success(dil=="tm"?"Üstünlikli":"Успешно")
            setText("");
            setSubject("");
          }).catch((err)=>{
            console.log(err);
          })
        }).catch((err)=>{
          console.log(err);
        })
      }
    
    return (
        <React.Fragment>
        <Drawer
            title={dil=="tm"?"Mail bilen habarlaş":"Контактная почта"}
            visible={openmail}
            onClose={()=>Mail()}
            placement="top"
            height="315px"
            >
               <div className="header-mail">
                      <div className="header-input" style={{marginTop:"-15px"}}>
                        <Input
                        style={{height:"50px",lineHeight:"50px",width:"80%"}}
                        styleDiv={{height:"50px",width:"100%"}}
                        styleP={{height:"50px",lineHeight:"50px",width:"20%"}}
                        addBefore={dil=="tm"?"Tema":"Тема"}
                        // placeholder={dil=="tm"?"Beýleki hyzamatlar":"Другие услуги"}
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                        // value={baha} onChange={(e)=>setBaha(e.target.value)}
                    />
                    </div>
                    {/* <Input style={{marginTop:"-10px",marginBottom:"10px"}} addonBefore="Subject"  /> */}
                    
                    <TextArea
                    value={text} onChange={(e)=>setText(e.target.value)}
                     placeholder={dil=="tm"?"Habar:":"Сообщение"} style={{border:"none",borderRadius:"12px",marginTop:"30px"}} id="text" rows="5" />
                    
                    <div className="zayawka-input">
                    <Button onClick={()=>SendMail()} style={{height:"50px",width:"100%",marginTop:"10px"}} > {dil=="tm"?"Ugrat":"Отправить"} </Button>
                   </div>
                    
               </div>
            </Drawer>
        <div className="harytgozlemek-page">
            <div  className="harytGozlemek-first">
                <h2>{dil=="tm"?"Siz şeýle-de kompaniýamyzyň beýleki hyzmatlaryndan peýdalanyp bilersiňiz:":"Вы также можете воспользоваться другими услугами нашей компании: "}</h2>
                <p style={{textAlign:"left",marginLeft:"2px"}}>
                {dil=="tm"?"- 	Hytaýda kärhana gitmek, biznes syýahatyny guramak ":"-	Сопровождение на фабриках, деловых встречах, и др."}<br/>
                {dil=="tm"?"-  Hytaýda hil gözegçiligi we kärhana barlagy":"-	Контроль качества и инспекции фабрик"}  <br/>
                {dil=="tm"?"-  Hytaýda sergilere gatnaşmak":"-	Посещение выставок в Китае"} <br/>
               {dil=="tm"?"-  Hytaýa ýörite mebel söwdasy üçin syýahatlar":"-	Мебельный тур в Китай"}  <br/>
                {dil=="tm"?"-  Ammar hyzmatlary":"-	Складские услуги"}    <br/>
                {dil=="tm"?"-  Hytaýda petekleri we myhmanhanalary bronlamak":"-	Бронирование билетов и гостиниц в Китае "}  <br/>
                {dil=="tm"?"-  Hytaýda terjime hyzmatlary":"-	Переводческие услуги в Китае"}   <br/>
                {dil=="tm"?"-  Sergilere wirtual gatnaşmak":"-	Виртуальное посещение выставок"}    <br/>
                {dil=="tm"?"- 	Hytaýly haryt üpjün edijileri bilen meseleleri telefon arkaly çözmek":"-	Решение вопросов с китайским поставщиком по телефону "}
         
                </p>
                <p style={{textAlign:"left"}}>
                    {dil=="tm"?"Eger hyzmatlarymyz sizi gyzyklandyrýan bolsa, bize ýüz tutuň, biz bolsa siziň teklipleriňizi göz öňünde tutmak bilen ähli şertler we nyrhlar babatynda ara alyp maslahatlaşarys."
                    :"Если Вас заинтересовали наши услуги, обращайтесь к нам, и мы обговорим все условия и цены с учетом ваших пожеланий."}
                </p>
                <div className="indikiButton">
                    <Button style={{width:"45%"}} onClick={()=>Indiki()} >{dil=="tm"?"Yza":"Назад"}</Button>
                    <Button style={{width:"45%"}} onClick={()=>Mail()} >{dil=="tm"?"Zaýawka goý ":"Подать заявление"}</Button>
                
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Gozlemek;