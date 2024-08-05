import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import MyProfile from "../components/MyProfile";
import MyInformation from "../components/MyInformation";
import ProfileDetails from "../components/ProfileDetails";
import SafeImage from "../img/Safe.png";

const EditButton = styled.button`
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

const AlarmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #fee5ce;
  padding: 20px;
  box-sizing: border-box;
`;

const SafeImageStyled = styled.img`
  width: 400px;
  height: auto;
  margin-right: 20px;
  margin-top: 75px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 75px;
`;

const CircleTitle = styled.div`
  text-align: left;
  color: #ff832b;
  font-size: 40px;
  font-weight: bold;
`;

const CircleText = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 35px;
  color: #003366;
  margin-top: 5px;
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
          `https://dahaessyu.kro.kr/users/profile/`,
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
        `https://dahaessyu.kro.kr/users/profile/`,
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

  return (
    <>
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
      <MyProfile
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        username={userData.username}
        identifier={userData.identifier}
        gender={userData.gender}
      />
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
      <EditButton
        onClick={isEditable ? saveUserData : () => setIsEditable(true)}
      >
        {isEditable ? "저장" : "수정하기"}
      </EditButton>
    </>
  );
};

export default EditProfile;
