import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router";

import { message } from "antd";

import "./zayawkaUgratmak.css";
import {axiosInstance} from "../../utils/axiosIntance";
import Input from "../../components/input";
import Button from "../../components/button";
import upload from "../../img/upload.png"
import { ErkContext } from "../../context/Condex";
import {LoadingOutlined} from '@ant-design/icons';

const Ugratmak = ()=>{

    const {dil} = useContext(ErkContext);
    const history = useHistory();

    const [name,setName] = useState();
    const [kabulname,setKabulname] = useState();
    const [phone,setPhone] = useState("+9936");
    const [harytname,setHarytname] = useState();
    const [baha,setBaha] = useState();
    const [m3,setM3] = useState();
    const [kg,setKg] = useState();
    const [guty,setGuty] = useState();
    const [yol,setYol] = useState();
    const [img1,setImg1] = useState();
    const [img2,setImg2] = useState();
    const [img3,setImg3] = useState();
    const [user,setUser] = useState();
    const [check,setCheck] = useState(false);
    const [checked,setChecked] = useState(false);
    const [ loading, setLoading] = useState(false);
   const location = useLocation();
   useEffect(() => {
    //   console.log(location.pathname); // result: '/secondpage'
      // console.log(location.search); // result: '?query=abc'
    //   console.log("YolId",location.state.yolId); // result: 'some_value'
      if(location && location.state && location.state.yolId){
      setYol(location.state.yolId);
      }else{
          setYol(JSON.parse(localStorage.getItem("yolId")))
      }
   }, [location]);
   useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem("erkProfile")));
      console.log("user",user);
   },[])

   const Ugrat = async()=>{
    //    message.success(yol)
    setCheck(true);
    let user = JSON.parse(localStorage.getItem("erkProfile"));
    console.log(user);
        if((harytname!="" && harytname!=null ) && (phone!="+9936" && phone!=null )&&(kabulname!="" && kabulname!=null )&&(name!="" && name!=null )&&(guty!="" && guty!=null )&&(m3!="" && m3!=null )&&(kg!="" && kg!=null ) &&(baha!="" && baha!=null )){
            setChecked(true);
        }else{
            setChecked(false);
        }

        let formData = new FormData();
        if(img1){
        formData.append("surat1",img1);}
        if(img2){
        formData.append("surat2",img2);}
        if(img3){
        formData.append("surat3",img3);}
        if(yol){
        formData.append("yol",yol);}
        if(name){
        formData.append("ugradyjy_ady",name);}
        if(kabulname){
        formData.append("kabulediji_ady",kabulname);}
        if(phone){
        formData.append("phoneNumber",phone);}
        if(harytname){
        formData.append("product_name",harytname);}
        if(guty){
        formData.append("guty_sany",guty);}
        if(kg){
        formData.append("kg",kg);}
        if(m3){
        formData.append("m3",m3);}
        if(baha){
        formData.append("total_price",baha);}

        checked &&  setLoading(true);
  checked && axiosInstance.post("/api/sargyt/create/"+user.id,formData).then((data)=>{
        console.log(data.data);
        message.success(dil=="tm"?"Üstünlikli":"Успешно");
        history.push("/success")
        setName();
        setKabulname();
        setPhone();
        setHarytname();
        setGuty();
        setKg();
        setM3();
        setBaha();
        setImg1(null);
        setImg2(null);
        setImg3(null);
        setLoading(false)
    }).catch((err)=>{
        console.log("errorr createing sargyt",err);
        message.error(dil=="tm"?"Maglumatlary dogry we doly giriziň!":"Введите информацию правильно и полностью!")
        setLoading(false)
    })
   }


    return( 
        <React.Fragment>

        {loading && <LoadingOutlined style={{fontSize:"42px",color:"green",textAlign:"center",marginTop:"35vh"}}/>}
          
    {!loading && <div className="zayawka-ugratmak">
            <h2>{dil=="tm"?"Ýük ugratmak üçin zaýawka":"Заявка на отправку груза"}</h2>
            <div className="zayawka-input">
                {check && (name=="" || name==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore={dil=="tm"?"Ugradyjynyň ady":"Имя отправителя:"}
                placeholder={dil=="tm"?"Ady Familýasy":"Имя Фамилия"}
                value={name} onChange={(e)=>setName(e.target.value)}
            />
            :<Input
            addBefore={dil=="tm"?"Ugradyjynyň ady":"Имя отправителя:"}
            placeholder={dil=="tm"?"Ady Familýasy":"Имя Фамилия"}
            value={name} onChange={(e)=>setName(e.target.value)}
        />}
            </div>
            <div className="zayawka-input">
                {check && (kabulname=="" || kabulname==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore={dil=="tm"?"Kabul edijiniň ady":"Имя получателя:"}
                placeholder={dil=="tm"?"Ady Familýasy":"Имя Фамилия"}
                value={kabulname} onChange={(e)=>setKabulname(e.target.value)}
            />
            :<Input
            addBefore={dil=="tm"?"Kabul edijiniň ady":"Имя получателя:"}
            placeholder={dil=="tm"?"Ady Familýasy":"Имя Фамилия"}
            value={kabulname} onChange={(e)=>setKabulname(e.target.value)}
        />}
            </div>
            <div className="zayawka-input">
                {check && (phone=="+9936" || phone==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore={dil=="tm"?"Kabul edijiniň tel":"Тел получателя:"}
                placeholder="+9365555555"
                value={phone} onChange={(e)=>setPhone(e.target.value)}
            />
            :<Input
            addBefore={dil=="tm"?"Kabul edijiniň tel":"Тел получателя:"}
            placeholder="+9365555555"
            value={phone} onChange={(e)=>setPhone(e.target.value)}
        />}
            </div>
            <div className="zayawka-input">
                {check && (harytname=="" || harytname==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore={dil=="tm"?"Harydyň ady":"Наименование товара:"}
                placeholder={dil=="tm"?"Haryt":"Товары"}
                value={harytname} onChange={(e)=>setHarytname(e.target.value)}
            />
            :<Input
            addBefore={dil=="tm"?"Harydyň ady":"Наименование товара:"}
            placeholder={dil=="tm"?"Haryt":"Товары"}
            value={harytname} onChange={(e)=>setHarytname(e.target.value)}
        />}
            </div>
            <div className="zayawka-input">
                {check && (guty=="" || guty==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore={dil=="tm"?"Guty sany":"Кол-во мест:"}
                placeholder="0"
                value={guty} onChange={(e)=>setGuty(e.target.value)}
            />
            :<Input
            addBefore={dil=="tm"?"Guty sany":"Кол-во мест:"}
            placeholder="0"
            value={guty} onChange={(e)=>setGuty(e.target.value)}
        />}
            </div>
            <div className="zayawka-input">
                {check && (kg=="" || kg==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore="KG"
                placeholder="0"
                value={kg} onChange={(e)=>setKg(e.target.value)}
            />
            :<Input
            addBefore="KG"
            placeholder="0"
            value={kg} onChange={(e)=>setKg(e.target.value)}
        />}
            </div>
            <div className="zayawka-input">
                {check && (m3=="" || m3==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore="CBM (m3)"
                placeholder="0"
                value={m3} onChange={(e)=>setM3(e.target.value)}
            />
            :<Input
            addBefore="CBM (m3)"
            placeholder="0"
            value={m3} onChange={(e)=>setM3(e.target.value)}
        />}
            </div>
            <div className="zayawka-input">
                {check && (baha=="" || baha==null ) ?   <Input
                style={{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"}}
                addBefore={dil=="tm"?"Umumy bahasy":"Общая сумма"}
                placeholder="0"
                value={baha} onChange={(e)=>setBaha(e.target.value)}
            />
            :<Input
            addBefore={dil=="tm"?"Umumy bahasy":"Общая сумма"}
            placeholder="0"
            value={baha} onChange={(e)=>setBaha(e.target.value)}
        />}
            </div>
            <div className="upload-input">
                    <Input
                    addBefore={dil=="tm"?"Harydyň suraty":"Изображение"}
                    id="file-upload-button"
                    type="file"
                     onChange={(e)=>setImg1(e.target.files[0])}
                    />
                    <h1>{img1 && "Ýüklendi!"}</h1>
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
                    <h1>{img2 && "Ýüklendi!"}</h1>
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
                    <h1>{img3 && "Ýüklendi!"}</h1>
                    <label for="file-upload-button3">
                        <img for="file-upload-button3" src={upload} alt="upload"/>
                    </label>
                </div>

            <div className="zayawka-input">
                    <Button style={{marginBottom:"20px"}} onClick={()=>Ugrat()}> {dil=="tm"?"Ugrat":"Отправить"} </Button>
            </div>
        </div>
    }
    </React.Fragment>
    )
}

export default Ugratmak;