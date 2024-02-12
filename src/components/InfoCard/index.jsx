import React from "react";
import style from "./style.module.scss";
const logo2 = "https://cdn-icons-png.flaticon.com/512/8114/8114298.png";
const logo3 ="https://cdn1.vectorstock.com/i/thumb-large/94/50/woman-paramedic-help-urgency-wearing-uniform-vector-12669450.jpg";
const logo4 = "https://www.fellowshippersonalstatement.com/wp-content/uploads/2014/08/interventional-cardiology-fellowship.png";
const logo5 ="https://static.vecteezy.com/system/resources/previews/000/425/149/non_2x/vector-bed-icon.jpg";
const InfoCard = () => {
  
  return (
  <>
    <div className={`${style.infoblock} ${style.active}`}>
      <img src={logo2} alt="logo2" className={style.doclogo2} />
      <h4>24 Hours Service</h4>
      <p1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        velit eligendi quaerat harum.
      </p1>
    </div>
      <div className={style.secondinfoblock}>
    <img src={logo3} alt="logo3" className={style.doclogo3} />
    <h4>Qualified Doctors</h4>
    <p1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Temporibus velit eligendi quaerat harum.
    </p1>
  </div>
  <div className={style.infoblock}>
    <img src={logo4} alt="logo4" className={style.doclogo4} />
    <h4>Emergency Care</h4>
    <p1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Temporibus velit eligendi quaerat harum.
    </p1>
  </div>
  <div className={style.infoblock}>
    <img src={logo5} alt="logo5" className={style.doclogo5} />
    <h4>Operation Theater</h4>
    <p1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Temporibus velit eligendi quaerat harum.
    </p1>
  </div>  
  </>
    
  );
};

export default InfoCard;
