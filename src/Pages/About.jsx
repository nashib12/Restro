import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import AboutUs from "../Components/About/AboutUs";
import AboutResorto from "../Components/About/AboutResorto";
import ChooseUs from "../Components/About/ChooseUs";
import Team from "../Components/About/Team";
import Faq from "../Components/About/Faq";

const About = () => {
  return (
    <>
      <div>
        <BreadCrumb setTitle={"About Us"} />
        <AboutUs />
        <AboutResorto />
        <ChooseUs/>
        <Team />
        <Faq />
      </div>
    </>
  );
};

export default About;
