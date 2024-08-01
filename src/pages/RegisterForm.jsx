import React from "react";
import RegisterMyInfo from "../components/RegisterMyInfo";
import RegisterInfo from "../components/RegisterInfo";
import styled from "styled-components";
import footerLogo from "../img/Footer_Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [sleep, setSleep] = useState("");
  const [medications, setMedications] = useState("");
  const [exercises, setExercises] = useState("");
  const [meals, setMeals] = useState("");

  const handleRegister = async () => {
    try {
      const requestData = {
        username,
        identifier,
        password,
        email,
        birth,
        gender,
        sleep: parseInt(sleep, 10),
        medications: parseInt(medications, 10),
        exercises: parseInt(exercises, 10),
        meals: parseInt(meals, 10),
      };

      console.log("Sending request data:", requestData);

      const response = await axios.post(
        "https://dahaessyu.kro.kr/users/signup/",
        requestData
      );

      console.log(response); // 서버 응답 로그

      if (response.status === 201) {
        alert("회원가입이 완료되었습니다");
        navigate("/"); // 회원가입 후 로그인 페이지로 이동
      } else {
        alert("회원가입에 실패하였습니다 다시 시도해주세요");
      }
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      alert("An error occurred during registration. Please try again.");
    }
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
      <RegisterMyInfo
        username={username}
        setUsername={setUsername}
        identifier={identifier}
        setIdentifier={setIdentifier}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        birth={birth}
        setBirth={setBirth}
        gender={gender}
        setGender={setGender}
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
      <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
    </>
  );
};

export default RegisterForm;

/*      
 <RegisterMyInfo
        name={name}
        setName={setName}
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        birthdate={birthdate}
        setBirthdate={setBirthdate}
        sex={sex}
        setSex={setSex}
      />



<RegisterInfo
        sleep={sleep}
        setSleep={setSleep}
        medicine={medicine}
        setMedicine={setMedicine}
        exercise={exercise}
        setExercise={setExercise}
        meal={meal}
        setMeal={setMeal}
         */
