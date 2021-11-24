import React from "react";
import CalendarioSection from "../Components/Calendar";
import Navbar from "../Components/Navbar";

const Calendario = () => {
  return (
    <>
      <Navbar toggleNav />
      <CalendarioSection />
    </>
  );
};

export default Calendario;
