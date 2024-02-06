import React from "react";
import style from "./style.module.scss";
// import Modal from "../../components/modal";
// import LoginModal from "../../components/loginModal";
// import { useState } from "react";
// import Apicall from "../../apicalls/apicall";
import HomePage from "../../components/doctorwebsite/home";
const Home = () => {
  // const [openState, setOpenModal] = useState(false);
  
  // const toggleModal = () => {
  //   setOpenModal(!openState);
  // };

  return (
    <div className={style.page}>
      {/* <button className="primary" onClick={() => toggleModal()}>
        
        Open Modal
      </button>
      {openState && <LoginModal toggleModal={toggleModal} />}

      <Apicall /> */}
      <HomePage />
    </div>
  );
};

export default Home;
