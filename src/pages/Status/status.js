import {React, useContext, useEffect, useState} from  "react";
import { message,Drawer,Carousel } from 'antd';
import {useHistory} from 'react-router-dom';
import "antd/dist/antd.css";

import "./status.css";
import HeaderSurat from "../../img/map.svg"
import yza from "../../img/yza.svg";
import restart from "../../img/restart.svg";

import track from "../../img/track.svg";
import tkmAmbar from "../../img/tkmambar.svg";
import gowshurmaUgrady from "../../img/gowshurmaUgrady.svg";
import yukUgradyldy from "../../img/yukUgradyldy.svg";
import ambaraGeldi from "../../img/ambaraGeldi.svg";
import gelmegineGarashylyar from "../../img/gelmegineGarashylyar.svg";
import gemegineGarashylyarGreen from "../../img/gelmegineGarashylyarGreen.svg";
import ammaraGeldiGreen from "../../img/ammarageldiGreean.svg";
import yukUgradyldyGreen from "../../img/yukunugradyldyGreen.svg";
import yoldaGreen from "../../img/yoldaGreen.svg";
import turkmenistanaGeldiGreen from "../../img/turkmenistanaGeldiGreen.svg";
import { axiosInstance, BASE_URL } from "../../utils/axiosIntance";
import { ErkContext } from "../../context/Condex";



