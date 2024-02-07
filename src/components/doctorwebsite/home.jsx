import React from 'react'
import style from "./style.module.scss";

const logo2="https://cdn-icons-png.flaticon.com/512/8114/8114298.png";
const logo3="https://cdn1.vectorstock.com/i/thumb-large/94/50/woman-paramedic-help-urgency-wearing-uniform-vector-12669450.jpg";
const logo4="https://www.fellowshippersonalstatement.com/wp-content/uploads/2014/08/interventional-cardiology-fellowship.png";
const logo5="https://static.vecteezy.com/system/resources/previews/000/425/149/non_2x/vector-bed-icon.jpg";
const url2="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/e/136937/files/2016/06/Patient_Provider-300x200.jpg";
const logo6="https://www.siamdevelopment.com/wp-content/uploads/2022/01/Medical-Device-Registration-in-Thailand.jpg";
const url1="https://img.freepik.com/free-vector/doctor-consultation-online-smartphone-chat-physician-web-template_74855-9095.jpg?w=360&t=st=1707134364~exp=1707134964~hmac=dd0f585e1cfaf96430b5477a7d1c93950a70dc3c54494a3aa2b45392c2c09922";
const url3="https://landaspine.com/site/uploads/2020/08/doctor-3-214x300.png";

const url7="https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-circle-transparent.png";
const url8="https://th.bing.com/th/id/R.37450e5112961120dcb779170753b237?rik=FxuYj3bobzn%2fJQ&riu=http%3a%2f%2fwww.bykoket.com%2fimages%2fft_googleplus-b.png&ehk=3YR6wCf9cxUoqHytSHdvLMJD6cX9I48psZEP6fUnNpU%3d&risl=&pid=ImgRaw&r=0";
const url9="https://www.alpinepeds.com/images/linkedin_logo.jpg";
const url10="https://www.mousegraphics.eu/media/social-twitter-hover.png";

const url11="https://www.dypatiledu.com/assets/img/details-dy/hhm.png";
const url12="https://www.parentalquestions.com/wp-content/uploads/2020/09/surgery-1807541_1280-300x198.jpg";
const url13="https://jobs.methodisthealthsystem.org/media/1371/career-advancement_720x495.jpg?anchor=center&mode=crop&width=720&height=495&rnd=132422267560000000";


