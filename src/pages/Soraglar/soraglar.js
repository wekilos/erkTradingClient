import React, { useContext, useEffect, useState } from "react";

import "./soraglar.css";

import strelkaAchyk from "../../img/strelka-achyk.svg";
import strelkaYapyk from "../../img/strelka-yapyk.svg";
import { axiosInstance } from "../../utils/axiosIntance";
import { ErkContext } from "../../context/Condex";

const Soraglar = ()=>{
    const [detail,setDetail ] = useState(null);
    const [data,setData] = useState();
    const ShowDetails = (event)=>{
        if(detail==event){
            setDetail(null)
        }else{
            setDetail(event);
        }
        
    }


    useEffect(()=>{
        Soraglar();
    },[])

    const Soraglar = async()=>{
        axiosInstance.get("/api/soraglar").then((data)=>{
            console.log(data.data);
            setData(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const {dil} = useContext(ErkContext);

    return (
        <div className="shertler">
            <h2> {dil=="tm"?"Iň köp berilýän soraglar":"Часто задаваемые вопросы"}</h2>

            { data && data.map((sorag,i)=>{
           return <div onClick={()=>ShowDetails(i)} className="shert">
                    <h3>{dil=="tm"?sorag.name_tm:sorag.name_ru}</h3>
                    <img src={ detail==i ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==i && <React.Fragment> <p> {dil=="tm"?sorag.question_tm:sorag.question_ru}</p>
                        <p>{dil=="tm"?sorag.description_tm:sorag.description_ru} </p>
                            </React.Fragment>}
            </div>
            })    
        }

            {/* <div onClick={()=>ShowDetails(2)} className="shert">
                    <h3>Sorag 2</h3>
                    <img src={ detail==2 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==2 && <p> asaskjak daskjdnaskdjs askjdnaskds 
                        dasdksadjnad sadkasjdnasd sadkasjdas 
                        dsadsaodsa daskdjbas dasdoias das da</p>}
            </div>
            <div onClick={()=>ShowDetails(3)} className="shert">
                    <h3>Sorag 3</h3>
                    <img src={ detail==3 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==3 && <p> asaskjak daskjdnaskdjs askjdnaskds 
                        dasdksadjnad sadkasjdnasd sadkasjdas 
                        dsadsaodsa daskdjbas dasdoias das da</p>}
            </div> */}
        </div>
    )
}

export default Soraglar;