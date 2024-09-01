import React, { useState } from "react";
import styled from "styled-components";
import HospitalPage from "../img/Hospital 1.png";
import BackIcon from "../img/back.png";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

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

const AddButton = styled.button`
  position: absolute;
  bottom: 150px;
  left: 50%; 
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 43px;
  background-color: #FF832B;
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-size: 20px;
  z-index: 2; /* 이미지 위에 버튼이 올라오도록 z-index 설정 */
  cursor: pointer;

  &:hover{
    background-color: #ffffff; 
    color: #FF832B;
  }
`;

function Hospital() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    alert("추후 개발할 예정입니다!");
  };

  const handleBackClick = () => {
    navigate(`/PostList/${userId}`); // 뒤로 가기
  };

  const handleAddClick = () => {
    navigate("/AddHospital");
  }
  return (
    <Container>
      <Header>
        <BackButton src={BackIcon} alt="Back" onClick={handleBackClick} />
      </Header>
      <FullScreenImage src={HospitalPage} alt="HospitalPage" onLoad={handleImageLoad} />
      <AddButton onClick={handleAddClick}>근처 병원 찾기</AddButton>
    </Container>
  );
}

export default Hospital;
