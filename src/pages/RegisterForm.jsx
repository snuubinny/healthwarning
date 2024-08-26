import React, { useState } from "react";
import RegisterMyInfo from "../components/RegisterMyInfo";
import RegisterInfo from "../components/RegisterInfo";
import styled from "styled-components";
import footerLogo from "../img/Footer_Logo.png";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const RegisterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fee5ce;
  margin-top: 20px; /* NavBar의 높이만큼 margin 추가해서 공간 안생기게!!!! */
  animation: ${fadeIn} 0.5s ease-out;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin-left: 0px;
  padding-top: 50px;
  padding-bottom: 0px;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid #ddd;
  margin: 20px 0;
`;

const ContextWrap = styled.p`
  text-align: left;
  font-size: 15px;
  margin-left: 0px;
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin: 20px 0;
`;

const RegisterButton = styled.button`
  padding: 3px;
  font-size: 10px;
  height: 30px;
  width: 75px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const FooterIcon = styled.img`
  width: 45px;
  height: 35px;
  fill: currentColor;
  margin-right: 4px;
  transform: scale(2);
  margin-top: 4px;
  margin-left: 0px;
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [sleep, setSleep] = useState("");
  const [medications, setMedications] = useState("");
  const [exercises, setExercises] = useState("");
  const [meals, setMeals] = useState("");

  const [isVisible, setIsVisible] = useState(true);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const requestData = {
        username,
        identifier,
        password,
        email,
        birth,
        gender,
        sleep: parseInt(sleep),
        medications: parseInt(medications),
        exercises: parseInt(exercises),
        meals: parseInt(meals),
      };

      const response = await axios.post(
        "https://healthwarning.kro.kr/users/signup/",
        requestData
      );

      if (response.status === 201) {
        alert("회원가입이 완료되었습니다");
        navigate("/LoginForm");
      } else {
        alert("옳지않은 값이 입력되었습니다. 다시한번 확인해주세요.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response && error.response.status === 409) {
        alert("회원가입 정보를 다시 한번 확인하세요!");
      } else {
        alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <>
      <NavBar />
      <RegisterWrap isVisible={isVisible}>
        <TextWrap>
          <FooterIcon src={footerLogo} />
          <span style={{ color: "#ff832b" }}>다! </span>했슈 계정 만들기
        </TextWrap>
        <ContextWrap>회원가입을 통해 다했슈 멤버가 되어보세요!</ContextWrap>
        <Divider />
      </RegisterWrap>
      <RegisterMyInfo
        username={username}
        setUsername={setUsername}
        identifier={identifier}
        setIdentifier={setIdentifier}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        email={email}
        setEmail={setEmail}
        birth={birth}
        setBirth={setBirth}
        gender={gender}
        setGender={setGender}
        isVisible={isVisible}
      />
      <RegisterInfo
        sleep={sleep}
        setSleep={setSleep}
        medications={medications}
        setMedications={setMedications}
        exercises={exercises}
        setExercises={setExercises}
        meals={meals}
        setMeals={setMeals}
      />
      <RegisterButtonContainer>
        <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
      </RegisterButtonContainer>
    </>
  );
};

export default RegisterForm;
