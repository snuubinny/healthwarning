import React from "react";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

const RecentPostCard = ({ post }) => {

  const { post_id } = useParams(); // useParams 훅을 사용하여 post_id를 가져옴

  const [data, setData] = useState({
    user_meals: 0,
    user_exercises: 0,
    user_medications: 0,
    user_sleep: 0,
    achievement_rate: 0,
  });

  useEffect(() => {
    console.log(`Fetching data for post_id: ${post.id}`); // 디버깅용 로그
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://dahaessyu.kro.kr/blog/posts/${post.id}`, // post_id를 사용하여 API 요청
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched data:", response.data); // 디버깅용 로그
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [post.id]);

  const { date, sleep_time, medication_today, exercise_time, meal_count } = post;
 
  return (
    <RecentPostsBox>
      <PostDate>{date}</PostDate>
      <AchivementRateContainer>
        <AchivementRate src={`${process.env.PUBLIC_URL}/percentcircle.png`} alt="Example" />
      </AchivementRateContainer>
      <InfoBox>
        <SleepInfo>
          <HighLight2>• 수면</HighLight2> 목표 시간 {data.user_sleep}시간 중 <HighLight>{sleep_time}</HighLight>시간
        </SleepInfo>
        <MedicationInfo>
          <HighLight2>• 복약</HighLight2> 목표 횟수 {data.user_medications}회 중 <HighLight>{medication_today}</HighLight>회
        </MedicationInfo>
        <ExerciseInfo>
          <HighLight2>• 운동</HighLight2> 목표 시간 {data.user_exercises}분 중 <HighLight>{exercise_time}</HighLight>분
        </ExerciseInfo>
        <MealInfo>
          <HighLight2>• 식사</HighLight2> 목표 횟수 {data.user_meals}끼 중 <HighLight>{meal_count}</HighLight>끼
        </MealInfo>
      </InfoBox>
    </RecentPostsBox>
  );
};

export default RecentPostCard;