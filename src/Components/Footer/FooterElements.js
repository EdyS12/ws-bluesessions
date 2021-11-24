import styled from "styled-components";

export const Footer = styled.footer`
  background: #251d33;
  border: 5px solid #4d4dff;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: lrem;
  bottom: 0;
  z-index: 10;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
