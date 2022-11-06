import React from "react";
import Slider from "react-slick";

const Partners = (props) => {
  return (
    <div className="my-8">
      <div className="text-center">
        <h2 className="text-lg mb-4 text-slate-400 font-sans">Our Partners</h2>
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]}
      >
        <img src="./images/PartnerLogo_CAS.png" className="grayscale hover:grayscale-0 duration-300 cursor-pointer" />
        <img src="./images/PartnerLogo_CES.png" className="grayscale hover:grayscale-0 duration-300 cursor-pointer" />
        <img src="./images/PartnerLogo_CMHA.png" className="grayscale hover:grayscale-0 duration-300 cursor-pointer" />
        <img src="./images/PartnerLogo_OxCHC.png" className="grayscale hover:grayscale-0 duration-300 cursor-pointer" />
        <img src="./images/PartnerLogo_Wellkin.png" className="grayscale hover:grayscale-0 duration-300 cursor-pointer" />
        <img src="./images/PartnerLogo_WH.png" className="grayscale hover:grayscale-0 duration-300 cursor-pointer" />
      </Slider>
    </div>
  )
};

export default Partners;
