import React from 'react'
import style from "./style.module.scss";
const AppointmentForm = () => {
  return (
    <>
    <div className={style.title}>
         <p className={style.heading}>Make an Appointment</p>
    </div>
    <form className={style.infoWrapper}>
        <div className={style.Nameidwrapper}>
        <div>
            <input
            type="text"
            placeholder="Full Name"
            className={style.name}
            />
        </div>
        
        <div>
            <input
            type="text"
            placeholder="Email"
            className={style.email}
            />
        </div>
        </div>

        <div className={style.numberDepWrapper}>
        <div>
            <input
            type="text"
            placeholder="Phone Number"
            className={style.mobNumber}
            />
        </div>
        <div>
            <input
            type="text"
            placeholder="Department"
            className={style.department}
            />{" "}
        </div>
        </div>

    <div className={style.dateinfoWrapper}>
      <div>
        <input
          type="text"
          placeholder="Additional Information"
          className={style.genInfo}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Date and Time"
          className={style.dateTime}
        />
      </div>
    </div>
  </form>
  <div className={style.confirmbutton}>
         <button id={style.button}>Confirm</button>
  </div>
</>
  )
}

export default AppointmentForm;
