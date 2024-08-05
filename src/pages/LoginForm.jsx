import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import footerLogo from "../img/Footer_Logo.png";

const LoginBg = `${process.env.PUBLIC_URL}/Loginbg3.png`;

const LoginContainer = styled.div`
  background-image: url(${LoginBg});
  background-size: cover;
  background-position: center;
  background-color: #f8f6e9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 800px;
`;

const TitleTextBox = styled.div`
  width: 650px;
  font-size: 90px;
  background: linear-gradient(to right, #000000, #494949);
  opacity: 0.5;
  border-radius: 5px;
  padding: 30px;
  padding-right: 80px;
  color: white;
`;

const ServiceText = styled.p`
  font-size: 50px;
  font-family: "Nanum Pen Script", cursive;
`;

const LoginBox = styled.div`
  background-color: rgba(255, 252, 247, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
  margin: 100px;
  margin-right: 150px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 1px #e4e4e4;
`;

const LogoIcon = styled.img`
  width: 48px;
  height: 40px;
  fill: currentColor;
  margin-right: 4px;
  transform: scale(2);
  margin-top: 4px;
  margin-left: 0px;
`;

const TitleBox = styled.h1`
  display: flex;
  justify-content: center;
  color: #797979;
`;

const Line = styled.div`
  background-color: #afafaf;
  width: 400px;
  height: 1px;
  margin: 20px;
`;

const FormBox = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color:#ffffff; */
  padding: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
`;

const IdBox = styled.input`
  width: 350px;
  height: 50px;
  background-color: #ffffff;
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
`;

const PwBox = styled.input`
  width: 350px;
  height: 50px;
  background-color: #ffffff;
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
`;

const LoginButton = styled.button`
  width: 350px;
  margin: 60px;
  height: 45px;
  border: none;
  background-color: #ff832b;
  color: white;
  font-size: large;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const MiddleText = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  color: #686868;
`;

const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
  fill: currentColor;
  margin-right: 4px;
  transform: scale(2);
  margin-bottom: 10px;
`;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

function LoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleRegisterClick = () => {
    navigate("/RegisterForm");
  };

  const handleLoginClick = async () => {
    try {
      const requestData = {
        identifier: id,
        password: pw,
      };

      const response = await axios.post(
        "https://dahaessyu.kro.kr/users/login/",
        requestData,
        { headers: { "Content-Type": "application/json" } }
      );

      // 응답 본문에서 데이터 추출
      const { access_token, user_id } = response.data;

      console.log("Full response:", response); // 전체 응답 객체를 확인
      console.log("User ID:", user_id);
      console.log("Token from response:", access_token); // 응답 본문에서 토큰 추출

      // 토큰을 localStorage에 저장
      localStorage.setItem("token", access_token);
      console.log("Stored token:", localStorage.getItem("token")); // 저장된 토큰 확인

      navigate(`/PostList/${user_id}`);
    } catch (error) {
      console.error("Error logging in:", error);
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <LoginContainer>
      <TitleTextBox>
        DAHAESSYU
        <br />
        <ServiceText className="Nanum Pen Script">
          "노인에게 다정한 건강관리 service"
        </ServiceText>
      </TitleTextBox>
      <LoginBox>
        <TitleBox>
          <LogoIcon src={footerLogo} />
          회원 로그인
        </TitleBox>
        <Line />
        <FormBox>
          <IdBox
            placeholder=" 아이디를 입력하세요"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></IdBox>
          <PwBox
            placeholder=" 비밀번호를 입력하세요"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          ></PwBox>
        </FormBox>
        <LoginButton onClick={handleLoginClick}>로 그 인</LoginButton>
        <Line />
        <MiddleText>아직 회원이 아니신가요?</MiddleText>

        <RegisterButton onClick={handleRegisterClick}>
          회원가입하기
        </RegisterButton>
      </LoginBox>
    </LoginContainer>
  );
}

export default LoginForm;
