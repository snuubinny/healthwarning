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

  /*
const { userId } = useParams(); // URL 파라미터에서 userId 가져오기
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState(null); // 초기 회원 정보 상태

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`); // 회원 정보 API 호출
        setUserData(response.data); // 상태 업데이트
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleEditClick = () => {
    setIsEditable((prev) => !prev);
  };

  const handleSave = async (updatedData) => {
    try {
      await axios.put(`/api/users/${userId}`, updatedData); // 업데이트된 데이터 서버로 저장
      setUserData(updatedData); // 상태 업데이트
      setIsEditable(false); // 편집 모드 해제
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  if (!userData) return <p>Loading...</p>; // 데이터를 가져오기 전 로딩 상태


*/

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
