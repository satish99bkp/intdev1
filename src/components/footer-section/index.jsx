import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="main-footer-section bg-color">
          <div className="contact-details">
            <div className="container px-5">
              <div className="row g-0">
                <div className="col-lg-4">
                  <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                      <img src="./Location (HD).png" alt="/" className="img-fluid" />

                    </div>
                    <p className="text-white">(+00) 1234 5678</p>

                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                      <img src="Email (HD).png" alt="/" className="img-fluid" />

                    </div>
                    <p className="text-white">(+00) 1234 5678</p>

                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                      <img src="Call (HD).png" alt="/" className="img-fluid" />

                    </div>
                    <p className="text-white">(+00) 1234 5678</p>

                  </div>
                </div>
              </div> 
            </div>

            <div className="container">
              <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="d-flex justify-content-center align-items-center"> 
                      <div className="common-info mt-5">
                        <h4 className="text-white">About</h4>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                       
                      </div>
                    
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="d-flex justify-content-center align-items-center"> 
                      <div className="common-info mt-5">
                        <h4 className="text-white">About</h4>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                       
                      </div>
                    
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="d-flex justify-content-center align-items-center"> 
                      <div className="common-info mt-5">
                        <h4 className="text-white">About</h4>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                        <p className="text-white-50">our Story</p>
                       
                      </div>
                    
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <div className="d-flex justify-content-center align-items-center"> 
                      <div className="common-info mt-5">
                        <h4 className="text-white">Subscribe</h4>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <span className="input-group-text" id="basic-addon2">Subscribe</span>
                        </div>
                       
                      </div>
                    
                  </div>
                </div>
                <hr className="w-100 mx-auto" /> 
              </div>
              <div className="copyright ">
                <p className="rights text-white">Copyright <span>&#169;</span> {new Date().getFullYear()} All rights reserved.</p>
              </div>             
            </div>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer;
