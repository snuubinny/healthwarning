import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

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

const ResisterButton = styled.div`
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
  
  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <TitleBox>회원 로그인</TitleBox>
        <FormBox>
          <IdBox placeholder=" 아이디를 입력하세요"></IdBox>
          <PwBox placeholder=" 비밀번호를 입력하세요"></PwBox>
        </FormBox>
        <LoginButton>로 그 인</LoginButton>
        <TextBox>or</TextBox>
        <ResisterButton onClick={handleRegisterClick} >회원가입하기</ResisterButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginForm;