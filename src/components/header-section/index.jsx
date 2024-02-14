import React from 'react'
// import style from "./style.module.scss";
const Header = () => {
  return (
    <header>
           <nav className="navbar navbar-expand-lg bg-color py-4 pt-lg-5">
                <div className="container">
                  <a className="navbar-brand text-white" href="/">Satish Singh</a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#online-section">Service</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-capitalize" href="/" >contact us</a>
                      </li>                    
                    </ul>                  
                  </div>
                </div>           
              </nav>
              <hr className="w-100 mx-auto" />
    </header>
  )
}

export default Header;
