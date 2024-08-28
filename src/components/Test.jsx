import React from "react";
import styled from "styled-components";
import HandImage from "../img/hand.png";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 70px;
  transition: transform 0.2s;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #ff832b;
  border-radius: 4px;
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    transform: translateX(-50%) scale(1.01);
  }
  z-index: 10000;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 10px;
`;

const LinkText = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-left: 20px;
`;

const GoButton = styled.button`
  margin-left: 10px;
  padding: 8px;
  font-size: 18px;
  height: 40px;
  width: 170px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #ffe3c8;
  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const DiaryText = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 18px;
  color: #ff832b;
`;

const HandIcon = styled.img`
  height: 20px;
  width: 30px;
  margin-left: 10px;
`;

const Test = ({ fillTestCredentials }) => {
  const handleButtonClick = () => {
    console.log("Button clicked");
    fillTestCredentials();
  };

  return (
    <LinkContainer>
      <LinkText>회원가입은 번거롭고, 체험해보고 싶다면?</LinkText>
      <ContentContainer>
        <DiaryText className="Nanum Pen Script">
          체험용 계정으로 <br/>로그인해보세요!
        </DiaryText>
        <HandIcon src={HandImage} alt="Hand" />
        <GoButton onClick={handleButtonClick}>Go to Test!</GoButton>
      </ContentContainer>
    </LinkContainer>
  );
};

export default Test;
