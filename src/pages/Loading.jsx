import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoIcon from "../img/logo.png";

const LoginContainer = styled.div`
  background-color: #fee5ce;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const OvalBackground = styled.div`
  position: absolute;
  width: 400px;
  height: 650px;
  background-color: #ffb775;
  border-radius: 50%;
  overflow: hidden;
  transform: rotate(-50deg);
`;

const LogoText = styled.div`
  font-family: "Nanum Pen Script", cursive;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 23px;
  color: #fff9d7;
  z-index: 1;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const LogoImgBox = styled.div`
  width: 130px;
  height: 120px;
  background-color: #fff9d7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Main");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <LoginContainer>
      <OvalBackground />
      <LogoContainer>
        <LogoImgBox>
          <LogoImg src={LogoIcon} alt="Logo" />
        </LogoImgBox>
      </LogoContainer>
      <LogoText>
        삐용삐용! 매일의 건강을 감독해주는
        <br />
        완벽한 맞춤형 건강 보호사 서비스
      </LogoText>
    </LoginContainer>
  );
}

export default Loading;
