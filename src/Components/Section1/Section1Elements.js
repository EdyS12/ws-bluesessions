import styled from "styled-components";

export const SectionOneContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const SectionBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h1`
  color: #251d33;
  margin-bottom: 150px;
  font-family: "Suisse Int'l";
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 104px;

  @media screen and (max-width: 760px) {
    font-size: 40px;
  }

  @media screen and (max-width: 760px) {
    font-size: 32px;
  }

  #blue {
    color: #4d4dff;
    font-weight: bold;
  }

  #blue:hover {
    color: #4d4dff;
    transition: 0.5s;
  }
`;

export const SectionImage = styled.div`
  position: absolute;
  width: 100vw;
  margin-top: 270px;
  margin-right: 50px;
  /* border: 1px solid orange; */
`;
