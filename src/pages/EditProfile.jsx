import React, { useState } from "react";
import styled from "styled-components";
import { MyProfile } from "../components/MyProfile";
import { MyInformation } from "../components/MyInformation";
import { ProfileDetails } from "../components/ProfileDetails";

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
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState("전수빈");
  const [id, setId] = useState("jeonsubin5156");
  const [password, setPassword] = useState("1234");
  const [email, setEmail] = useState("jeonsubin5156@inha.edu");
  const [birthdate, setBirthdate] = useState("010329");
  const [sex, setSex] = useState("여");
  const [sleep, setSleep] = useState(8);
  const [medicine, setMedicine] = useState(3);
  const [exercise, setExercise] = useState(30);
  const [meal, setMeal] = useState(3);

  const handleEditClick = () => {
    if (isEditable) {
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };

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
