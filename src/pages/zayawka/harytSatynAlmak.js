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

    useEffect(()=>{
        // console.log(location.pathname)
        // console.log(location.state)
        if(dil=="tm"){
            setSubject("Haryt satyn almak")
          }else{
              setSubject("Выкуп товара ");
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
         let user =await JSON.parse(localStorage.getItem("erkProfile"));
      await  axiosInstance.get("/api/user/"+user.id).then((data)=>{
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
    
    const {dil} = useContext(ErkContext);
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
                <h2>{dil=="tm"?"Haryt satyn almak":"Выкуп товара "}</h2>
                <p>{
                dil=="tm"?"Eger Size sargyt üçin özbaşdak töleg geçirmek oňaýsyz bolsa, töleg geçirmekligiň hemme aladasyny biziň üstümize ýükläp  bilersiňiz. Biz fabrikden ýükleri alýarys we olary ugradylýan wagtyna çenli öz ammarlarymyzda saklaýarys. Hytaýdaky haryt üpjün edijiňizden, Alibaba.com we beýleki internet platformalardan satyn alyp bermek hyzmatymyzyň berilmegi boýunça ýüz tutanyňyzda, Siz harytlaryň kemçilikli, hiliniň tapawut bermegi ýaly garaşylmadyk ýagdaýlardan doly goragly bolýarsyňyz. Goşmaça hyzmatymyzdan peýdalansaňyz, Siziň talabyňyza görä ýükleriň mukdary we hili boýunça laýyklylygyny barlamaga ýardam berip bilýäris. "   
                    :"Если Вам неудобно самостоятельно оплачивать заказ, то всю рутину по выкупу партии Вы можете переложить на нас. Мы поможем вам выкупить с китайских интернет платформ или заберем партию с фабрики  и будем хранить ее на собственном складе до отправки. Обращаясь к услугам посредника при покупках от китайских поставщиков, с Alibaba.com и других интернет платформ, Вы полностью защищены от сюрпризов в виде брака, пересортицы. По вашему требованию, за дополнительную услугу мы поможем Вам сделать проверку на соответствие количеству и качеству."
            }</p>
                <div className="indikiButton" >
                    <Button style={{width:"45%"}} onClick={()=>Indiki()} >{dil=="tm"?"Yza":"Назад"}</Button>
                    <Button style={{width:"45%"}} onClick={()=>Mail()} >{dil=="tm"?"Zaýawka goý ":"Подать заявление"}</Button>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Gozlemek;