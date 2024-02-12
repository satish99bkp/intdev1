import React from 'react'
import style from "./style.module.scss";
const url3 = "https://landaspine.com/site/uploads/2020/08/doctor-3-214x300.png";
const url7 ="https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-circle-transparent.png";
const url8 ="https://th.bing.com/th/id/R.37450e5112961120dcb779170753b237?rik=FxuYj3bobzn%2fJQ&riu=http%3a%2f%2fwww.bykoket.com%2fimages%2fft_googleplus-b.png&ehk=3YR6wCf9cxUoqHytSHdvLMJD6cX9I48psZEP6fUnNpU%3d&risl=&pid=ImgRaw&r=0";
const url9 = "https://www.alpinepeds.com/images/linkedin_logo.jpg";
const url10 = "https://www.mousegraphics.eu/media/social-twitter-hover.png";

const ExpertCard = () => {
  return (
   
      <div className={style.container}>
        <img src={url3} alt="url3" className={style.docimage} />
        <h3>Patrick Cortez</h3>
        <h3 id={style.d1}>Doctor</h3>
        <div className={style.medialink}>
          <div>
            <img src={url7} alt="url7" className={style.facebook} />
          </div>
          <div>
            <img src={url8} alt="url8" className={style.google} />
          </div>
          <div>
            <img src={url9} alt="url9" className={style.linkdin} />
          </div>
          <div>
            <img src={url10} alt="url10" className={style.twitter} />
          </div>
        </div>
      </div>

  );
}

export default ExpertCard;
