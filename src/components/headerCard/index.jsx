import React from 'react'
import style from "./style.module.scss";


const url1 ="https://img.freepik.com/free-vector/doctor-consultation-online-smartphone-chat-physician-web-template_74855-9095.jpg?w=360&t=st=1707134364~exp=1707134964~hmac=dd0f585e1cfaf96430b5477a7d1c93950a70dc3c54494a3aa2b45392c2c09922";

const Header = () => {
   
  return (
    <div className={style.headerWrapper}>
        <div className={style.header}>
          <div className={style.title}>
            Medisite
            <div className={style.subtitle}>
              <div className={style.h}>Home</div>
              <div className={style.h}>Pages</div>
              <div className={style.h}>Service Area</div>
              <div className={style.h}>Blogs</div>
              <div className={style.h}>Contact us</div>
              <div className={style.h}>About us</div>
            </div>
          </div>
        </div>
        <div className={style.headcontentWrap}>
          <div className={style.header}>
            <div className={style.subheader}>
              <div className={style.subtitle}>
                A Wealth of Experience To Heal And Help You.
              </div>
              <div className={style.discription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quia architecto id impedit illum nesciunt veniam cupiditate
                ducimus dolorem odio maxime molestias debitis sequi quisquam,
                consequatur inventore? Eveniet, nemo ducimus!
              </div>
            </div>
            
            <div className={style.buttonWrapper}>
              <button className={style.Infobutton}>See More</button>
              <button className={style.button}>Make an Appointment</button>
            </div>
          </div>
          <img src={url1} alt="url1" className={style.docimage} />
        </div>
      </div>
  )
}

export default Header;
