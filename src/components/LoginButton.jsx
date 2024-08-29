import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonBackground = styled.div`
  width: 270px;
  height: 100px;
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s, opacity 0.2s;
  background: linear-gradient(
    to right,
    #ffffff,
    rgba(255, 183, 117, 0.3)
      
  );
  padding: 10px;
  border: 1px solid #ff832b; 
  border-radius: 15px;
  cursor: pointer;

 &:hover {
    transform: scale(1.01);
    background: linear-gradient(
      to right,
      #ffffff, 
      rgba(255, 183, 117, 0.3) 
    );
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
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #ffe3c8;
  margin-top: 80px;
  margin-right: 150px;

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
      <GoButton onClick={handleClick}>바로가기</GoButton>
    </ButtonBackground>
  );
};

export default LoginButton;
