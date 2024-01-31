import React from "react";
import style from "./style.module.scss";

const userImg =
  "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg";

const Modal = () => {
  return (
    <div className={style.modal}>
      <div className={style.header}>
        <div className={style.title}>Add your team members</div>
        <div className={style.subtitle}>
          You’ve created a new project! Invite colleagues to collaborate on this
          project.
        </div>
      </div>
      <div className={style.body}>
        {Array.from({ length: 3 }).map((d, index) => {
          return (
            <div className={style.userCard} key={index}>
              <img src={userImg} alt="userimg" className={style.userImg} />
              <div className={style.userInfo}>
                <div className={style.name}>Candice Wu</div>
                <div className={style.userName}>@candice</div>
              </div>
              <div className={style.role}>Admin</div>
            </div>
          );
        })}
      </div>
      <div className={style.footer}>
        <button className={`${style.button} ${style.primary}`}>Confirm</button>
        <button className={`${style.button} `}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
