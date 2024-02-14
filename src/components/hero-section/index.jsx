import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="bg-main bg-color hero-section">
          <div className="container">
            <div className="row mb-5">
              <div className="mt-3 mt-lg-0 text-center text-lg-start order-1 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                <h1 className="text-capitalize fw-bolder text-white">We Collect High Quality Leads</h1>
                <p className="mt-2 mb-3 para-width text-light-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam placeat blanditiis ratione nam aspernatur fugiat totam officia odit nulla quisquam vel iste, culpa aliquid.</p>
                <div className="text-center w-100 text-md-start">
                  <button type="button" className="text-capitalize btn btn-primary px-5 py-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact Now">Contact Us</button>
                </div>
              </div>

            {/* <!-- hero section image --> */}
              <div className="col-12 col-md-12 col-lg-6 d-flex order-lg-1 order-0">
                <div className="text-center text-lg-end">
                  <img src="./Managing Money (HD) (1).png" className="hero-img-section" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          
           <div className="custom-shape-divider-bottom-1707802332">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        </section>
      
    </div>
  )
}

export default Hero;