const Status = (props)=>{
    const history = useHistory()
    const [surat,setSurat] = useState(false);
    const [data,setData] = useState();
    const ShowSurat = ()=>{
        setSurat(!surat);
    }

    const Gowshuryldy = (id)=>{
        axiosInstance.patch("/api/sargyt/update/delivered/"+id).then((data)=>{
            message.success(dil=="tm"?"Üstünlikli":"Успешно")
            history.push("/success")
        }).catch((err)=>{
            console.log(err);
        })
    }

    const Restart = ()=>{
        if(localStorage.getItem("trackId"))
        getData(JSON.parse(localStorage.getItem("trackId")));
    }

    useEffect(()=>{
        if(localStorage.getItem("trackId"))
        getData(JSON.parse(localStorage.getItem("trackId")));
    },[])
    const getData = async(id)=>{
        axiosInstance.get("/api/sargyt/"+id).then((data)=>{
            console.log(data.data);
            setData(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const {dil} = useContext(ErkContext);
    return(
        <div className="status-page">
            <Drawer
            title={dil=="tm"?"Ýüküň Suraty":"Фото груза"}
            visible={surat}
            onClose={ShowSurat}
            placement="top"
            height="60vh"
            >
                <Carousel autoplay>
                    {data && data.product_image &&  <div>
                     <img style={{width:"100%",objectFit:"contain",marginBottom:"20px"}} src={BASE_URL+"/"+data.product_image} alt="Ýüküň Suraty"/>
                    </div>}
                    {data && data.surat2 &&<div>
                     <img style={{width:"100%",objectFit:"contain"}} src={BASE_URL+"/"+data.surat2} alt="Ýüküň Suraty"/>
                    </div>}
                    {data && data.surat3 && <div>
                     <img style={{width:"100%",objectFit:"contain"}} src={BASE_URL+"/"+data.surat3} alt="Ýüküň Suraty"/>
                    </div>}
                    {data && data.surat4 &&  <div>
                     <img style={{width:"100%",objectFit:"contain",marginBottom:"20px"}} src={BASE_URL+"/"+data.surat4} alt="Ýüküň Suraty"/>
                    </div>}
                    {data && data.surat5 &&<div>
                     <img style={{width:"100%",objectFit:"contain"}} src={BASE_URL+"/"+data.surat5} alt="Ýüküň Suraty"/>
                    </div>}
                    {data && data.surat6 && <div>
                     <img style={{width:"100%",objectFit:"contain"}} src={BASE_URL+"/"+data.surat6} alt="Ýüküň Suraty"/>
                    </div>}
                    {
                        (data && !data.product_image && !data.surat2 && !data.surat3) && <h1>{dil=="tm"?"Surat ýok!":"Нет картинки!"}</h1>
                    }
                </Carousel>

            </Drawer>
            <div className="status">
                <div onClick={()=>{history.push("/tradings")}} className="yza">
                    <img  src={yza} alt="yza"/>
                </div>
                <div onClick={()=>Restart()} className="restart">
                    <img className="restartButton"  src={restart} alt="restart"/>
                </div>
                <img className="header" src={HeaderSurat} alt="header Surat"/>
                <div className="ugradylyanYoly">
                    <span>{dil=="tm"?"Ugradyljak ýoly:":"Путь отправки:"}</span>
                    {data && data.yol==1 && <p>{dil=="tm"?"Deňiz ýoly":"Морские перевозки"}</p>}
                    {data && data.yol==2 && <p>{dil=="tm"?"Howa ýoly":"Авиаперевозка"}</p>}
                    {data && data.yol==3 && <p>{dil=="tm"?"Demirýoly":"Ж-д перевозки"}</p>}
                    {data && data.yol==4 && <p>{dil=="tm"?"Awtoulag ýoly":"Автоперевозка"}</p>}
                </div>
                <div className="barmalyWagt">
                    <span>{dil=="tm"?"Eltip berme senesi:":"Дата доставки"}</span>
                    <p>{data && data.gowshurylmaly_date}</p>
                </div>
                <div className="harytStatus">
                    <h1>{dil=="tm"?"Siziň sargydyňyz häzirki wagtda:":"Ваш заказ в данное время:"} <span> {data && data.yukHazir}</span></h1>
                    <div>
                        <p>{dil=="tm"?"Ýüküň agramy:":"Вес заказа:"} {data && data.kg} kg</p>
                        <p>{dil=="tm"?"Ýüküň guty sany:":"Количество коропок:"} {data && data.guty_sany}</p>
                    </div>
                    <div>
                        <p>{dil=="tm"?"Ýüküň  göwrümi:":"Объем заказа:"} {data && data.m3} m3</p>
                        <p onClick={ShowSurat} className="suratynyGor">{dil=="tm"?"Ýüküň suradyny gör":"Посмотреть изображение груза"}</p>
                    </div>
                </div>
            </div>
            <div className="statusCards">
                <div className={data && data.statusId==1?"statusCardRight":"statusCard"}>
                        <img style={{marginRight:"22px"}} src={data && data.statusId>1?gemegineGarashylyarGreen:gelmegineGarashylyar} alt="statusIcon"/>
                        <div>
                            <p className="p" style={{width:"100%"}}>
                                {data && data.statusId<=1 &&<p className="pp" style={{color:"#252525",marginRight:"0px",width:"fit-content"}}>{dil=="tm"?"Gelmegine garaşylýar":"Ожидается прибытия"}</p>}
                                {data && data.statusId>1 && <p className="pp" style={{color:"#038117",marginRight:"0px",width:"fit-content"}}>{dil=="tm"?"Gelmegine garaşylýar":"Ожидается прибытия"}</p>}
                                <p className="pp" style={{marginLeft:"0px",width:"fit-content",marginRight:"0px"}}>
                                    {data && data.statusId==1? JSON.stringify(data.status_date).slice(1,11)+" "+JSON.stringify(data.status_date).slice(12,17):null}
                                    </p>
                            </p>
                            <p style={{color:"#BABABA"}}>
                            {dil=="tm"?"Siziň ýüküňiz ammara gelmegine garaşylýar!":"Ожидается, что ваш багаж прибудет на склад!"}
                            </p>
                        </div>
                </div>
                <div className={data && data.statusId==2?"statusCardRight":"statusCard"}>
                        <img style={{marginRight:"22px"}} src={data && data.statusId>2?ammaraGeldiGreen:ambaraGeldi} alt="statusIcon"/>
                        <div>
                            <p className="p">
                                {data && data.statusId<=2 && <p className="pp" style={{color:"#252525"}}>{dil=="tm"?"Ammara geldi":"Прибыл на склад"}</p>}
                                {data && data.statusId>2 && <p className="pp" style={{color:"#038117"}}>{dil=="tm"?"Ammara geldi":"Прибыл на склад"}</p>}
                                <p className="pp">
                                {data && data.statusId==2? JSON.stringify(data.status_date).slice(1,11)+" "+JSON.stringify(data.status_date).slice(12,17):null}
                                    </p>
                            </p>
                            <p>
                            {dil=="tm"?"Siziň ýüküňiz ammara geldi we ugradylmagyna taýýarlanylýar!":"Ваш багаж прибыл на склад и готовится к отправке!"}
                            </p>
                        </div>
                </div>
                <div className={data && data.statusId==3?"statusCardRight":"statusCard"}>
                        <img style={{marginRight:"22px"}} src={data && data.statusId>3?yukUgradyldyGreen:yukUgradyldy} alt="statusIcon"/>
                        <div>
                            <p className="p">
                                {data && data.statusId<=3 && <p className="pp" style={{color:"#252525"}}>{dil=="tm"?"Ýüküňiz ugradyldy!":"Ваш груз отправлен!"}</p>}
                                {data && data.statusId>3 && <p className="pp" style={{color:"#038117"}}>{dil=="tm"?"Ýüküňiz ugradyldy!":"Ваш груз отправлен!"}</p>}
                                <p className="pp">
                                {data && data.statusId==3? JSON.stringify(data.status_date).slice(1,11)+" "+JSON.stringify(data.status_date).slice(12,17):null}
                                    </p>
                            </p>
                            <p>
                              {dil=="tm"?"Siziň sargydyňyz Hytaýdan Turkmenistana ugradyldy!":"Ваш заказ отправлен из Китая в Туркменистан!"}
                            </p>
                        </div>
                </div>
                <div className={data && data.statusId==4?"statusCardRight":"statusCard"}>
                        <img src={data && data.statusId>4?yoldaGreen:track} alt="statusIcon"/>
                        <div>
                            <p className="p">
                                {data && data.statusId<=4 && <p className="pp" style={{color:"#252525"}}>{dil=="tm"?"Ýolda":"В пути!"}</p>}
                                {data && data.statusId>4 && <p className="pp" style={{color:"#038117"}}>{dil=="tm"?"Ýolda":"В пути!"}</p>}
                                <p className="pp">
                                {data && data.statusId==4? JSON.stringify(data.status_date).slice(1,11)+" "+JSON.stringify(data.status_date).slice(12,17):null}
                                    </p>
                            </p>
                            <p>
                            {dil=="tm"?"Siziň ýüküňiz häzirki wagtda deňiz kenaryna golaýlaýa!":"Ваш багаж приближается к пляжу!"}
                            </p>
                        </div>
                </div>
                <div className={data && data.statusId==5?"statusCardRight":"statusCard"}>
                        <img style={{marginRight:"22px"}} src={data && data.statusId>5?turkmenistanaGeldiGreen:tkmAmbar} alt="statusIcon"/>
                        <div>
                            <p className="p">
                                {data && data.statusId<=5 && <p className="pp" style={{color:"#252525"}}>{dil=="tm"?"Türkmenistanyň ammaryna geldi":"Прибыл на склад в Туркменистане"}</p>}
                                {data && data.statusId>5 && <p className="pp" style={{color:"#038117"}}>{dil=="tm"?"Türkmenistanyň ammaryna geldi":"Прибыл на склад в Туркменистане"}</p>}
                                <p className="pp">
                                {data && data.statusId==5? JSON.stringify(data.status_date).slice(1,11)+" "+JSON.stringify(data.status_date).slice(12,17):null}
                                    </p>
                            </p>
                            <p>
                            {dil=="tm"?"Siziň ýüküňiz ülkämize gowuşdy!":"Ваш багаж прибыл в нашу страну!"}
                            </p>
                        </div>
                </div>
                <div className={data && data.statusId==6?"statusCardRight":"statusCard"}>
                        <img  src={gowshurmaUgrady} alt="statusIcon"/>
                        <div>
                            <p className="p">
                                <p className="pp" style={{color:"#252525"}}>{dil=="tm"?"Gowşurma nokadyna ugradyldy":"Отправлено в пункт доставки!"}</p>
                                <p className="pp">
                                {data && data.statusId==6? JSON.stringify(data.status_date).slice(1,11)+" "+JSON.stringify(data.status_date).slice(12,17):null}
                                    </p>
                            </p>
                            <p>
                            {dil=="tm"?"Siziň ýüküňiz ammardan size tarap ugradyldy!":"Ваш багаж отправлен вам со склада!"}
                            </p>
                        </div>
                </div>
               {data && data.statusId==6 && <button onClick={()=>Gowshuryldy(data.id)} className="buttonGowushdy">
                       {dil=="tm"?"Sargydym gowuşdy":"Мой заказ прибыл"}
                </button>}
            </div>
        </div>
    )
}

export default Status;