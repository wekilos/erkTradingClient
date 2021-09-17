import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./header.css";
import { Layout, Menu, Dropdown, Drawer, message,} from "antd";

import {LogoutOutlined ,MailOutlined,PhoneOutlined,GlobalOutlined} from "@ant-design/icons";
import { logout } from "../utils/index";
import logo from "../img/logo.png";
import phone from "../img/phone.png";
import mail from "../img/mail.png";
import dilImg from "../img/dil.png"
import logoutImg from "../img/logout.png";
import { Link, useHistory } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
// import 

import Button from "../components/button";
import Input from "../components/input";
import { axiosInstance } from "../utils/axiosIntance";
import {ErkContext} from "../context/Condex";




const profile = JSON.parse(localStorage.getItem("erkProfile"));

const  Header=()=> {
  // 
  const {dil,ChangeDil} = useContext(ErkContext);
  
    const [openphone,setOpenphone] = useState(false);
    const [openmail,setOpenmail] = useState(false);
    const [phones,setPhones] = useState([]);
    const [text,setText] = useState();
    const [subject,setSubject] = useState();
    const history = useHistory();
    const Mail = ()=>{
      setOpenmail(!openmail);
    }
    const Phone =()=>{
        setOpenphone(!openphone);
    }

    useEffect(()=>{
      getData()
    },[]);
    const getData = async()=>{
      axiosInstance.get("/api/configs").then((data)=>{
        console.log(data.data);
        setPhones(data.data);
      }).catch((err)=>{
        console.log(err);
      })
    }

    const logOut = ()=>{
      localStorage.removeItem("erkProfile");
      window.location.href="/login";
      message.success(dil=="tm"?"Siz ulgamdan çykdyňyz!":"Вы вышли из системы!");
    }

    const profile_menu = (
      <Menu>
        <Menu.Item>
          <a  onClick={()=>logOut()} rel="noopener noreferrer">
            <LogoutOutlined /> {dil=="tm"?"Ulgamdan çyk":"Выйти"}
          </a>
        </Menu.Item>
      </Menu>
    );

    const PhoneCall = (phone)=>{
      console.log(phone);
    }

    useEffect(()=>{
        getUser(JSON.parse(localStorage.getItem("erkProfile")));
    },[])
    const getUser = (id)=>{
      axiosInstance.get("/api/user/"+id).then((data)=>{
        console.log(data.data)
      }).catch((err)=>{
        console.log(err);
      })
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

    const dil_menu = (
      <Menu>
        <Menu.Item onClick={()=>ChangeDil("tm")}>
          <a href="#"  rel="noopener noreferrer">
           {dil=="tm"?"Turkmen":"Туркмен"}
          </a>
        </Menu.Item>
        <Menu.Item onClick={()=>ChangeDil("ru")}>
          <a href="#"  rel="noopener noreferrer">
             {dil=="tm"?"Rus":"Русский"}
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      
      <div
        className="site-layout-background header"
        style={{ position: "fixed" }}
      >
        <Drawer
            title={dil=="tm"?"Telefon bilen habarlaş":"Связаться с телефоном"}
            visible={openphone}
            onClose={()=>Phone()}
            placement="top"
            height="250px"
            className="telofon"
            >
               <div>
                 {
                   phones && phones.map((phone)=>{
                     return <div style={{width:"100%",display:"inline-flex",justifyContent:"space-evenly",alignItems:"center",marginBottom:"15px"}}>
                       <p style={{fontSize:"18px",marginBottom:"0px"}}>+{phone.phoneNumber}</p>
                       <a href={`tel:+${phone.phoneNumber}`}><Button onClick={()=>PhoneCall(phone.phoneNumber)} style={{height:"25px",width:"80px",fontSize:"16px",padding:"10px",lineHeight:"0px"}}>{dil=="tm"?"Jaň et":"Вызов"}</Button></a>
                     </div>
                   })
                 }

               </div>

            </Drawer>
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
                        placeholder={dil=="tm"?"Nusga":"Например"}
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                        // value={baha} onChange={(e)=>setBaha(e.target.value)}
                    />
                    </div>
                    {/* <Input style={{marginTop:"-10px",marginBottom:"10px"}} addonBefore="Subject"  /> */}
                    
                    <TextArea
                    value={text} onChange={(e)=>setText(e.target.value)}
                     placeholder={dil=="tm"?"Habar:":"Сообщение"}
                      style={{border:"none",borderRadius:"12px",marginTop:"30px"}} id="text" rows="5" />
                    
                    <div className="zayawka-input">
                    <Button onClick={()=>SendMail()} style={{height:"50px",width:"100%",marginTop:"10px"}} > {dil=="tm"?"Ugrat":"Отправить"} </Button>
                   </div>
                    
               </div>
            </Drawer>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icons">
          <div className="phone">
              <div
                className="ant-dropdown-link"
                onClick={()=>Phone()}
              >
               <PhoneOutlined  className="headerIcon"  />
                   {/* <img  className="headerIcon" src={phone} alt="phone" /> */}
              </div>
          </div>
          <div className="email">
              <div
                className="ant-dropdown-link"
                onClick={()=>Mail()}
              >
                  {/* <img className="headerIcon mailIcon" src={mail} alt="logout" /> */}
                  <MailOutlined className="headerIcon mailIcon" />
              </div>
          </div>

          <div className="dil">
            <Dropdown overlay={dil_menu}>
              <div
                className="ant-dropdown-link"
                // onClick={()=>logout()}
              >
                 {/* <img className="headerIcon" src={dilImg} alt="logout" /> */}
                 <GlobalOutlined className="headerIcon"/>
              </div>
            </Dropdown>
          </div>

          { profile && <div className="logout">
            <Dropdown overlay={profile_menu}>
              <div
                className="ant-dropdown-link"
               
              >
                {/* <img className="headerIcon" src={logoutImg} alt="logout" /> */}
                <LogoutOutlined className="logoutIcon"/>
              </div>
            </Dropdown>
          </div>}
        </div>
        
      </div>
    );
  }
  export default Header;
