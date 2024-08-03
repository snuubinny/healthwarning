import React from "react";
import styled from "styled-components";
import MainPage from "../img/MainPage.png";
import DirectLinks from "../components/DirectLinks"; // DirectLinks 컴포넌트 가져오기

const FullScreenImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function Main() {
  return (
    <>
      <FullScreenImage src={MainPage} alt="Main Page" />
      <DirectLinks />
    </>
  );
}

export default Main;
