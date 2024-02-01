import React from "react";
import style from "./style.module.scss";
// import Modal from "../../components/modal";
import LoginModal from "../../components/loginModal";

const Home = () => {
  return (
    <div className={style.page}>
      <LoginModal />
    </div>
  );
};

export default Home;