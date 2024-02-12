import React from 'react';
import style from "./style.module.scss";
const url14="https://img.wethrift.com/gympass.jpg";
const url15="https://www.theglowingfridge.com/wp-content/uploads/2017/02/facebook.png";
const Footer = () => {
    const year = new Date().getFullYear();
    
  return (
    <>
    <div className={style.contents}>
        <div className={style.foundation}>
        <div className={style.heading1}>Medisite</div>
        <div className={style.subheading1}>
            When stan Britten established BritKare in 1995, he did so with
            true desire to assist the medical community with quality care of
            their desire.
        </div>
        </div>
        <div className={style.link}>
        <div className={style.heading2}>LINKS</div>
        <div className={style.subheading2}>
            <li>Service Areas</li>
            <li>Blogs</li>
            <li>Abouts</li>
            <li>Contacts</li>
            <li>Solutions</li>
        </div>
        </div>
        <div className={style.contacts}>
        <div className={style.heading3}>CONTACT</div>
        <div className={style.detailcontacts}>
            <div className={style.address}>
            777, seventh avenue ,India ,NE 5849
            </div>
            <div className={style.phonenumber1}>+788-698- 758</div>
            <div className={style.phonenumber2}>+788-698- 758</div>
            <div className={style.email}>yourwebsite@gmail.com</div>
        </div>
        </div>
        <div className={style.socialMedia}>
        <div className={style.heading4}>Follow us on</div>
        <div className={style.logowrapper}>
            <div className={style.google}><img src={url14} alt="url14" className={style.googlelogo}/></div>
            <div className={style.facebook}><img src={url15} alt="url15" className={style.facebooklogo}/></div>
        </div>
        </div>
  </div>

  <div className={style.copyright}>
    <div className={style.rights}>
      Copyright &copy; {year} All Right Reserved.
    </div>
  </div>

  </>
  )
}

export default Footer;
