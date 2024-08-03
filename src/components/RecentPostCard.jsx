import React from "react";
import styled from "styled-components";

const RecentPostsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 320px;
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
  gap: 3px;
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
  margin-right: 10px;
`;

const RecentPostCard = () => {
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
    date: "", // 날짜 추가
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://dahaessyu.kro.kr/blog/posts/recent`, // 최근 게시글을 가져오는 엔드포인트로 변경
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
  }, []);

  return (
    <RecentPostsBox>
      <PostDate>{data.date}</PostDate>
      <AchivementRateContainer>
        <AchivementRate
          src={`${process.env.PUBLIC_URL}/percentcircle.png`}
          alt="Example"
        />
      </AchivementRateContainer>
      <InfoBox>
        <SleepInfo>
          <HighLight2>• 수면</HighLight2> 목표 시간 {data.user_sleep}시간 중
          <HighLight>{data.sleep_time}</HighLight>시간
        </SleepInfo>
        <MedicationInfo>
          <HighLight2>• 복약</HighLight2> 목표 횟수 {data.user_medications}회 중
          <HighLight>{data.medication_today}</HighLight>회
        </MedicationInfo>
        <ExerciseInfo>
          <HighLight2>• 운동</HighLight2> 목표 시간 {data.user_exercises}분 중
          <HighLight>{data.exercise_time}</HighLight>분
        </ExerciseInfo>
        <MealInfo>
          <HighLight2>• 식사</HighLight2> 목표 횟수 {data.user_meals}끼 중
          <HighLight>{data.meal_count}</HighLight>끼
        </MealInfo>
      </InfoBox>
    </RecentPostsBox>
  );
};

export default RecentPostCard;
