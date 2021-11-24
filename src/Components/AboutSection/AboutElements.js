import styled from "styled-components";

export const AboutContainer = styled.div`
  background: radial-gradient(
    62.53% 97.6% at 74.41% 50.06%,
    rgba(77, 77, 255, 0.48) 0%,
    rgba(37, 29, 51, 0) 63.26%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 50px 170px;
  height: 800px;
  position: relative;
  z-index: 1;
  /* border: 5px solid #4d4dff; */
`;

export const AboutTextBox = styled.div`
  display: flex;
  padding-left: 80px;
  width: 50%;
  /* border: 5px solid #4d4dff; */
`;

export const AboutTitle = styled.h1`
  position: absolute;
  color: #fff;
  width: 20%;
  text-align: left;
  font-size: 38px;
`;

export const AboutText = styled.p`
  /* display: block; */
  color: #fff;
  width: 80%;
  font-size: 18px;
  text-align: left;
  margin-top: 150px;
`;

export const AboutImageBox = styled.div`
  padding-right: 80px;
  /* border: 5px solid red; */
`;
