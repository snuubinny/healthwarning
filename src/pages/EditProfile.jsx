import React, { useState } from "react";
import styled from "styled-components";
import { MyProfile } from "../components/MyProfile";
import { MyInformation } from "../components/MyInformation";
import { ProfileDetails } from "../components/ProfileDetails";
import { useLocation } from "react-router-dom";
import { axios } from "axios";
import { useParams } from "react-router-dom";

const EditButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: #ff832b;
  color: white;
  border: none;5
  
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
  const location = useLocation();
  const userData = location.state || {};
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(userData.name || "전수빈");
  const [id, setId] = useState(userData.id || "jeonsubin5156");
  const [password, setPassword] = useState(userData.password || "1234");
  const [email, setEmail] = useState(
    userData.email || "jeonsubin5156@inha.edu"
  );
  const [birthdate, setBirthdate] = useState(userData.birthdate || "010329");
  const [sex, setSex] = useState(userData.sex || "여");
  const [sleep, setSleep] = useState(userData.sleep || 8);
  const [medicine, setMedicine] = useState(userData.medicine || 3);
  const [exercise, setExercise] = useState(userData.exercise || 30);
  const [meal, setMeal] = useState(userData.meal || 3);

  const handleEditClick = () => {
    if (isEditable) {
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };

  /*
 const handleEditClick = () => {
    setIsEditable(!isEditable);
  };
  */

  const handleSave = (newName, newId) => {
    setName(newName);
    setId(newId);
    setIsEditable(false);
  };

  const handleProfileDetailsSave = (data) => {
    setSleep(data.sleep);
    setMedicine(data.medicine);
    setExercise(data.exercise);
    setMeal(data.meal);
  };
  const handleSexChange = (newSex) => {
    setSex(newSex);
  };

  /*
const handleProfileDetailsSave = async (data) => {
    try {
      // 서버에 데이터 전송
      await axios.put("/api/update-profile", data);
      setSleep(data.sleep);
      setMedicine(data.medicine);
      setExercise(data.exercise);
      setMeal(data.meal);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleSexChange = (newSex) => {
    setSex(newSex);
  };

*/

  const initialData = {
    name,
    id,
    password,
    email,
    birthdate,
    sex,
    sleep,
    medicine,
    exercise,
    meal,
  };

  return (
    <>
      <MyProfile
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        name={name}
        id={id}
        sex={sex}
      />
      <MyInformation
        isEditable={isEditable}
        onSave={handleSave}
        onSexChange={handleSexChange}
        initialData={initialData}
      />
      <ProfileDetails
        isEditable={isEditable}
        initialData={initialData}
        onSave={handleProfileDetailsSave}
      />
      <EditButton onClick={handleEditClick}>
        {isEditable ? "저장" : "정보수정"}
      </EditButton>
    </>
  );
};

export default EditProfile;
