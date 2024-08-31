import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SleepImage from "../img/sleep.png";
import MealImage from "../img/meal.png";
import MedicineImage from "../img/medicine.png";
import ExerciseImage from "../img/exercise.png";
import CatImage from "../img/cat.png";
import ZeroImage from "../img/0percent.png";
import TwentyfiveImage from "../img/25percent.png";
import FiftyImage from "../img/50percent.png";
import SeventyfiveImage from "../img/75percent.png";
import HundredImage from "../img/100percent.png";
import { keyframes } from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const PercentContainer = styled.div`
  width: 80%;
  height: 220px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const PercentText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
  line-height: 2;
`;

const TextWrap = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  margin-top: 0px;
  line-height: 1.5;
`;

const Highlight = styled.span`
  color: #ff832b;
`;

const DiaryContainer = styled.div`
  width: 80%;
  height: 220px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const DiaryText = styled.p`
  margin-top: 25px;
  font-family: "Nanum Pen Script", cursive;
  font-size: 20px;
  color: #333;
`;

const StyledCatImage = styled.img`
  width: 70px;
  height: auto;
  border-radius: 8px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const CardImage = styled.img`
  width: 130px;
  height: auto;
  border-radius: 8px;
  margin-left: 105px;
  margin-top: 40px;
`;

const Header = styled.div`
  width: 100%;
  height: 35px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeaderText = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 15px;
  color: white;
  margin-top: 3px;
  margin-left: 15px;
  line-height: 2;
`;

const DetailBoxWrap = styled.div`
  background-color: transparent;
  padding: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: flex-start;
  margin-top: 10px;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none; /* 스크롤바를 숨김 */
  }
`;

const Box = styled.div`
  width: 220px;
  height: 120px;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  flex-shrink: 0;
  &:hover {
    border: 1px solid #ff832b;
  }
`;

const BoxImage1 = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-left: 65px;
  margin-top: 6px;
`;

const BoxImage2 = styled.img`
  width: 80px;
  height: auto;
  border-radius: 8px;
  margin-left: 70px;
  margin-top: 6px;
`;

const BoxImage3 = styled.img`
  width: 95px;
  height: auto;
  border-radius: 8px;
  margin-left: 70px;
  margin-top: 9px;
`;

const BoxImage4 = styled.img`
  width: 75px;
  height: auto;
  border-radius: 8px;
  margin-left: 75px;
  margin-top: 3px;
`;

const SleepBox = styled(Box)``;
const MedicineBox = styled(Box)``;
const ExerciseBox = styled(Box)``;
const MealBox = styled(Box)``;

const AchievementRate = () => {
  const { post_id } = useParams();
  const [data, setData] = useState({
    medication_today: 0,
    exercise_time: 0,
    meal_count: 0,
    sleep_time: 0,
    daily_summary: "",
    user_meals: 0,
    user_exercises: 0,
    user_medications: 0,
    user_sleep: 0,
    achievement_rate: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(`Fetching data for post_id: ${post_id}`);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://healthwarning.kro.kr/blog/posts/${post_id}`,
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
  }, [post_id]);

  const getAchievementImage = () => {
    const { achievement_rate } = data;
    if (achievement_rate === 0) return ZeroImage;
    if (achievement_rate <= 25) return TwentyfiveImage;
    if (achievement_rate <= 50) return FiftyImage;
    if (achievement_rate <= 75) return SeventyfiveImage;
    return HundredImage;
  };

  return (
    <AnimatedContainer isVisible={isVisible}>
      <Wrapper>
        <PercentContainer>
          <Header>
            <HeaderText>오늘의 달성률</HeaderText>
          </Header>
          <CardImage src={getAchievementImage()} alt="Achievement Percentage" />
          <PercentText>
            잘하고 있어요! 목표의
            <Highlight> {data.achievement_rate}%</Highlight>를 달성했어요!
          </PercentText>
        </PercentContainer>
        <DetailBoxWrap>
          <SleepBox>
            <BoxImage1 src={SleepImage} alt="Sleep" />
            <TextWrap>
              목표 수면시간 <Highlight>{data.user_sleep}시간</Highlight> 중
              <br />
              <Highlight>{data.sleep_time}시간 </Highlight>
              수면하였습니다.
            </TextWrap>
          </SleepBox>
          <MedicineBox>
            <BoxImage2 src={MedicineImage} alt="Medicine" />
            <TextWrap>
              목표 약복용 <Highlight>{data.user_medications}회</Highlight> 중
              <br />
              <Highlight>{data.medication_today}회</Highlight> 복용하였습니다.
            </TextWrap>
          </MedicineBox>
          <ExerciseBox>
            <BoxImage3 src={ExerciseImage} alt="Exercise" />
            <TextWrap>
              목표 운동시간 <Highlight>{data.user_exercises}분</Highlight> 중
              <br />
              <Highlight>{data.exercise_time}분</Highlight> 운동하였습니다.
            </TextWrap>
          </ExerciseBox>
          <MealBox>
            <BoxImage4 src={MealImage} alt="Meal" />
            <TextWrap>
              목표 식사횟수 <Highlight>{data.user_meals}끼</Highlight> 중<br />
              <Highlight>{data.meal_count}끼</Highlight> 섭취하였습니다.
            </TextWrap>
          </MealBox>
        </DetailBoxWrap>
        <DiaryContainer>
          <Header>
            <HeaderText>오늘의 일기</HeaderText>
          </Header>
          <DiaryText className="Nanum Pen Script">
            {data.daily_summary}
          </DiaryText>
          <StyledCatImage src={CatImage} alt="Catimage" />
        </DiaryContainer>
      </Wrapper>
    </AnimatedContainer>
  );
};

export default AchievementRate;
