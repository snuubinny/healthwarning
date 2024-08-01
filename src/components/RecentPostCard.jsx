import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const RecentPostsBox = styled.div`
  display: flex;
  flex-direction: column;
  width:320px;
  height:320px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
   box-shadow: 0px 0px 10px 1px #fee5ce; 
  }
`;

const PostDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 20px;
  background-color: #ffd8b4;
  color: #393939;
  margin: 0;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AchivementRateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    
`;

const AchivementRate = styled.img`
  width: 130px;
  height: 130px;
  margin-top: 10px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 5px;
  gap:3px;
  font-weight: 500;
`;

const SleepInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px; 
`; 

const MedicationInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;    
`; 

const ExerciseInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;    
`; 

const MealInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;    
`; 

const HighLight = styled.div`
  color: #ff832b;
  margin-left: 5px;
  font-weight: bold;
`;

const HighLight2 = styled.div`
  font-weight: bold;
  margin-right:10px ;
`;

const RecentPostCard = (post) => {
  
  const { date, sleep_time, medication_today, exercise_time, meal_count } = post;
   
  const postDate = '2024-07-25'
  const goalSleep = 8;
  const goalMedication = 3;
  const goalExercise = 40;
  const goalMeal= 3;

  const actualSleep = 9;
  const actualMedication = 3;
  const actualExercise = 50;
  const actualMeal= 3;
    return (
      <>
      <RecentPostsBox>
            <PostDate>{postDate}</PostDate>
            <AchivementRateContainer>
                <AchivementRate src={`${process.env.PUBLIC_URL}/percentcircle.png`} alt="Example"/>
            </AchivementRateContainer>
            <InfoBox>
                <SleepInfo>
                    <HighLight2>• 수면</HighLight2> 목표 시간 {goalSleep}시간 중 <HighLight>{actualSleep}</HighLight>시간
                </SleepInfo>
                <MedicationInfo>
                    <HighLight2>• 복약</HighLight2> 목표 횟수 {goalMedication}회 중 <HighLight>{actualMedication}</HighLight>회
                </MedicationInfo>
                <ExerciseInfo>
                    <HighLight2>• 운동</HighLight2> 목표 시간 {goalExercise}분 중 <HighLight>{actualExercise}</HighLight>분
                </ExerciseInfo>
                <MealInfo>
                    <HighLight2>• 식사</HighLight2> 목표 횟수 {goalMeal}끼 중 <HighLight>{actualMeal}</HighLight>끼
                </MealInfo>
            </InfoBox>
          </RecentPostsBox>
      </>
    );
  };
  
  export default RecentPostCard;