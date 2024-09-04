import React from "react";
import styled from "styled-components";
import DirectLinks from "../components/DirectLinks";
import LendingPage from "../img/Lending.png";
import NavBar from "../components/NavBar";

const FullScreenImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function Lending() {
  return (
    <>
      <FullScreenImage src={LendingPage} alt="Lending Page" />
      <DirectLinks />
    </>
  );
}

export default Lending;
