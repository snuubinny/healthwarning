import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CheckListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 60px;
  border-radius: 20px;
  margin: 30px;
  font-size: 25px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  color: white;
  font-weight: bold;
`;

const YYYY = styled.input`
  width: 110px;
  height: 45px;
  background-color: #fee5ce;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 55px;
`;

const MMDD = styled.input`
  width: 55px;
  height: 45px;
  background-color: #fee5ce;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 55px;
`;

const CheckList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 1px #e4e4e4;
  gap: 30px;
`;

const GoalBox = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: #ff832b;
`;

const SleepBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const MedicationsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const ExerciseBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const MealsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const Input = styled.input`
  width: 55px;
  height: 55px;
  background-color: #fee5ce;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 55px;
`;

const DiaryTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 60px;
  border-radius: 20px;
  margin: 30px;
  font-size: 25px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  color: white;
  font-weight: bold;
`;

const DiaryInput = styled.textarea`
  width: 640px;
  height: 300px;
  resize: none;
  background-color: #ffffff;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffd4b5;
  padding: 30px;
  font-size: 15px;
`;

const PostButton = styled.button`
  width: 300px;
  height: 55px;
  border: none;
  background-color: #ff832b;
  color: white;
  font-size: large;
  font-weight: bold;
  border-radius: 10px;
  margin: 30px;
  cursor: pointer;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

function CreatePost() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    sleep: 0,
    medications: 0,
    exercises: 0,
    meals: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token); // 로컬 스토리지에서 토큰을 가져옵니다.
        const response = await axios.get(
          `https://dahaessyu.kro.kr/users/profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // 요청 헤더에 토큰을 포함시킵니다.
            },
          }
        );
        const data = response.data;
        setData({
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

  const [date, setDate] = useState({ year: "", month: "", day: "" });
  const [sleep, setSleep] = useState("");
  const [medication, setMedication] = useState("");
  const [exercise, setExercise] = useState("");
  const [meal, setMeal] = useState("");
  const [diary, setDiary] = useState("");

  const handleSubmit = async () => {
    const postData = {
      date: `${date.year}-${date.month}-${date.day}`,
      medication_today: medication,
      exercise_time: exercise,
      meal_count: meal,
      sleep_time: sleep,
      daily_summary: diary,
    };

    try {
      const response = await axios.post(
        "https://dahaessyu.kro.kr/blog/create/",
        postData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Post created successfully:", response.data);
      alert(`오늘의 글이 정상적으로 등록되었습니다`);
      navigate("/PostList/${userId}"); // 게시글 목록 페이지로 이동
    } catch (error) {
      console.error("Error creating post:", error);
      alert("날짜가 올바르지 않거나, 입력하지 않은 내용이 있습니다.");
    }
  };

  const handleNumberInput = (e, setter, max) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && (max === undefined || value === "" || Number(value) <= max)) {
      setter(value);
    }
  };

  return (
    <Wrapper>
      <CheckListTitle>
        <YYYY
          placeholder="YYYY"
          maxLength={4} 
          value={date.year}
          onChange={(e) =>
            handleNumberInput(e, (value) => setDate({ ...date, year: value }))
          }
        />
        년
        <MMDD
          placeholder="MM"
          maxLength={2} 
          value={date.month}
          onChange={(e) =>
            handleNumberInput(e, (value) => setDate({ ...date, month: value }), 12)
          }
        />
        월
        <MMDD
          placeholder="DD"
          maxLength={2} 
          value={date.day}
          onChange={(e) =>
            handleNumberInput(e, (value) => setDate({ ...date, day: value }), 31)
          }
        />
        일 어떤 하루를 보내셨나요?
      </CheckListTitle>
      <CheckList>
        <SleepBox>
          목표 수면 시간 <GoalBox>{data.sleep}</GoalBox>시간 중
          <Input
            value={sleep}
            onChange={(e) => handleNumberInput(e, setSleep, 24)}
          />
          시간 수면함
        </SleepBox>
        <MedicationsBox>
          목표 복약 횟수 <GoalBox>{data.medications}</GoalBox>회 중
          <Input
            value={medication}
            onChange={(e) => handleNumberInput(e, setMedication, 99)}
          />
          회 복용함
        </MedicationsBox>
        <ExerciseBox>
          목표 운동 시간 <GoalBox>{data.exercises}</GoalBox>분 중
          <Input
            value={exercise}
            onChange={(e) => handleNumberInput(e, setExercise, 1440)}
          />
          분 운동함
        </ExerciseBox>
        <MealsBox>
          목표 식사 횟수 <GoalBox>{data.meals}</GoalBox>끼 중
          <Input value={meal} onChange={(e) => handleNumberInput(e, setMeal, 10)} />
          끼 식사함
        </MealsBox>
      </CheckList>
      <DiaryTitle>오늘의 일기</DiaryTitle>
      <DiaryInput
        placeholder="특이사항이나 오늘의 기분 등을 작성해주세요!"
        value={diary}
        onChange={(e) => setDiary(e.target.value)}
      />
      <PostButton onClick={handleSubmit}>등록하기</PostButton>
    </Wrapper>
  );
}

export default CreatePost;