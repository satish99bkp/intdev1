import React from 'react'
import style from "./style.module.scss";
const url2 ="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/e/136937/files/2016/06/Patient_Provider-300x200.jpg";
const logo6 ="https://www.siamdevelopment.com/wp-content/uploads/2022/01/Medical-Device-Registration-in-Thailand.jpg";

const AdviseCard = () => {
  return (
    <div className={style.contentWrapper}>
        <div className={style.headerWrapper}>
            <div className={style.header}>
                <div className={style.title}>
                Medicare Supplement Advocate
                </div>
                <div className={style.discription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quia architecto id impedit illum nesciunt veniam cupiditate
                ducimus dolorem odio maxime.
                </div>
            </div>

            <div className={style.infobutton}>
                <button className={style.button}>See More</button>
            </div>
        </div>

        <div className={style.imagewrapper}>                  
                  <div className={style.images} >
                    <img src={logo6} alt="logo6" className={style.backimage}/>          
                    <img src={url2} alt="url2" className={style.frontimage}/> 
                  </div>        
        </div>
  </div>
  )
}

export default AdviseCard;
