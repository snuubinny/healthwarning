import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainImage from "../img/MainButton.png";

const ButtonBackground = styled.div`
  width: 270px;
  height: 100px;
  display: flex;
  margin-top: 70px;
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
  flex-direction: column; /* 전체를 세로로 정렬 */
  align-items: center;
  margin-bottom: 35px;
  width: 100%;
`;

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const TextWrapper = styled.div`
  font-weight: bold;
  font-size: 8px;
  margin-top: 30px;
  margin-left: 10px;
  line-height: 1.3;
  color: #828282;
`;

const ImageWrapper = styled.img`
  width: 60px;
  height: auto;
  margin-left: 80px;
  margin-top: 30px;
`;

const GoButton = styled.button`
  padding: 3px;
  font-size: 10px;
  height: 25px;
  width: 100px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #ffe3c8;
  margin-top: -50px;
  margin-right: 160px;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/LoginForm");
  };

  return (
    <ButtonBackground>
      <ContentContainer>
        <TextImageContainer>
          <TextWrapper>
            이미 건강주의보 회원이시라면?
            <br />
            건강주의보 로그인페이지
          </TextWrapper>
          <ImageWrapper src={mainImage} alt="Main Button Image" />
        </TextImageContainer>
        <GoButton onClick={handleClick}>바로가기</GoButton>
      </ContentContainer>
    </ButtonBackground>
  );
};

export default LoginButton;
