import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
  width:110px;
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
  width:55px;
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
  flex-direction:column;
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
  color:  #ff832b;
`;

const SleepBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const MedicationsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const ExerciseBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const MealsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
`;

const Input = styled.input`
  width:55px;
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
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  padding: 30px;
  font-size: 15px;
`;

const PostButton = styled.button`
  width: 300px;
  height: 55px;
  border: none;
  background-color:#ff832b;
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
  const goalSleep = 8;
  const goalMedication = 3;
  const goalExercise = 40;
  const goalMeal= 3;
  
  return (
    <Wrapper>
      <CheckListTitle>
        <YYYY/>년
        <MMDD/>월
        <MMDD/>일
        어떤 하루를 보내셨나요?
      </CheckListTitle>
      <CheckList>
        <SleepBox>목표 수면 시간 <GoalBox>{goalSleep}</GoalBox>시간 중<Input/>시간 잠</SleepBox>
        <MedicationsBox>목표 복약 횟수 <GoalBox>{goalMedication}</GoalBox>회 중<Input/>회 복용함</MedicationsBox>
        <ExerciseBox>목표 운동 시간 <GoalBox>{goalExercise}</GoalBox>분 중<Input/>분 운동함</ExerciseBox>
        <MealsBox>목표 식사 횟수 <GoalBox>{goalMeal}</GoalBox>회 중<Input/>회 식사함</MealsBox>
      </CheckList>
      <DiaryTitle>오늘의 일기</DiaryTitle>
      <DiaryInput placeholder="특이사항이나 오늘의 기분 등을 작성해주세요!"></DiaryInput>
      <PostButton>등록하기</PostButton>
    </Wrapper>
  )
}

export default CreatePost;