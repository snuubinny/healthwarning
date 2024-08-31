import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Pen from "../img/pen.png";
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

const NavBarWrapper = styled.div`
  width: 100%;
  height: 70px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee5ce;
  font-size: 40px;
  color: #f4a003;
  font-family: "Nanum Pen Script", cursive;
  width: 100%;
  height: 150px;
  border-radius: 0px 0px 100px 100px;
`;

const Pencil = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 30px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CheckListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DairyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CheckListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 45px;
  border-radius: 20px;
  margin: 10px;
  margin-top: 0;
  font-size: 20px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  color: white;
  font-weight: bold;
`;

const YYYY = styled.input`
  width: 80px;
  height: 25px;
  background-color: #fee5ce;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  margin: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 55px;
`;

const MMDD = styled.input`
  width: 40px;
  height: 25px;
  background-color: #fee5ce;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  margin: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 55px;
`;

const CheckList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 1px #e4e4e4;
  gap: 20px;
`;

const GoalBox = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #ff832b;
`;

const SleepBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  gap: 10px;
`;

const MedicationsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  gap: 10px;
`;

const ExerciseBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  gap: 10px;
`;

const MealsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  gap: 10px;
`;

const Input = styled.input`
  width: 35px;
  height: 35px;
  background-color: #fee5ce;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  font-size: 18px;
  text-align: center;
  line-height: 55px;
`;

const DiaryTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 45px;
  border-radius: 20px;
  margin: 10px;
  margin-top: 20px;
  font-size: 18px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  color: white;
  font-weight: bold;
`;

const DiaryInput = styled.textarea`
  width: 300px;
  height: 150px;
  resize: none;
  background-color: #ffffff;
  border-style: none;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 1px #e4e4e4;
  outline-color: #ffd4b5;
  padding: 30px;
  font-size: 13px;
`;

const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const PostButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 45px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 30px;
  border-style: none;
  background-color: #ff832b;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #ff832b;
  }
`;

const Wrapper = styled.div`
  background-color: #f8f6e9;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function CreatePost() {
  const [isVisible, setIsVisible] = useState(false);
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
          `https://healthwarning.kro.kr/users/profile/`,
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
        "https://healthwarning.kro.kr/blog/create/",
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
    if (
      /^\d*$/.test(value) &&
      (max === undefined || value === "" || Number(value) <= max)
    ) {
      setter(value);
    }
  };

  return (
    <>
      <Wrapper>
        <AnimatedContainer isVisible={isVisible}>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
          <PostHeader>
            <Pencil src={Pen} />
            "매일매일 기록하는
            <br /> 오늘의 건강 일기"
          </PostHeader>
          <InfoWrapper>
            <CheckListContainer>
              <CheckListTitle>
                <YYYY
                  placeholder="YYYY"
                  maxLength={4}
                  value={date.year}
                  onChange={(e) =>
                    handleNumberInput(e, (value) =>
                      setDate({ ...date, year: value })
                    )
                  }
                />
                년
                <MMDD
                  placeholder="MM"
                  maxLength={2}
                  value={date.month}
                  onChange={(e) =>
                    handleNumberInput(
                      e,
                      (value) => setDate({ ...date, month: value }),
                      12
                    )
                  }
                />
                월
                <MMDD
                  placeholder="DD"
                  maxLength={2}
                  value={date.day}
                  onChange={(e) =>
                    handleNumberInput(
                      e,
                      (value) => setDate({ ...date, day: value }),
                      31
                    )
                  }
                />
                일
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
                  <Input
                    value={meal}
                    onChange={(e) => handleNumberInput(e, setMeal, 10)}
                  />
                  끼 식사함
                </MealsBox>
              </CheckList>
            </CheckListContainer>
            <DairyContainer>
              <DiaryTitle>어떤 하루를 보내셨나요?</DiaryTitle>
              <DiaryInput
                placeholder="특이사항이나 오늘의 기분 등을 작성해주세요!"
                value={diary}
                onChange={(e) => setDiary(e.target.value)}
              />
            </DairyContainer>
          </InfoWrapper>
          <PostButtonContainer>
            <PostButton onClick={handleSubmit}>오늘의 글 등록하기</PostButton>
          </PostButtonContainer>
          <UnderNavBar />
        </AnimatedContainer>
      </Wrapper>
    </>
  );
}

export default CreatePost;
