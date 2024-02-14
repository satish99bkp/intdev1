import React from 'react'

const Contacts = () => {
  return (
    <div>
         <section className="common-section contact-section pt-5 bg-color">
          
          <div className="custom-shape-divider-top-1707835423">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>

          <div className="container text-center common-title fw-bold">
            <h2 className="common-heading text-white">Contact Us</h2>
            <hr className="w-25 mx-auto" />
          </div>

          <div className="container">
            <div className="form-section mx-auto">

              <form>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <label for="exampleFormUserFirstName" className="form-label text-white">First Name</label>
                      <input type="text" required className="form-control" id="exampleFormUserFirstName" placeholder="First name" />
                    </div>

                    <div className="col-lg-6 col-12">
                      <label for="exampleFormUserLastName" className="form-label text-white">Last Name</label>
                      <input type="text" required className="form-control" id="exampleFormUserLastName" placeholder="Last name" />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label text-white">Email address</label>
                  <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label text-white">Example text-area</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default Contacts;
