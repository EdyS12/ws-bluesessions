import React from "react";
import { ReactComponent as ImageBig } from "../../Images/logo_simples.svg";
import {
  AboutContainer,
  AboutTextBox,
  AboutTitle,
  AboutText,
  AboutImageBox,
} from "../AboutSection/AboutElements";

const SobreSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutTextBox>
          <AboutTitle>O que são as Bluesessions?</AboutTitle>
          <AboutText>
            As bluesessions consistem em sessões descontraídas de formação em
            várias áreas, tendo como elemento central a tecnologia. O formador
            pode variar, podendo ser membro de uma empresa (ex. Learning Partner
            da jeKnowledge), um Professor, um alumnus ou mesmo um membro da
            jeKnowledge que domine o tema proposto.
          </AboutText>
        </AboutTextBox>
        <AboutImageBox>
          <ImageBig />
        </AboutImageBox>
      </AboutContainer>
    </>
  );
};

export default SobreSection;
