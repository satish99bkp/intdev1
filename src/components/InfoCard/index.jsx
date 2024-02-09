import React from "react";
import style from "./style.module.scss";
const logo2 = "https://cdn-icons-png.flaticon.com/512/8114/8114298.png";
const InfoCard = () => {
  return (
    <div className={`${style.infoblock} ${style.active}`}>
      <img src={logo2} alt="logo2" className={style.doclogo2} />
      <h4>24 Hours Service</h4>
      <p1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        velit eligendi quaerat harum.
      </p1>
    </div>
  );
};

export default InfoCard;
