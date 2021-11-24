import React, { useState } from "react";
import { ReactComponent as ImageB } from "../../Images/LinhaB.svg";
import {
  SectionOneContainer,
  SectionBg,
  SectionContent,
  SectionTitle,
  SectionImage,
} from "./Section1Elements";

const SectionOne = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionOneContainer style={hover ? { background: "#4d4dff" } : null}>
      <SectionBg></SectionBg>
      <SectionContent>
        <SectionTitle>
          It's time to think
          <span id="blue" onMouseEnter={onHover} onMouseLeave={onHover}>
            {" "}
            blue{" "}
          </span>
          !
        </SectionTitle>
        <SectionImage>
          <ImageB />
        </SectionImage>
      </SectionContent>
    </SectionOneContainer>
  );
};

export default SectionOne;
