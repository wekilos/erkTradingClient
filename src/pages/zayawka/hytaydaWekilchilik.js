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

    const {dil} = useContext(ErkContext);
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
            setSubject("Hytaýda wekilçilik")
          }else{
              setSubject("Представительство в Китае");
               }
    },[]);
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
                <h2>{dil=="tm"?"Hytaýda wekilçilik":"Представитель в Китае"}</h2>
                <p>{
                dil=="tm"?"Biziň kompaniýamyz Hytaýda biznesi ýöretmeklige ýardam berýär we Hytaý Halk Respublikasynyň çäginde Siziň bähbitleriňiz üçin çykyş edip bilýär. Eger-de Sizi hytaý öndürijileri, zawodlary we kärhanalary bilen  hemişe we yzygiderli işlemeklik gyzyklandyrýan bolsa, onda bu babatda üstünlik gazanmak üçin Size Hytaýda öz wekiliňiziň (agendiňiziň) bolmagy zerur bolýar. Hünärmenimiz şertleşik baglaşmak boýunça alnyp barylýan işleriň dowamynda ýüze çykyp biljek meseleleri dessine çözmeklige kömek eder."         
                :"Наша компания оказывает содействие в ведении бизнеса с Китаем и предоставлении Ваших интересов на территории КНР.  Если Вы заинтересованны в постоянной, регулярной работе с китайскими производителями, заводами, фабриками, Вам, для успеха потребуется свой представитель в Китае (агент). Такой специалист оперативно поможет разрешить вопросы, возникающие в ходе сделки."}</p>
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