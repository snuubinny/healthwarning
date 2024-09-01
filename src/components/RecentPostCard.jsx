import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ZeroImage from "../img/0percent.png";
import TwentyfiveImage from "../img/25percent.png";
import FiftyImage from "../img/50percent.png";
import SeventyfiveImage from "../img/75percent.png";
import HundredImage from "../img/100percent.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 435px;
  height: 170px;
`;
const RecentPostsBox = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 290px;
  height: 170px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1px #dfdfdf;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 1px #fee5ce;
  }
`;

const PostDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 35px;
  display: flex;
  font-size: 15px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  color: white;
  margin: 0;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AchivementRateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const AchivementRate = styled.img`
  width: 70px;
  height: 70px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 5px;
  font-weight: 500;
  font-size: 13px;
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
  margin-right: 10px;
`;

const LeftButton = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 3px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);

  &:hover {
    width: 40px;
    height: 40px;
    margin-right: 0px;
    transition: all 0.1s ease-in-out;
  }
`;

const RightButton = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 3px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);

  &:hover {
    width: 40px;
    height: 40px;
    margin-right: 0;
    transition: all 0.1s ease-in-out;
  }
`;

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 335px;
  margin-left: 50px;
  margin-right: 50px;
  gap: 5px;
  height: 180px;
  margin-top: 20px;
  background-color: #fcfcfc;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1px #dfdfdf;
  font-size: 13px;
`;

const RecentPostCard = ({ post, onClick }) => {
  const navigate = useNavigate();

  const getAchievementImage = () => {
    const { achievement_rate } = data;
    if (achievement_rate === 0) return ZeroImage;
    if (achievement_rate <= 25) return TwentyfiveImage;
    if (achievement_rate <= 50) return FiftyImage;
    if (achievement_rate <= 75) return SeventyfiveImage;
    return HundredImage;
  };

  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://healthwarning.kro.kr/blog/posts/${post.id}`, // post_id를 사용하여 API 요청
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [post.id]);

  const { date, sleep_time, medication_today, exercise_time, meal_count } = post;

  const handleClick = () => {
    navigate(`/post/${post.id}`); // postId를 사용하여 해당 포스트로 이동
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!data) {
    return (
      <EmptyBox>
        No Data Available
      </EmptyBox>
    );
  }

  return (
    <Wrapper>
    <LeftButton
          src={`${process.env.PUBLIC_URL}/leftbutton.png`}
          alt="left"
          onClick={handleLeftClick}
        />
      <RecentPostsBox onClick={handleClick}>
      <PostDate>{date} 의 건강 기록</PostDate>
      <AchivementRateContainer>
        <AchivementRate src={getAchievementImage()} alt="Achievement Percentage" />
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
      </AchivementRateContainer>
    </RecentPostsBox>
    <RightButton
          src={`${process.env.PUBLIC_URL}/rightbutton.png`}
          alt="right"
          onClick={handleRightClick}
        />
    </Wrapper>
  );
};

export default RecentPostCard;
