import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import MyProfile from "../components/MyProfile";

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token); // 로컬 스토리지에서 토큰을 가져옵니다.
        const response = await axios.get(
          `https://dahaessyu.kro.kr/users/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // 요청 헤더에 토큰을 포함시킵니다.
            },
          }
        );
        const userData = response.data;
        setUsername(userData.username);
        setIdentifier(userData.identifier);
        setPassword(userData.password);
        setEmail(userData.email);
        setBirth(userData.birth);
        setGender(userData.gender);
        setSleep(userData.sleep);
        setMedications(userData.medications);
        setExercises(userData.exercises);
        setMeals(userData.meals);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <>
      <MyProfile
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        username={username}
        identifier={identifier}
        gender={gender}
      />
    </>
  );
};

export default EditProfile;
