import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Button from "../../components/button";
import Input from "../../components/input";
import "./harytGozlemek.css";
import upload from "../../img/upload.png"
import { axiosInstance } from "../../utils/axiosIntance";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { ErkContext } from "../../context/Condex";

const Gozlemek = ()=>{
    const location = useLocation();
    const history = useHistory();

    const [img1,setImg1] = useState();
    const [img2, setImg2] = useState();
    const [img3, setImg3] = useState();
    const [salgylar, setSalgylar] = useState();
    const [talaplar, setTalaplar] = useState();
    const [baha, setBaha] = useState();
    const [sany, setSany] = useState();
    const [product_name, setProduct_name] = useState();
    const [mohlet, setMohlet] = useState();
    const [user,setUser] = useState();
    const [active,setActive]= useState(false);
    const [check,setCheck] = useState(false);
    const [checked,setChecked] = useState(false);

    useEffect(()=>{
        console.log(location.pathname)
        console.log(location.state)
        setUser(JSON.parse(localStorage.getItem("erkProfile")))
    },[])

    useEffect(()=>{
        if(product_name && baha && sany){
            setActive(true);
        }
    },[mohlet,product_name,baha,sany])
    const Indiki = ()=>{
        document.getElementById("first").style.display="none";        
        document.getElementById("second").style.display="block";

    }
    const Gozle = async()=>{
        setCheck(true);
        
            let ordered_date = new Date();
            if(product_name!="" && product_name!=null && sany!="" && sany!=null && baha!="" && baha!=null ){
                setChecked(true);
            }else{
                setChecked(false)
            }

            let formData = new FormData();
            if(img1){
            formData.append("surat1",img1);}
            if(img2){
            formData.append("surat2",img2);}
            if(img3){
            formData.append("surat3",img3);}
            if(product_name){
            formData.append("product_name",product_name); } 
            if(sany)          {
            formData.append("sany",sany);}
            if(baha){
            formData.append("baha",baha);}
            if(mohlet){
            formData.append("onumchilik_mohleti",mohlet);}
            if(salgylar){
            formData.append("saytlar",salgylar);}
            if(talaplar){
            formData.append("goshmachaTalaplar",talaplar);}


     checked &&  axiosInstance.post("/api/gozleg/create/"+user.id,formData).then((data)=>{
            console.log(data.data);
            message.success(dil=="tm"?"Üstünlikli":"Успешно");
            setSalgylar();
            setTalaplar();
            setBaha();
            setSany();
            setProduct_name();
            setMohlet();
            history.push("/success")
        }).catch((err)=>{
            console.log(err);
            message.warn(dil=="tm"?"Maglumatlary doly giriziň!":"Введите данные полностью!")
        })
    }

    const {dil} = useContext(ErkContext);

    return (
        <div className="harytgozlemek-page">
            <div id="first" className="harytGozlemek-first">
                <h2>{dil=="tm"?"Haryt gözlemek":"Поиск товара"}</h2>
                <p>
                {dil=="tm"?"Hytaý bilen biznese başlamak isleýänler ilki bilen harydy ýa-da haryt üpjün edijilerini gözleýärler. Siziň tarapyňyzdan diňe özüňizi gyzyklandyrýan harytlar barada giňişleýin beýan etmeklik ýeterlikdir. Biziň hünärmenlerimiz gysga wagtyň içinde zerur harytlary tapýarlar, maglumat toplaýarlar, bahalar hem-de öndüriji barada jikme-jik hasabat düzüp üpjün edijiler bilen habarlaşýarlar."
                :"Для тех, кто только собирается начать бизнес с Китаем, первым шагом является поиск товара или поставщика. Вам достаточно предоставить детальное описание интересующего товара - наши специалисты в кратчайшие сроки найдут необходимый товар, соберут информацию и свяжутся с поставщиком, составив детальный отчет о ценах и производителе."}    
                </p>
                <div className="indikiButton">
                    <Button onClick={()=>Indiki()} >{dil=="tm"?"Indiki":"Дальше"}</Button>
                </div>
            </div>
            <div id="second" className="harytGozlemek-second">
                <div className="zayawka-input">
                    {check && (product_name=="" || product_name==null ) ?   <Input
                    style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                    addBefore={dil=="tm"?"Harydyň ady":"Наименование товара:"}
                    placeholder={dil=="tm"?"Haryt":"Товары"}
                    value={product_name} 
                    onChange={(e)=>setProduct_name(e.target.value)}
                />
                :<Input
                addBefore={dil=="tm"?"Harydyň ady":"Наименование товара:"}
                placeholder={dil=="tm"?"Haryt":"Товары"}
                value={product_name} 
                onChange={(e)=>setProduct_name(e.target.value)}
            />}
                </div>
                <div className="zayawka-input">
                   { check && (sany=="" || sany==null ) ?   <Input
                    style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                    addBefore={dil=="tm"?"Harydyň sany":"Кол-во товара"}
                    placeholder="0"
                    value={sany} 
                    onChange={(e)=>setSany(e.target.value)}
                />
                : <Input
                addBefore={dil=="tm"?"Harydyň sany":"Кол-во товара"}
                placeholder="0"
                value={sany} 
                onChange={(e)=>setSany(e.target.value)}
            />}
                </div>
                <div className="zayawka-input">
                    {check && (baha=="" || baha==null ) ?   <Input
                    style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                    addBefore={dil=="tm"?"Bahasy":"Сумма"}
                    placeholder="0 m"
                    value={baha} 
                    onChange={(e)=>setBaha(e.target.value)}
                />
                :<Input
                addBefore={dil=="tm"?"Bahasy":"Сумма"}
                placeholder="0 m"
                value={baha} 
                onChange={(e)=>setBaha(e.target.value)}
            />}
                </div>
                <div className="zayawka-input">
                    {check && (mohlet=="" || mohlet==null ) ?   <Input
                    style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                    addBefore={dil=="tm"?"Önümçilik möhleti":"Сроки изготовления"}
                    placeholder="12-08-2021"
                    type="date"
                    // value={mohlet}
                    onChange={(e)=>setMohlet(e.target.value)}
                />
                :<Input
                addBefore={dil=="tm"?"Önümçilik möhleti":"Сроки изготовления"}
                placeholder="12-08-2021"
                type="date"
                // value={mohlet}
                onChange={(e)=>setMohlet(e.target.value)}
            />}
                </div>
                
                <div className="zayawka-input">
                    <Input
                    addBefore={dil=="tm"?"Goşmaça talaplar":"Дополнительные"}
                    placeholder={dil=="tm"?"talaplar...":"требования"}
                    value={talaplar} 
                    onChange={(e)=>setTalaplar(e.target.value)}
                />
                </div>
                <div className="zayawka-input">
                    <p>{dil=="tm"?"Sizi gyzyklandyrýan önümiň saýtlarynyň salgysy:":"Адрес интересующих вас товарных сайтов"}</p>
                    <input
                    className="harytGozlemek-input"
                    placeholder={dil=="tm"?"Salgylar...":"Адрес сайтов..."}
                    value={salgylar} 
                    onChange={(e)=>setSalgylar(e.target.value)}
                />
                </div>
                <div className="upload-input">
                    <Input
                    addBefore={dil=="tm"?"Harydyň suraty":"Изображение"}
                    id="file-upload-button"
                    type="file"
                    onChange={(e)=>setImg1(e.target.files[0])}
                    />
                    <h1>{img1 && (dil=="tm"?"Ýüklendi!":"Загружено")}</h1>
                    <label for="file-upload-button">
                        <img for="file-upload-button" src={upload} alt="upload"/>
                    </label>
                </div>
                <div className="upload-input">
                    <Input
                    addBefore={dil=="tm"?"Harydyň suraty 2":"Изображение 2"}
                    id="file-upload-button2"
                    type="file"
                    onChange={(e)=>setImg2(e.target.files[0])}
                    />
                    <h1>{img2 && (dil=="tm"?"Ýüklendi!":"Загружено")}</h1>
                    <label for="file-upload-button2">
                        <img for="file-upload-button2" src={upload} alt="upload"/>
                    </label>
                </div>
                <div className="upload-input">
                    <Input
                    addBefore={dil=="tm"?"Harydyň suraty 3":"Изображение 3"}
                    id="file-upload-button3"
                    type="file"
                    onChange={(e)=>setImg3(e.target.files[0])}
                    />
                    <h1>{img3 && (dil=="tm"?"Ýüklendi!":"Загружено")}</h1>
                    <label for="file-upload-button3">
                        <img for="file-upload-button3" src={upload} alt="upload"/>
                    </label>
                </div>
                <div className="zayawka-input" style={{marginBottom:"10px"}}>
                    {active && <Button onClick={()=>Gozle()}>{dil=="tm"?"Gözle":"Поиск"}</Button>}
                </div>
            </div>
        </div>
    )
}

export default Gozlemek;