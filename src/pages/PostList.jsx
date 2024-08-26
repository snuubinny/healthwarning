import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Pagination from "../components/Pagination";
import RecentPosts from "../components/RecentPosts";
import { keyframes } from "styled-components";
import NavBar from "../components/NavBar";

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
  background-color: #FEE5CE;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NavBarWrapper = styled.div`
  width: 100%;
  height: 70px;
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #ffffff;
  color:#353535;
  border: 2px solid #fee5ce;
  border-radius: 20px;
  margin-top: 30px;
  font-size: 30px;
`;

const CheeringComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: #ffdc9b;
  color: #000000;
`;

const AchievementRate = styled.div`
  width: 100px;
  height: 55px;
  border-radius: 20px;
  margin-left: 15px;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  color: #ff832b;
`;

const PostList = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const { userId } = useParams(); // URL 파라미터에서 userId를 가져옴
  const [tenDaysAverage, setTenDaysAverage] = useState(0);
  const navigate = useNavigate();

  const getCheeringMessage = () => {
    if (tenDaysAverage === 0) return "아직 달성한 내용이 없습니다";
    if (tenDaysAverage < 25) return "위험해요!! 다했슈와 함께 건강을 관리해보아요";
    if (tenDaysAverage < 50) return "아직은 부족해요... 건강을 위해 꾸준한 노력이 필요합니다";
    if (tenDaysAverage < 75) return "절반을 넘었어요! 조금만 더 힘내세요!!";
    if (tenDaysAverage < 90) return "건강 목표까지 한걸음 남았어요! 조금만 더 힘내보아요!!";
    return "잘 하고 있어요!! 계속 건강 목표를 달성해보아요";
  };
  
  useEffect(() => {
    const fetchTenDaysAverage = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      console.log("Token:", token); // 토큰 값 확인용

      try {
        const response = await axios.get(
          "https://healthwarning.kro.kr/blog/main/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Response data:", response.data); // 응답 데이터 확인
        if (response.data && response.data.TenDaysAverage !== undefined) {
          setTenDaysAverage(response.data.TenDaysAverage);
        } else {
          console.error("TenDaysAverage is missing in the response");
        }
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchTenDaysAverage();
  }, [userId]);

  const handlePostClick = (postId) => {
    console.log(`Navigating to post: ${postId}`); // 디버깅용 로그
    navigate(`/post/${postId}`);
  };

  return (
  <AnimatedContainer isVisible={isVisible}>
  <Wrapper>
      <NavBarWrapper>
        <NavBar/> 
      </NavBarWrapper> 
      <CheeringComments>{getCheeringMessage()}</CheeringComments>
      <HeadLine>
        최근 10일 내의 달성률은 
        <AchievementRate>{tenDaysAverage !== null ? tenDaysAverage : '...'} </AchievementRate> 
        % 입니다.
      </HeadLine>
      <RecentPosts userId={userId}/>
      <Pagination userId={userId} onPostClick={handlePostClick} />
    </Wrapper>
  </AnimatedContainer>
  );
};

export default PostList;