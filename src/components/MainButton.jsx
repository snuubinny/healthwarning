import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainImage2 from "../img/MainButton2.png";

const ButtonBackground = styled.div`
  width: 290px;
  height: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s, opacity 0.2s;
  background: linear-gradient(to right, #ffffff, rgba(255, 183, 117, 0.3));
  padding: 10px;
  border: 1px solid #ff832b;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    background: linear-gradient(to right, #ffffff, rgba(255, 183, 117, 0.3));
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
  width: 100%;
`;

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const GoButton = styled.button`
  padding: 3px;
  font-size: 13px;
  height: 25px;
  width: 100px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 20px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #ffe3c8;
  margin-top: -15px;
  margin-right: 150px;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const TextWrapper = styled.div`
  font-weight: bold;
  font-size: 11px;
  margin-top: 30px;
  margin-right: 10px;
  width: 300px;
  line-height: 1.3;
  color: #828282;
`;

const ImageWrapper = styled.img`
  width: 70px;
  height: auto;
  margin-left: 0px;
  margin-top: 35px;
`;

const MainButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Lending");
  };

  return (
    <ButtonBackground>
      <ContentContainer>
        <TextImageContainer>
          <TextWrapper>
            건강주의보가 어떤 어플인지 궁금하다면?
            <br />
            건강주의보 소개페이지
          </TextWrapper>
          <ImageWrapper src={MainImage2} alt="Main Button Image2" />
        </TextImageContainer>
        <GoButton onClick={handleClick}>바로가기</GoButton>
      </ContentContainer>
    </ButtonBackground>
  );
};

export default MainButton;