const HomePage = () => {
    const year=new Date().getFullYear();
    const currDay = new Date().getDate();
    const currMonth = new Date().toLocaleString([], {month: 'long',});
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
                        <img src={logo6} alt="logo6" className={style.docimage3}/>
                </div>
            </div>

            <div className={style.bodypart3}>
                <div className={style.head3}>
                        <div className={style.header4}>
                            <div className={style.subheader2}>
                                    <div className={style.subtitle6}>Our Expert Team</div>
                                    <div className={style.subtitle7}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia architecto id impedit illum nesciunt veniam cupiditate ducimus dolorem odio maxime.</div>
                                    
                            </div>
                        </div>
                        <div className={style.docimageRef}>
                            <div className={style.docName}><img src={url3} alt="url3" className={style.docimage4}/><h3>Patrick Cortez</h3><h3 id={style.d1}>Doctor</h3>
                              <div className={style.medialink}>
                                <div><img src={url7} alt="url7" className={style.docimage8}/></div>
                                <div><img src={url8} alt="url8" className={style.docimage9}/></div>
                                <div><img src={url9} alt="url9" className={style.docimage10}/></div>
                                <div><img src={url10} alt="url10" className={style.docimage11}/></div>
                              </div>
                            </div>
                            <div className={style.docName}><img src={url3} alt="url3" className={style.docimage4}/><h3>Patrick Cortez</h3><h3 id={style.d1}>Doctor</h3>
                              <div className={style.medialink}>
                                <div><img src={url7} alt="url7" className={style.docimage8}/></div>
                                <div><img src={url8} alt="url8" className={style.docimage9}/></div>
                                <div><img src={url9} alt="url9" className={style.docimage10}/></div>
                                <div><img src={url10} alt="url10" className={style.docimage11}/></div>
                              </div>
                            </div>
                            <div className={style.docName}><img src={url3} alt="url3" className={style.docimage4}/><h3>Patrick Cortez</h3><h3 id={style.d1}>Doctor</h3>
                              <div className={style.medialink}>
                                <div><img src={url7} alt="url7" className={style.docimage8}/></div>
                                <div><img src={url8} alt="url8" className={style.docimage9}/></div>
                                <div><img src={url9} alt="url9" className={style.docimage10}/></div>
                                <div><img src={url10} alt="url10" className={style.docimage11}/></div>
                              </div>
                            </div>
                            <div className={style.docName}><img src={url3} alt="url3" className={style.docimage4}/><h3>Patrick Cortez</h3><h3 id={style.d1}>Doctor</h3>
                              <div className={style.medialink}>
                                <div><img src={url7} alt="url7" className={style.docimage8}/></div>
                                <div><img src={url8} alt="url8" className={style.docimage9}/></div>
                                <div><img src={url9} alt="url9" className={style.docimage10}/></div>
                                <div><img src={url10} alt="url10" className={style.docimage11}/></div>
                              </div>
                            </div>
                        </div>
                </div>
            </div>
            
            <div className={style.bodypart4}>
                
                        <div className={style.header5}>
                            <div className={style.subheader3}>
                                    <p className={style.heading}>Make an Appointment</p>                                   
                            </div>

                            
                            <form className={style.info5}>
                                    <div className={style.input1}>
                                        <div ><input type='text' placeholder='Full Name' className={style.inputfield1}/></div>
                                        <div ><input type='text' placeholder='Email' className={style.inputfield2}/></div>
                                    </div>
                                    <div className={style.input2}>
                                        <div ><input type='text' placeholder='Phone Number'className={style.inputfield3}/></div>
                                        <div ><input type='text' placeholder='Department'className={style.inputfield4}/> </div>                                   
                                    </div>

                                    <div className={style.input3}>
                                        <div ><input type='text' placeholder='Additional Information'className={style.inputfield5}/></div>
                                        <div ><input type='text' placeholder='Date and Time'className={style.inputfield6}/></div>                                    
                                    </div>
                            </form>
                           
                        
                        </div>           
                        
                       
                        <div className={style.confirmbutton}> <button id={style.button1} >Confirm</button> </div>                     
                       
                
            </div>

            <div className={style.bodypart5}>
                <div className={style.head5}>
                        <div className={style.header6}>
                            <div className={style.subheader4}>
                                    <div className={style.subtitle8}>News & Events</div>
                                    <div className={style.subtitle9}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia architecto id impedit illum nesciunt veniam cupiditate ducimus dolorem odio maxime.</div>
                                    
                            </div>
                        </div>
                        <div className={style.docimageRef1}>
                            <div className={style.docimageRef2}>
                                <div className={style.docimage11}>
                                    <img src={url11} alt="url11" className={style.img11}/>
                                    <div className={style.comments}><div>{currMonth.slice(0,3)} {currDay},{year}</div><div>3 Comments</div></div>
                                    <p className={style.discription}>The lpsum is simply dummy text of the printing</p>
                                    <p className={style.subdiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla sint assumenda.</p>
                                </div>
                                <div className={style.docimage12}>
                                    <img src={url12} alt="url12" className={style.img12}/>
                                    <div className={style.comments}><div>{currMonth.slice(0,3)} {currDay},{year}</div><div>3 Comments</div></div>
                                    <p className={style.discription}>The lpsum is simply dummy text of the printing</p>
                                    <p className={style.subdiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla sint assumenda.</p>
                                </div>
                                <div className={style.docimage13}>
                                    <img src={url13} alt="url13" className={style.img13}/>
                                    <div className={style.comments}><div>{currMonth.slice(0,3)} {currDay},{year}</div><div>3 Comments</div></div>
                                    <p className={style.discription}>The lpsum is simply dummy text of the printing</p>
                                    <p className={style.subdiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla sint assumenda.</p>
                                </div> 
                            </div>      
                        </div>
                </div>

            </div>
        </div>

        <div className={style.footer}>
            <div className={style.contents}>
                <div className={style.foundation}>
                    <div className={style.heading1}>Medisite</div>
                    <div className={style.subheading1}>When stan Britten established BritKare in 1995, he did so with true desire to assist the medical community with quality care of their desire.</div>

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
                        <div className={style.address}>777, seventh avenue ,India ,NE 5849</div>
                        <div className={style.phonenumber1}>+788-698- 758</div>
                        <div className={style.phonenumber2}>+788-698- 758</div>
                        <div className={style.email}>yourwebsite@gmail.com</div>
                    </div>
                </div>
                <div className={style.socialMedia}>
                    <div className={style.heading4}>Follow us on</div>
                        <div className={style.google}></div>
                        <div className={style.facebook}></div>
                </div>
            </div>

            <div className={style.copyright}>
                <div className={style.rights}>Copyright &copy; {year} All Right Reserved.</div>
            </div>
        </div>

    </div>
  )
}

export default HomePage;
