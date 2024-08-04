import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import MyProfile from "../components/MyProfile";
import MyInformation from "../components/MyInformation";
import ProfileDetails from "../components/ProfileDetails";

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
    const {
      username,
      identifier,
      password,
      confirmPassword,
      email,
      birth,
      gender,
    } = userData;
    if (!username || !identifier || !password || !email || !birth || !gender) {
      return false;
    }
    if (password !== confirmPassword) {
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
      const response = await axios.put(
        `https://dahaessyu.kro.kr/users/profile/`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Response status is not 200");
      }

      setIsEditable(false);
      alert("변경사항이 저장되었습니다.");
    } catch (error) {
      console.error("Failed to save user data:", error);
      alert("옳지않은 값이 입력되었습니다. 다시한번 확인해주세요.");
    }
  };

  return (
    <>
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
