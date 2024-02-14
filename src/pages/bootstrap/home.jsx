import React from 'react'

import Header from '../../components/header-section';
import Hero from "../../components/hero-section";
import Service from "../../components/service-section";
import Digital from "../../components/digitalpro-section";
import Onlinemode from "../../components/onlinemode-section";
import Testimonial from "../../components/testimonial-section";
import Experts from "../../components/expert-section";
import Contacts from "../../components/contact-section";
import Footer from "../../components/footer-section";

const Boostraphome = () => {
  return (
    <div>
       <Header/>
        {/* <!-- hero section start --> */}
        <Hero/>
        {/* <!-- hero section end --> */}
         

        {/* <!-- Service Section Start --> */}
        <Service />
        {/* <!-- Service Section End --> */}


        {/* <!-- Digital Product Showcase Start --> */}
       <Digital />
        {/* <!-- Digital Product Showcase End --> */}

        {/* <!-- Online mode section --> */}
        <Onlinemode />
        {/* <!-- Online mode section end --> */}


        {/* <!-- Testimonial Section Start --> */}
        <Testimonial />
        {/* <!-- Testimonial Section Ends --> */}

        {/* <!-- Expert Panel Section Start --> */}
        <Experts />
        {/* <!-- Expert Panel Section End --> */}



         {/* <!--Contact Section Start  --> */}
       <Contacts />
         {/* <!-- Contact Section End --> */}


       {/* <!-- Footer Section Start --> */}
        <Footer />
        {/* <!--Footer Section End  --> */}
    </div>
  )
}

export default Boostraphome;
