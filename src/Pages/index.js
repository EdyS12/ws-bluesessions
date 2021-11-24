import React, { useState } from "react";
import InfoSection from "../Components/InfoSection";
import Navbar from "../Components/Navbar";
import SectionOne from "../Components/Section1";
import Sidebar from "../Components/Sidebar";
import SlideSection from "../Components/SlideSection";
import SobreSection from "../Components/AboutSection";
import FooterBar from "../Components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SectionOne />
      <InfoSection />
      <SlideSection />
      <SobreSection />
      <FooterBar />
    </>
  );
};

export default Home;
