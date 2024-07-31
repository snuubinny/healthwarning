import React from "react";
import { RegisterMyInfo } from "../components/RegisterMyInfo";
import { RegisterInfo } from "../components/RegisterInfo";
import styled from "styled-components";
import footerLogo from "../img/Footer_Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f6e9;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 40px;
  font-weight: bold;
  margin-left: -350px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const Divider = styled.div`
  width: 80%;
  max-width: 800px;
  border-bottom: 2px solid #dddddd;
  margin: 20px 0;
`;

const ContextWrap = styled.p`
  text-align: left;
  font-size: 15px;
  margin-left: -430px;
`;

const RegisterButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 680px;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
  margin-bottom: 20px;
`;
const FooterIcon = styled.img`
  width: 60px;
  height: 50px;
  fill: currentColor;
  margin-right: 4px;
  transform: scale(2);
  margin-top: 4px;
  margin-left: 0px;
`;

const RegisterForm = () => {
  /*  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");

  const handleSexClick = (selectedSex) => {
    setSex(selectedSex);
  };

  const checkDuplicate = async () => {
    try {
      const response = await axios.post("/api/check-duplicate", { id, email });
      return response.data.exists;
    } catch (error) {
      console.error("Error checking duplicate:", error);
      return true; // 서버 오류 시 중복으로 간주 (id,email동일한걸로 가입 시 가입 안됨)
    }
  };

  const handleRegisterClick = async () => {
    const isDuplicate = await checkDuplicate();
    if (isDuplicate) {
      alert("이미 계정이 존재합니다!");
    } else {
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    }
  };*/

  const navigate = useNavigate();

  const RegisterButtonClick = () => {
    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  return (
    <>
      <RegisterWrap>
        <TextWrap>
          <FooterIcon src={footerLogo} />
          <span style={{ color: "#ff832b" }}>다! </span>했슈 계정 만들기
        </TextWrap>
        <ContextWrap>회원가입을 통해 다했슈 멤버가 되어보세요!</ContextWrap>
        <Divider />
      </RegisterWrap>
      <RegisterMyInfo />
      <RegisterInfo />
      <RegisterButton onClick={RegisterButtonClick}>회원가입</RegisterButton>
    </>
  );
};

export default RegisterForm;
