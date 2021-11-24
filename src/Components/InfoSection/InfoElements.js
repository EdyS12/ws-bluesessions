import styled from "styled-components";

export const InfoContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  /* border: 3px solid pink; */
`;

export const InfoImage = styled.div`
  position: absolute;
  padding: 0;
  justify-content: center;
  /* border: 3px solid purple; */
`;

export const TitleWrap = styled.div`
  position: absolute;
  width: 40%;
  margin-bottom: 370px;
  padding-left: 150px;
  /* border: 5px solid red; */
`;

export const InfoH1 = styled.h1`
  color: #251d33;
  font-family: "Suisse Int'l";
  font-weight: bold;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;

export const TextBox = styled.div`
  width: 40%;
  padding-bottom: 45px;
  /* border: 5px solid red; */
`;

export const Text1 = styled.h2`
  color: #fff;
  font-family: "Suisse Int'l";
  font-weight: bold;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;
