import React from 'react'

const Digital = () => {
  return (
    <div>
         <section className="bg-color more-info-section">
          <div className="container">
            <div className="row">
               {/* <!-- hero section image --> */}
              <div className="col-12 col-md-12 col-lg-6 img-section">
                <figure>
                  <img src="./Vespa Delivery (HD).png" alt="digital products" className="img-fluid" />
                </figure>  
               
              </div>

              <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                <h2 className="text-capitalize fw-bolder text-white common-heading">Steps to Build a Successful Digital Products</h2>
                <p className="mt-3 mb-5 para-width text-light-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit vel labore provident et nobis iure voluptatibus qui, aperiam explicabo consequuntur tempore earum optio quia? Obcaecati aliquam quos beatae magnam!</p>
                <div className="text-center w-100 text-md-start">
                  <button type="button" className="text-capitalize btn btn-primary px-5 py-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact Now">Contact Us</button>
                </div>
              </div>

              </div>
            </div>
        </section>
      
    </div>
  )
}

export default Digital;
