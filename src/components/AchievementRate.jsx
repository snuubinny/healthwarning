import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SleepImage from "../img/sleep.png";
import MealImage from "../img/meal.png";
import MedicineImage from "../img/medicine.png";
import ExerciseImage from "../img/exercise.png";
import CatImage from "../img/cat.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PercentContainer = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  height: 450px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const PercentText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  line-height: 2;
`;

const TextWrap = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  margin-top: 10px;
  line-height: 2;
`;

const Highlight = styled.span`
  color: #ff832b;
`;

const DiaryContainer = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  min-height: 400px;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const DiaryText = styled.p`
  margin-top: 60px;
  font-family: "Nanum Pen Script", cursive;
  font-size: 30px;
  color: #333;
`;

const StyledCatImage = styled.img`
  width: 110px;
  height: auto;
  border-radius: 8px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
const CardImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 8px;
  margin-left: 240px;
  margin-top: 70px;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
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
  font-size: 18px;
  color: white;
  margin-top: 12px;
  margin-left: 15px;
  line-height: 2;
`;

const DetailTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 60px;
  border-radius: 20px;
  margin: 10px;
  font-size: 22px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  color: white;
  font-weight: bold;
`;

const DetailBoxWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  justify-items: center;
  margin-top: 30px;
`;

const Box = styled.div`
  width: 170px;
  padding: 10px;
  position: relative;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 180px;
  margin-bottom: 20px;
  &:hover {
    border: 1px solid #ff832b;
  }
`;

const BoxImage1 = styled.img`
  width: 120px;
  height: auto;
  border-radius: 8px;
  margin-left: 25px;
  margin-top: 15px;
`;

const BoxImage2 = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-left: 35px;
  margin-top: 10px;
`;

const BoxImage3 = styled.img`
  width: 110px;
  height: auto;
  border-radius: 8px;
  margin-left: 35px;
  margin-top: 27px;
`;
const BoxImage4 = styled.img`
  width: 90px;
  height: auto;
  border-radius: 8px;
  margin-left: 35px;
  margin-top: 10px;
`;

const SleepBox = styled(Box)``;
const MedicineBox = styled(Box)``;
const ExerciseBox = styled(Box)``;
const MealBox = styled(Box)``;

const AchievementRate = () => {
  /*
  const { userId } = useParams(); // URL 파라미터에서 userId 가져오기
  const [userInfo, setUserInfo] = useState(null); // 상태로 회원 정보 저장

  useEffect(() => {
    axios
      .get(`https:/~/${userid}`)
      .then((res) => {
        setAuctionList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 */

  const percentage = 75;

  return (
    <Wrapper>
      <PercentContainer>
        <Header>
          <HeaderText>오늘의 달성률</HeaderText>
        </Header>
        <CardImage
          src={`${process.env.PUBLIC_URL}/percentcircle.png`}
          alt="Example"
        />
        <PercentText>
          잘하고 있어요! 목표의 <Highlight>{percentage}%</Highlight>를
          달성했어요!
        </PercentText>
      </PercentContainer>
      <DetailTitle>세부 달성률</DetailTitle>
      <DetailBoxWrap>
        <SleepBox>
          <BoxImage1 src={SleepImage} alt="Sleep" />
          <TextWrap>
            목표 수면시간 <Highlight>8시간</Highlight> 중<br />
            <Highlight>6시간 </Highlight>
            수면하였습니다.
          </TextWrap>
        </SleepBox>
        <MedicineBox>
          <BoxImage2 src={MedicineImage} alt="Medicine" />
          <TextWrap>
            목표 약복용 <Highlight>3회 </Highlight>중<br />
            <Highlight>3회 </Highlight> 복용하였습니다.
          </TextWrap>
        </MedicineBox>
        <ExerciseBox>
          <BoxImage3 src={ExerciseImage} alt="Exercise" />
          <TextWrap>
            목표 운동시간 <Highlight>30분 </Highlight>중<br />
            <Highlight>40분 </Highlight> 운동하였습니다.
          </TextWrap>
        </ExerciseBox>
        <MealBox>
          <BoxImage4 src={MealImage} alt="Meal" />
          <TextWrap>
            목표 식사횟수 <Highlight>3끼 </Highlight>중<br />
            <Highlight>3끼 </Highlight> 섭취하였습니다.
          </TextWrap>
        </MealBox>
      </DetailBoxWrap>
      <DiaryContainer>
        <Header>
          <HeaderText>오늘의 일기</HeaderText>
        </Header>
        <DiaryText className="Nanum Pen Script">안녕하세요</DiaryText>
        <StyledCatImage src={CatImage} alt="Catimage" />
      </DiaryContainer>
    </Wrapper>
  );
};

export { AchievementRate };

/*  <PercentText>
          잘하고 있어요! 목표의 <Highlight>{userInfo.percentage}%</Highlight>를
          달성했어요!
        </PercentText>...등등으로 쭉쭉~*/
