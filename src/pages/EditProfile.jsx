import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import MyProfile from "../components/MyProfile";
import MyInformation from "../components/MyInformation";
import ProfileDetails from "../components/ProfileDetails";
import SafeImage from "../img/Safe.png";
import { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import UnderNavBar from "../components/UnderNavBar";

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

const AnimatedContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  opacity: 1;
  transform: translateY(0);
`;

const AnimatedContainer2 = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  opacity: 1;
  transform: translateY(0);
`;
const EditButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin: 20px 0;
`;
const EditButton = styled.button`
  width: 280px;
  height: 43px;
  border: none;
  background-color: #ffffff;
  color: #ff832b;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 35px;
  &:hover {
    background-color: #ff832b;
    color: #ffffff;
  }
`;

const AlarmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: #fee5ce;
  box-sizing: border-box;
`;

const SafeImageStyled = styled.img`
  width: 150px;
  height: auto;
  margin-right: 100px;
  margin-top: 28px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  margin-right: -75px;
`;

const CircleTitle = styled.div`
  text-align: left;
  color: #ff832b;
  margin-left: -50px;
  margin-bottom: 70px;
  font-size: 25px;
  font-weight: bold;
`;

const CircleText = styled.p`
  font-family: "Nanum Pen Script", cursive;
  width: 300px;
  font-size: 15px;
  color: #003366;
  margin-left: -50px;
  margin-top: -50px;
`;

const EditProfile = () => {
  const { userId } = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    identifier: "",
    password: "",
    confirmPassword: "",
    email: "",
    birth: "",
    gender: "",
    sleep: "",
    medications: "",
    exercises: "",
    meals: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://healthwarning.kro.kr/users/profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        setUserData({
          username: data.username,
          identifier: data.identifier,
          password: "",
          confirmPassword: "",
          email: data.email,
          birth: data.birth,
          gender: data.gender,
          sleep: data.sleep,
          medications: data.medications,
          exercises: data.exercises,
          meals: data.meals,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const validateUserData = () => {
    const { password, confirmPassword } = userData;

    // 비밀번호와 비밀번호 확인만 일치하는지 확인
    if (password && password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }

    return true;
  };

  const saveUserData = async () => {
    if (!validateUserData()) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      // 비어 있는 필드를 제거한 새로운 데이터 객체 생성
      const filteredUserData = Object.keys(userData).reduce((acc, key) => {
        if (userData[key] !== "") {
          acc[key] = userData[key];
        }
        return acc;
      }, {});

      const response = await axios.put(
        `https://healthwarning.kro.kr/users/profile/`,
        filteredUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setIsEditable(false);
        alert("변경사항이 저장되었습니다.");
      } else {
        throw new Error("서버에서 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error(
        "회원정보 저장 실패:",
        error.response ? error.response.data : error.message
      );
      alert("저장 실패. 다시 시도해 주세요.");
    }
  };
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="edit-profile-container">
      <NavBar />
      <AnimatedContainer isVisible={isVisible}>
        <AlarmContainer>
          <SafeImageStyled src={SafeImage} alt="Safe" />
          <TitleContainer>
            <CircleTitle>잠시만요!</CircleTitle>
            <CircleText>
              필수정보를 바꾸어도 이전 달성률이 변하지 않아요!
              <br />
              안심하고 수정하세요!
            </CircleText>
          </TitleContainer>
        </AlarmContainer>
      </AnimatedContainer>
      <AnimatedContainer2 isVisible={isVisible}>
        <MyProfile
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          username={userData.username}
          identifier={userData.identifier}
          gender={userData.gender}
        />
      </AnimatedContainer2>
      <MyInformation
        isEditable={isEditable}
        userData={userData}
        setUserData={setUserData}
      />
      <ProfileDetails
        isEditable={isEditable}
        userData={userData}
        setUserData={setUserData}
      />
      <EditButtonContainer>
        <EditButton
          onClick={isEditable ? saveUserData : () => setIsEditable(true)}
        >
          {isEditable ? "저장" : "수정하기"}
        </EditButton>
      </EditButtonContainer>
      <UnderNavBar />
    </div>
  );
};

export default EditProfile;
