import React from "react";
import Slider from "react-slick";

const Partners = (props) => {
  return (
    <div className="md:mb-8">
      <div className="text-center">
        <h2 className="mb-4 font-sans text-lg text-slate-400">Our Partners</h2>
      </div>
      <Slider
        infinite={true}
        swipe={true}
        autoplay={true}
        speed={2000}
        slidesToShow={4}
        arrows={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          }
        ]}
      >
        <img src="./images/PartnerLogo_CAS.png" className="duration-300 cursor-pointer grayscale hover:grayscale-0" />
        <img src="./images/PartnerLogo_CES.png" className="duration-300 cursor-pointer grayscale hover:grayscale-0" />
        <img src="./images/PartnerLogo_CMHA.png" className="duration-300 cursor-pointer grayscale hover:grayscale-0" />
        <img src="./images/PartnerLogo_OxCHC.png" className="duration-300 cursor-pointer grayscale hover:grayscale-0" />
        <img src="./images/PartnerLogo_Wellkin.png" className="duration-300 cursor-pointer grayscale hover:grayscale-0" />
        <img src="./images/PartnerLogo_WH.png" className="duration-300 cursor-pointer grayscale hover:grayscale-0" />
      </Slider>
    </div>
  )
};

export default Partners;
