import React from "react";
import { ReactComponent as Box } from "../../Images/Window.svg";
import {
  InfoContainer,
  InfoImage,
  TitleWrap,
  InfoH1,
  TextBox,
  Text1,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="next">
        <InfoImage>
          <Box />
        </InfoImage>
        <TitleWrap>
          <InfoH1>Próximas Sessões</InfoH1>
        </TitleWrap>
        <TextBox>
          <Text1> Disponível em breve </Text1>
        </TextBox>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
