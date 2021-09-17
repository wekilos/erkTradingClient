import React, { useContext, useEffect, useState } from "react";

import "./shertler.css";

import strelkaAchyk from "../../img/strelka-achyk.svg";
import strelkaYapyk from "../../img/strelka-yapyk.svg";
import { axiosInstance } from "../../utils/axiosIntance";
import {ErkContext} from "../../context/Condex";
const Shertler = ()=>{

    const {dil} = useContext(ErkContext)
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
        getData()
    },[]);


    const getData = async()=>{
        axiosInstance.get("/api/shertler").then((data)=>{
            console.log(data.data);
            setData(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <div className="shertler">
            <h2> {dil=="tm"?"Erk Trading Şertleri":"Условия Эрк Трейдинг"}</h2>

            {data && data.map((shert,i)=>{
            return  <div onClick={()=>ShowDetails(i)} className="shert">
                    <h3>{dil=="tm"?shert.name_tm:shert.name_ru}</h3>
                    <img src={ detail==i ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==i && <div><p>{dil=="tm"?shert.description_tm:shert.description_ru}</p>
                           <p style={{textDecoration:"underline",fontWeight:"600"}}>{dil=="tm"?shert.sene_tm:shert.sene_ru}</p>
                           <p>{dil=="tm"?shert.details_tm:shert.details_ru}</p>
                    </div>}
            </div>
            })
        }


            {/* <div onClick={()=>ShowDetails(2)} className="shert">
                    <h3>DEMIRÝOL GATNAWLARY</h3>
                    <img src={ detail==2 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==2 && <div>
                    <p> Soňky ýyllarda Hytaýdan demirýol arkaly ýük daşamalar
                         ýokary depginde ösýär we häzirki wagtda deňiz ulag 
                         usulynyň “ornuny alýar”. Demirýol arkaly ýük eltmegiň
                          bahasy harytlary deňiz üsti bilen daşamakdan has ýokary
                           bolsa-da, Hytaýdan awtoulag we howa gatnawlaryndan ýük
                            daşamaklyga garanyňda ep-esli arzan. Demir ýol arkaly
                             ýygnama ýükleri, şeýle-de doly konteýnerli ýüki 
                             ibermek mümkinçiligi bar. </p>
                             <p style={{textDecoration:"underline",fontWeight:"600"}}>
                             Demirýol arkaly ýük eltmegiň möhleti – 30-45 gün.
                             </p>
                             <p>
                             Ýük eltmegiň bahasyny bilmek maksady bilen hasaplaşyk 
                             üçin ýüküňiz barada maglumatlar doldurylan arzaňyzy ugratmaly.
                              Hünärmenlerimiz ulag çykdajylaryny hasaplarlar we zerur bolan
                               ýagdaýynda maglumatlary anyklamak üçin Size ýüz tutarlar.
                             </p>
                        </div>}
            </div>
            <div onClick={()=>ShowDetails(3)} className="shert">
                    <h3>DEŇIZ GATNAWLARY</h3>
                    <img src={ detail==3 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==3 && <div>
                     <p> Hytaýdan konteýnerlerde deňiz gatnawlary - ýük eltip bermegiň belli görnüşidir. 
                         Bu harytlary daşamagyň iň çalt usuly bolmasa-da, iň tygşytlysydyr. 
                         Konteýnerleri deňiz üsti bilen eltip bermek, awtoulag ýa-da demirýol
                          arkaly haryt getirmekden has arzandyr. Ýükleri daşamak üçin göterijiligi
                           26 tonna we göwrümi 67m3 çenli 40HC konteýner ulanylýar. Ýygnama ýükleri,
                            şeýle-de konteýner daşamalary ugratmak mümkinçiligi bar.</p>
                     <p style={{textDecoration:"underline",fontWeight:"600"}}>
                        Deňiz üsti bilen ýük eltmegiň möhleti – 50-65 gün.
                     </p>
                     <p>
                        Ýük eltmegiň bahasyny bilmek maksady bilen hasaplaşyk üçin 
                        ýüküňiz barada maglumatlar doldurylan arzaňyzy ugratmaly.
                        Hünärmenlerimiz ulag çykdajylaryny hasaplarlar we zerur
                        bolan ýagdaýynda maglumatlary anyklamak üçin Size ýüz tutarlar.
                     </p>
                        </div>}
            </div>
            <div onClick={()=>ShowDetails(4)} className="shert">
                    <h3>HOWA GATNAWLARY</h3>
                    <img src={ detail==4 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==4 && <div>
                     <p> Howada ýük daşamagyň esasy artykmaçlygy wagt tygşytlylygydyr. 
                         Bu görnüş gysga möhletde we tiz gowşurmak zerur bolanda laýyk gelýär. 
                         Howa gatnawy ýük eltmegiň iň gymmat görnüşlerinden biridir. 
                         Howa gatnawynyň bahasy önümiň görnüşine, 
                         harytlaryň agramyna we göwrümine bagly. </p>
                     <p style={{textDecoration:"underline",fontWeight:"600"}}>
                         Howada ýük eltmegiň möhleti 7-14 gün. Ýüküň iň pes agramy 1 kg.
                     </p>
                     <p>
                         Ýük eltmegiň bahasyny bilmek maksady bilen hasaplaşyk üçin ýüküňiz 
                         barada maglumatlar doldurylan arzaňyzy ugratmaly. Hünärmenlerimiz 
                         ulag çykdajylaryny hasaplarlar we zerur bolan ýagdaýynda maglumatlary 
                         anyklamak üçin Size ýüz tutarlar.
                     </p>
                        </div>}
            </div>
            <div onClick={()=>ShowDetails(5)} className="shert">
                    <h3>Haryt gözlemek</h3>
                    <img src={ detail==5 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==5 && <div>
                     <p> Hytaý bilen biznese başlamak isleýänler ilki bilen harydy ýa-da 
                         haryt üpjün edijilerini gözleýärler. Siziň tarapyňyzdan diňe 
                         özüňizi gyzyklandyrýan harytlar barada giňişleýin beýan etmeklik 
                         ýeterlikdir. Biziň hünärmenlerimiz gysga wagtyň içinde zerur 
                         harytlary tapýarlar, maglumat toplaýarlar, bahalar hem-de 
                         öndüriji barada jikme-jik hasabat düzüp üpjün edijiler 
                         bilen habarlaşýarlar.     </p>
                        </div>}
            </div>
            <div onClick={()=>ShowDetails(6)} className="shert">
                    <h3>Haryt satyn almak</h3>
                    <img src={ detail==6 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==6 && <div>
                     <p> Eger Size sargyt üçin özbaşdak töleg geçirmek oňaýsyz bolsa, 
                         töleg geçirmekligiň hemme aladasyny biziň üstümize ýükläp bilersiňiz. 
                         Biz fabrikden ýükleri alýarys we olary ugradylýan wagtyna çenli öz 
                         ammarlarymyzda saklaýarys. Hytaýdaky haryt üpjün edijiňizden, 
                         Alibaba.com we beýleki internet platformalardan satyn alyp 
                         bermek hyzmatymyzyň berilmegi boýunça ýüz tutanyňyzda, Siz 
                         harytlaryň kemçilikli, hiliniň tapawut bermegi ýaly garaşylmadyk 
                         ýagdaýlardan doly goragly bolýarsyňyz. Goşmaça hyzmatymyzdan peýdalansaňyz, 
                         Siziň talabyňyza görä ýükleriň mukdary we hili boýunça laýyklylygyny 
                         barlamaga ýardam berip bilýäris.  </p>
                     
                        </div>}
            </div>
            <div onClick={()=>ShowDetails(7)} className="shert">
                    <h3>Hytaýda wekilçilik</h3>
                    <img src={ detail==7 ? strelkaAchyk : strelkaYapyk}  alt="strelka" />
                    { detail==7 && <div>
                     <p> Biziň kompaniýamyz Hytaýda biznesi ýöretmeklige ýardam berýär we 
                         Hytaý Halk Respublikasynyň çäginde Siziň bähbitleriňiz üçin 
                         çykyş edip bilýär. Eger-de Sizi hytaý öndürijileri, zawodlary 
                         we kärhanalary bilen hemişe we yzygiderli işlemeklik 
                         gyzyklandyrýan bolsa, onda bu babatda üstünlik gazanmak 
                         üçin Size Hytaýda öz wekiliňiziň (agendiňiziň) bolmagy 
                         zerur bolýar. Hünärmenimiz şertleşik baglaşmak boýunça 
                         alnyp barylýan işleriň dowamynda ýüze çykyp biljek 
                         meseleleri dessine çözmeklige kömek eder.      </p>
                     
                        </div>}
            </div>
             */}
        </div>
    )
}

export default Shertler;