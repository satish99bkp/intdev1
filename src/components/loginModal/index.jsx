import React from "react";
import style from "./style.module.scss";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTupSJNkbtOCDgsY3Vra0ISaT9Ywt70SdQQQ&usqp=CAU";
const crossimg =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACjo6OmpqahoaFqamr29vbj4+NtbW2ZmZm9vb12dnaenp63t7d8fHxGRkYfHx/YDSedAAACiUlEQVR4nO3cC1bDIBCFYal9pbWP/a9WK6dqEtIkMLXMzf8tYM6MDEITwtsbAAAAAAAAAAAAAAAAAAAAAAAAAAD4f7tmvzmetqYxt6fjZt/sTGNmO4dv14NhzMM1Bj0bxsx2CXdrs5jrn5gXs5jZzuHXyijm6k/Ml4/iLgTzEletmK+ei00wL7FdYGgMQpbYt9MJH8UR152Ie4MsS2w6+RSP4ns34MYkz3zHbkKFJa568Y5GmeY69TIqWjT6BYaTWa55tlfLErtz8MvVdq+U4dBPKrtREyMYLHdKmRJ/98wSUwXa7ZMK9P77hbxFI1Wg1S6pUKrE+anZRHkSi+SqLtBiLlq1+tOUJljxHLwra7LKWzQqGYVUgVUsE235q1m162BXbqu5aNEoL1VHBebNxeqXibb56TpYJtrmtpyrFo3mpeywwHlt52Qd7Jqetrs5eDe19Vy2aDRtbJy2aDQlebctGo03oOMWjcYKcF/gWBM626qlPSrC+Ry8G25EgRaNhgqRKXCoGV2vg12pYnovHP2O4E2qRKkC040q06LR+Ci6HsGbsRLdFzhWokCBj+eiu61a2vAoSozgzVCJMgUOlShUYP9w2M2rDzuZkh9D+Xko/79Ufj2U39PI70vlf1vI/z6U/40v/5xG/lmb/PNS+Wfe8u8t5N89yb8/lH8HLP8eX/4shvx5GvkzUaXn2qpfNOTPJsqfL5U/Iyx/zlv+rL789xby38zIf/ck/+1a6ShUv2jIf0Mq/x2wTYtVXGKqQKnv8e3uVKh00ZC/F0P/bhP9+2n07xjSvydK/64v/fva9O/c0783cQF3Xy7g/tIF3EELAAAAAAAAAAAAAAAAAAAAAAAAAMDCfAJZehPwT3+hZAAAAABJRU5ErkJggg==";
const LoginModal = () => {
  return (
    <div className={style.loginModal}>
      <img src={crossimg} alt="deleteimg" className={style.closeBtn} />
      <div className={style.header}>
        <div className={style.logo}>
          <img src={img} alt="lockimg" className={style.img} />
        </div>
        <div className={style.title}>Please enter your password</div>
        <div className={style.subtitle}>
          Enter your password to make this change.
        </div>
      </div>

      <div className={style.body}>
        <div className={style.formControl}>
          <label className={style.label}>Email or username</label>
          <input className={style.input} placeholder="olivia@untitledui.com" />
        </div>

        <div className={style.formControl}>
          <label className={style.label}>Password</label>
          <input
            className={style.input}
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <div className={style.footer}>
        <button className={`${style.button} ${style.primary}`}>Confirm</button>
        <button className={`${style.button} `}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
