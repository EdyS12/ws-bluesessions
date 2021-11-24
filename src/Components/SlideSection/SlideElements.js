import styled from "styled-components";

export const SlideContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 800px;
  position: relative;
  z-index: 1;
  /* border: 3px solid green; */
`;

export const TituloWrapper = styled.div`
  width: 100%;
  margin-left: 340px;

  @media screen and (max-width: 780px) {
    margin-left: 140px;
  }

  @media screen and (max-width: 560px) {
    margin-left: 40px;
  }
`;

export const Titulo = styled.h1`
  display: inline;
  font-family: "Suisse Int'l";
  color: transparent;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  text-align: left;

  -webkit-text-stroke-color: #fff;
  -webkit-text-stroke-width: 1px;
  text-shadow: 0px 0px 30px #4d4dff;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
