import React from "react";
import style from "./style.module.scss";
// import Modal from "../../components/modal";
import LoginModal from "../../components/loginModal";
import {useState} from 'react';

const Home = () => {
  const [openState, setOpenModal]=useState(false);
  const openModal=()=>{
    if(openState===false){
      setOpenModal(true);
    }
  }
  
  return (
    <div className={style.page}>
      <button className="primary" onClick={openModal}> Open Modal</button>
      {
        openState && <LoginModal/>
      }
      
    </div>
  );
};

export default Home;
