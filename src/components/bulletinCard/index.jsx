import React from 'react';
import style from "./style.module.scss";


const url11 = "https://www.dypatiledu.com/assets/img/details-dy/hhm.png";
const url12 =
  "https://www.parentalquestions.com/wp-content/uploads/2020/09/surgery-1807541_1280-300x198.jpg";
const url13 =
  "https://jobs.methodisthealthsystem.org/media/1371/career-advancement_720x495.jpg?anchor=center&mode=crop&width=720&height=495&rnd=132422267560000000";

const Bulletin = () => {

  const year = new Date().getFullYear();
  const currDay = new Date().getDate();
  const currMonth = new Date().toLocaleString([], { month: "long" });
  return (  
          <>          
            <div className={style.headerWrapper}>
              <div className={style.header}>News & Events</div>
              <div className={style.discription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quia architecto id impedit illum nesciunt veniam cupiditate
                ducimus dolorem odio maxime.
              </div>
            </div>


        <div className={style.contentWrapper}>
          <div className={style.wrapper1}>
            <div className={style.docImage}>
              <img src={url11} alt="url11" className={style.img} />
              <div className={style.comments}>
                <div>
                  {currMonth.slice(0, 3)} {currDay},{year}
                </div>
                <div>3 Comments</div>
              </div>
              <p className={style.discription}>
                The lpsum is simply dummy text of the printing
              </p>
              <p className={style.subdiscription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nulla sint assumenda.
              </p>
            </div>
          </div>
          <div className={style.wrapper2}>
            <div className={style.docImage}>
              <img src={url12} alt="url12" className={style.img} />
              <div className={style.comments}>
                <div>
                  {currMonth.slice(0, 3)} {currDay},{year}
                </div>
                <div>3 Comments</div>
              </div>
              <p className={style.discription}>
                The lpsum is simply dummy text of the printing
              </p>
              <p className={style.subdiscription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nulla sint assumenda.
              </p>
            </div>
          </div>

          <div className={style.wrapper3}>
            <div className={style.docImage}>
              <img src={url13} alt="url13" className={style.img} />
              <div className={style.comments}>
                <div>
                  {currMonth.slice(0, 3)} {currDay},{year}
                </div>
                <div>3 Comments</div>
              </div>
              <p className={style.discription}>
                The lpsum is simply dummy text of the printing
              </p>
              <p className={style.subdiscription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nulla sint assumenda.
              </p>
            </div>
          </div>
        </div> 
              
        </>
  )
}

export default Bulletin;
