import React from "react";
import style from "./style.module.scss";
import InfoCard from "../../components/InfoCard";
import AdviseCard from "../../components/advisoryCard";
import ExpertCard from "../../components/expertCard";
import AppointmentForm from "../../components/appointmentCard";
import Footer from "../../components/footerCard";
import Bulletin from "../../components/bulletinCard";
import Header from "../../components/headerCard";

const HomePage = () => {
  return (
    <div className={style.home}>
      <Header />
      <div className={style.body}>
        <div className={style.infoCardBody}>
          {Array.from({ length: 1 }).map((index) => (
            <InfoCard key={index} />
          ))}
        </div>
        
        <div className={style.advisorybody}>
          <AdviseCard />
        </div>

        <div className={style.expertbody}>
          <div className={style.headerWrapper}>
            <div className={style.title}>Our Expert Team</div>
            <div className={style.discription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia
              architecto id impedit illum nesciunt veniam cupiditate ducimus
              dolorem odio maxime.
            </div>
          </div>

          <div className={style.imagesWrapper}>
            {Array.from({ length: 4 }).map((index) => (
              <ExpertCard key={index} />
            ))}
          </div>
        </div>

        <div className={style.appointmentbody}>        
          <AppointmentForm />
        </div>
        <div className={style.bulletinbody}>
          <Bulletin />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
