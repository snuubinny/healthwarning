import React from "react";
import styled from "styled-components";
import HandImage from "../img/hand.png";
import { useOutletContext } from "react-router-dom";

const LinkContainer = styled.div`
  width: 60%;
  height: 50px;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LinkText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-left: 20px;
`;

const GoButton = styled.button`
  padding: 10px;
  font-size: 20px;
  height: 60px;
  width: 200px;
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

const Highlight = styled.span`
  color: #ff832b;
`;

const DiaryText = styled.p`
  margin-top: 18px;
  margin-left: 60px;
  font-family: "Nanum Pen Script", cursive;
  font-size: 19px;
  color: #ff832b;
`;

const HandIcon = styled.img`
  height: 20px;
  width: 30px;
  margin-left: 10px;
`;

const Test = () => {
  return (
    <LinkContainer>
      <ContentContainer>
        <LinkText>회원가입은 번거롭고, 체험해보고 싶다면?</LinkText>
        <DiaryText className="Nanum Pen Script">
          체험용 계정으로 로그인해보세요!
        </DiaryText>
        <HandIcon src={HandImage} alt="Hand" />
        <GoButton>Go to Test!</GoButton>
      </ContentContainer>
    </LinkContainer>
  );
};

export default Test;
