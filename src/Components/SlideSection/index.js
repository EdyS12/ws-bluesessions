import React from "react";
import { ReactComponent as Imagem1 } from "../../Images/img1.svg";
import {
  SlideContainer,
  TituloWrapper,
  Titulo,
  ImageContainer,
} from "./SlideElements";

const SlideSection = () => {
  return (
    <>
      <SlideContainer id="previous">
        <TituloWrapper>
          <Titulo>Edições Passadas</Titulo>
        </TituloWrapper>
        <ImageContainer>
          <Imagem1 />
        </ImageContainer>
      </SlideContainer>
    </>
  );
};

export default SlideSection;
