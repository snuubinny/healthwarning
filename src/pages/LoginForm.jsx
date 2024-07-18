import React from "react";
import { useNavigate } from "react-router-dom";

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