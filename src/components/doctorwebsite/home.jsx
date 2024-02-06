import React from 'react'
import style from "./style.module.scss";

const logo2="https://cdn-icons-png.flaticon.com/512/8114/8114298.png";
const logo3="https://cdn1.vectorstock.com/i/thumb-large/94/50/woman-paramedic-help-urgency-wearing-uniform-vector-12669450.jpg";
const logo4="https://www.fellowshippersonalstatement.com/wp-content/uploads/2014/08/interventional-cardiology-fellowship.png";
const logo5="https://static.vecteezy.com/system/resources/previews/000/425/149/non_2x/vector-bed-icon.jpg";
const url2="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/e/136937/files/2016/06/Patient_Provider-300x200.jpg";
const url1="https://img.freepik.com/free-vector/doctor-consultation-online-smartphone-chat-physician-web-template_74855-9095.jpg?w=360&t=st=1707134364~exp=1707134964~hmac=dd0f585e1cfaf96430b5477a7d1c93950a70dc3c54494a3aa2b45392c2c09922";
const HomePage = () => {
  return (
    <div className={style.home}>
        <div className={style.header}>
                <div className={style.header1}>
                    <div className={style.title}>Medisite
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
                <div className={style.head}>
                    <div className={style.header2}>
                        <div className={style.subheader}>
                                <div className={style.subtitle2}>A Wealth of Experience To Heal And Help You.</div>
                                <div className={style.subtitle3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia architecto id impedit illum nesciunt veniam cupiditate ducimus dolorem odio maxime molestias debitis sequi quisquam, consequatur inventore? Eveniet, nemo ducimus!</div>
                                
                        </div>
                    
                        <div className={style.info}>
                            <div className={style.info1}>See More</div>
                            <div className={style.info2}>Make an Appointment</div>
                        </div>
                    </div>
                    <img src={url1} alt="url1" className={style.docimage}/>
                </div>
                
        </div> 

        <div className={style.body}>
            <div className={style.bodypart1}>
                <div className={style.infoblock}>
                    <img src={logo2} alt="logo2" className={style.doclogo2} />
                    <h4>24 Hours Service</h4>
                    <p1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus velit eligendi quaerat harum.</p1>
                </div>
                <div className={style.infoblock3}>
                <img src={logo3} alt="logo3" className={style.doclogo3} />
                <h4>Qualified Doctors</h4>
                    <p1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus velit eligendi quaerat harum.</p1>
                </div>
                <div className={style.infoblock}>
                    <img src={logo4} alt="logo4" className={style.doclogo4} />
                    <h4>Emergency Care</h4>
                    <p1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus velit eligendi quaerat harum.</p1> 
                </div>
                <div className={style.infoblock}>
                    <img src={logo5} alt="logo5" className={style.doclogo5} />
                    <h4>Operation Theater</h4>
                    <p1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus velit eligendi quaerat harum.</p1> 
                </div>
            </div>
            <div className={style.bodypart2}>
                <div className={style.head2}>
                        <div className={style.header3}>
                            <div className={style.subheader1}>
                                    <div className={style.subtitle4}>Medicare Supplement Advocate</div>
                                    <div className={style.subtitle5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia architecto id impedit illum nesciunt veniam cupiditate ducimus dolorem odio maxime.</div>
                                    
                            </div>
                        
                            <div className={style.info3}>
                                <div className={style.info4}>See More</div>
                                
                            </div>
                        </div>
                        <img src={url2} alt="url2" className={style.docimage2}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage;
