import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Pagination from "../components/Pagination";
import RecentPosts from "../components/RecentPosts";
import NavBar from "../components/NavBar";
import UnderNavBar from "../components/UnderNavBar";
import MessageIconImage from "../img/message.png";

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
  background-color: #fee5ce;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NavBarWrapper = styled.div`
  width: calc(100% - 8px);
  height: 70px;
  margin-left: 4px;
  margin-right: 4px;
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fee5ce;
  color: #353535;
  border: 2px solid #fee5ce;
  border-radius: 20px;
  font-size: 18px;
  margin-left: 40px;
`;

const MessageIcon = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 30px;
`;

const CommentsWrapper = styled.div`
  width: 240px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 90px;
`;

const CheeringCommentsBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  width: 85%;
  height: 70px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 30px;
  background-color: #ead4c1;
  color: #000000;
`;

const AchievementRate = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #ff832b;
`;

const Container = styled.div`
  background-color: #fee5ce;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const PostList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { userId } = useParams(); // URL 파라미터에서 userId를 가져옴
  const [tenDaysAverage, setTenDaysAverage] = useState(0);
  const navigate = useNavigate();

  const getCheeringMessage = () => {
    if (tenDaysAverage === 0) return "아직 달성한 내용이 없습니다";
    if (tenDaysAverage < 25)
      return "위험해요!! 건강주의보와 함께 건강을 관리해보아요";
    if (tenDaysAverage < 50)
      return "아직은 부족해요...건강을 위해 꾸준한 노력이 필요합니다";
    if (tenDaysAverage < 75)
      return "벌써 절반을 넘었어요!! 조금만 더 힘내세요!!";
    if (tenDaysAverage < 90)
      return "건강 목표까지 한걸음 남았어요!! 조금만 더 힘내보아요!!";
    return "잘 하고 있어요!!계속 건강 목표를 달성해보아요";
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
    <Container>
      <AnimatedContainer isVisible={isVisible}>
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
        <CheeringCommentsBox>
          <MessageIcon src={MessageIconImage} alt="Message Icon" />
          <CommentsWrapper>{getCheeringMessage()}</CommentsWrapper>
        </CheeringCommentsBox>
        <HeadLine>
          최근 10일 내의 달성률은
          <AchievementRate>
            {tenDaysAverage !== null ? tenDaysAverage : "..."}%
          </AchievementRate>
          입니다.
        </HeadLine>
        <RecentPosts userId={userId} />
        <Pagination userId={userId} onPostClick={handlePostClick} />
        <UnderNavBar />
      </AnimatedContainer>
    </Container>
  );
};

export default PostList;
