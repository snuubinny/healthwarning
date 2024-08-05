import React, { useEffect, useState } from "react";
import AchievementRate from "../components/AchievementRate";
import CommentList from "../components/CommentList";
import styled from "styled-components";
import axios from "axios";
import Footer_Logo from "../img/Footer_Logo.png";
import { useParams, useNavigate } from "react-router-dom";
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

const DeleteButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 680px;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
  margin-bottom: 20px;
`;

const CircleContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: white;
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 220%;
  background-color: #fee5ce;
  border-radius: 70% / 40%;
  transform: translate(-50%, -50%);
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 300px;
  margin-top: 300px;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-right: -30px;
`;

const CircleTitle = styled.div`
  text-align: left;
  color: #ff832b;
  font-size: 40px;
  font-weight: bold;
`;

const CircleText = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 35px;
  color: #003366;
  margin-left: 365px;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const ButtonBackground = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s, opacity 0.2s;
  background-color: rgba(255, 255, 255, 0.8); /* 배경만 반투명하게 설정 */
  padding: 10px;
  border: 1px solid #ff832b;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    background-color: rgba(255, 255, 255, 1);
  }
`;

const ButtonTitle = styled.div`
  text-align: center;
  color: #ff832b;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  position: relative;
`;

const ButtonText = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 20px;
  color: #ff832b;
  text-align: center;
  margin: 0;
`;

const AchievementButton = ({ onClick }) => (
  <ButtonBackground onClick={onClick}>
    <ButtonTitle>달성률 확인</ButtonTitle>
    <ButtonText>오늘의 달성률은?</ButtonText>
  </ButtonBackground>
);

const DiaryButton = ({ onClick }) => (
  <ButtonBackground onClick={onClick}>
    <ButtonTitle>일기장 확인</ButtonTitle>
    <ButtonText>오늘의 이야기는?</ButtonText>
  </ButtonBackground>
);

const Post = () => {
  const { post_id, userId } = useParams();
  const [postDate, setPostDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDate = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://dahaessyu.kro.kr/blog/posts/${post_id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { date } = response.data;
        setPostDate(date);
      } catch (error) {
        console.error(
          "Failed to fetch post date:",
          error.response ? error.response.data : error.message
        );
        alert("게시글 날짜를 가져오는 데 실패했습니다.");
      }
    };

    fetchPostDate();
  }, [post_id]);

  const handleDeletePost = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://dahaessyu.kro.kr/blog/posts/${post_id}/delete/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("게시글이 삭제되었습니다!");
      navigate(`/PostList/${userId}`);
    } catch (error) {
      console.error(
        "Failed to delete post:",
        error.response ? error.response.data : error.message
      );
      alert("게시글 삭제에 실패했습니다.");
    }
  };

  const scrollToAchievement = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const targetPosition = (documentHeight - viewportHeight) / 3.3;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const scrollToDiary = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const targetPosition = (documentHeight - viewportHeight) / 1.3;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <AnimatedContainer isVisible={isVisible}>
        <CircleContainer>
          <Circle>
            <TitleContainer>
              <Logo src={Footer_Logo} alt="Footer Logo" />
              <CircleTitle>다했슈의 새로운 포스팅</CircleTitle>
            </TitleContainer>
            <CircleText>반가워요 {postDate}의 포스팅이에요!</CircleText>
            <ButtonContainer>
              <AchievementButton onClick={scrollToAchievement} />
              <DiaryButton onClick={scrollToDiary} />
            </ButtonContainer>
          </Circle>
        </CircleContainer>
      </AnimatedContainer>

      <AchievementRate />
      <DeleteButton onClick={handleDeletePost}>게시글 삭제</DeleteButton>
      <CommentList />
    </>
  );
};

export default Post;
