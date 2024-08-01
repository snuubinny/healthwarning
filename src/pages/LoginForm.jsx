import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import axios from "axios";


const LoginContainer = styled.div`
  background-color: #f8f6e9;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const LoginBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 650px;
  margin: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 1px #e4e4e4;
`;

const TitleBox = styled.h1`
  display: flex;
  justify-content: center;
  color: #797979;
  margin: 0;
`;

const FormBox = styled.div`
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;
  margin-bottom: 0;
`;

const IdBox = styled.input`
  height: 45px;
  background-color: #feecdb;
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
`;

const PwBox = styled.input`
  height: 45px;
  background-color: #fee5ce;
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
`;

const LoginButton = styled.button`
  margin: 60px;
  height: 45px;
  border: none;
  background-color:#ff832b;
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

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  cursor: pointer;

  &:hover{
    font-weight: bold;
  }
`;

function LoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleRegisterClick = () => {
    navigate('/RegisterForm');
  };

    const handleLoginClick = async () => {
      try {
        const requestData = {
          identifier: id,
          password: pw,
          };
  
        console.log("Sending request data:", requestData);
  
        const response = await axios.post(
          "https://dahaessyu.kro.kr/users/login/",
          requestData
        );
        
      localStorage.setItem('token', response.data.token);
      navigate('/PostList');
    } catch (error) {
      console.error('Error logging in:', error);
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <TitleBox>회원 로그인</TitleBox>
        <FormBox>
          <IdBox 
            placeholder=" 아이디를 입력하세요" type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)}>
          </IdBox>
          <PwBox 
            placeholder=" 비밀번호를 입력하세요" type="password" 
            value={pw} 
            onChange={(e) => setPw(e.target.value)}>
          </PwBox>
        </FormBox>
        <LoginButton onClick={handleLoginClick}>로 그 인</LoginButton>
        <TextBox>or</TextBox>
        <RegisterButton onClick={handleRegisterClick} >회원가입하기</RegisterButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginForm;