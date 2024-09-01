import React, { useState } from "react";
import styled from "styled-components";
import AddHospitalPage from "../img/Hospital 2.png";
import BackIcon from "../img/back.png";
import { useNavigate } from "react-router-dom";

const FullScreenImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Header = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: absolute;
  z-index: 1; /* 이미지를 덮을 수 있도록 z-index 추가 */
`;

const BackButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

function AddHospital() {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    alert("추후 개발할 예정입니다!");
  };

  const handleBackClick = () => {
    navigate("/Hospital"); // 뒤로 가기
  };

  return (
    <>
      <Header>
        <BackButton src={BackIcon} alt="Back" onClick={handleBackClick} />
      </Header>
      <FullScreenImage src={AddHospitalPage} alt="AddHospitalPage" onLoad={handleImageLoad} />
    </>
  );
}

export default AddHospital;