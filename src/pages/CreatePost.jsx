import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

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
  
  const navigate = useNavigate();

  const goalSleep = 8;
  const goalMedication = 3;
  const goalExercise = 40;
  const goalMeal= 3;
  
  const [date, setDate] = useState({ year: '', month: '', day: '' });
  const [sleep, setSleep] = useState('');
  const [medication, setMedication] = useState('');
  const [exercise, setExercise] = useState('');
  const [meal, setMeal] = useState('');
  const [diary, setDiary] = useState('');

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
      const response = await axios.post('/blog/create/', postData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Post created successfully:', response.data);
      navigate('/PostList'); // 게시글 목록 페이지로 이동
    } catch (error) {
      console.error('Error creating post:', error);
      alert('포스트 생성 중 오류가 발생했습니다.');
    }
  };

  return (
    <Wrapper>
      <CheckListTitle>
        <YYYY
          placeholder="YYYY"
          value={date.year}
          onChange={(e) => setDate({ ...date, year: e.target.value })}
        />
        년
        <MMDD
          placeholder="MM"
          value={date.month}
          onChange={(e) => setDate({ ...date, month: e.target.value })}
        />
        월
        <MMDD
          placeholder="DD"
          value={date.day}
          onChange={(e) => setDate({ ...date, day: e.target.value })}
        />
        일 어떤 하루를 보내셨나요?
      </CheckListTitle>
      <CheckList>
        <SleepBox>
          목표 수면 시간 <GoalBox>{goalSleep}</GoalBox>시간 중
          <Input
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
          />
          시간 수면함
        </SleepBox>
        <MedicationsBox>
          목표 복약 횟수 <GoalBox>{goalMedication}</GoalBox>회 중
          <Input
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
          회 복용함
        </MedicationsBox>
        <ExerciseBox>
          목표 운동 시간 <GoalBox>{goalExercise}</GoalBox>분 중
          <Input
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
          분 운동함
        </ExerciseBox>
        <MealsBox>
          목표 식사 횟수 <GoalBox>{goalMeal}</GoalBox>끼 중
          <Input
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
          />
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