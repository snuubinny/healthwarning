import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import RecentPostCard from "./RecentPostCard";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 470px;
  position: relative; /* MissYouButton을 절대 위치로 배치하기 위해 추가 */
`;

const RecentPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const LeftButton = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 3px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);

  &:hover{
    width: 63px;
    height: 63px;
    margin-right: 0px;
    transition: all 0.1s ease-in-out;
  }
`;

const RightButton = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 3px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);

  &:hover{
    width: 63px;
    height: 63px;
    margin-right: 0;
    transition: all 0.1s ease-in-out;
  }
`;

const MissYouButton = styled.img`
  width: 150px;
  height: 120px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  position: absolute; /* 절대 위치로 배치 */
  margin-right: 50px;
  margin-bottom: 10px;
  bottom: 20px; /* 부모 요소의 아래쪽에 배치 */
  right: 20px; /* 부모 요소의 오른쪽에 배치 */
  cursor: pointer;

  &:hover {
    content: url('${process.env.PUBLIC_URL}/missyou-1.png');
    width: 200px;
    height: 160px;
    margin-bottom: 20px;
    bottom: 10px; /* 부모 요소의 아래쪽에 배치 */
    right: 10px; /* 부모 요소의 오른쪽에 배치 */
    object-fit: cover;
    cursor: pointer;
  }
`;

const HighLight = styled.div`
  color: #ff832b;
  margin-left: 5px;
  font-weight: bold;
`;

const RecentPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dahaessyu.kro.kr/blog/main/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.status === 200) {
          setPosts(response.data.posts.slice(0, 10));
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Authentication failed');
        } else {
          console.error('Failed to fetch data');
        }
      }
    };

    fetchData();
  }, []);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1));
  };

  const handleMissYouClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`https://dahaessyu.kro.kr/blog/miss_email/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('Not Found');
        alert('User not found');
      } else {
        console.error('An error occurred:', error);
        alert('An error occurred while sending the email');
      }
    }
  };

  const handlePostClick = (postId) => {
    console.log(`Navigating to post: ${postId}`); // 디버깅용 로그
    navigate(`/post/${postId}`);
  };

  return (
    <MainContainer>
      <RecentPostsContainer>
        <LeftButton src={`${process.env.PUBLIC_URL}/leftbutton.png`} alt="left" onClick={handleLeftClick}/>
        {posts.length > 0 ? (
          <RecentPostCard post={posts[currentIndex]} onClick={handlePostClick}/>
        ) : (
          <EmptyBox>
            <HighLight>'오늘의 글 작성'</HighLight>을 눌러 첫 게시글을 작성해보세요!
          </EmptyBox> // 데이터를 불러오지 못했을 때 빈 박스 표시
        )}
        <RightButton src={`${process.env.PUBLIC_URL}/rightbutton.png`} alt="right" onClick={handleRightClick}/>
      </RecentPostsContainer>
      <MissYouButton src={`${process.env.PUBLIC_URL}/missyou-2.png`} alt="heart" onClick={handleMissYouClick}/>
    </MainContainer>
  );
};

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 650px;
  height: 380px;
  margin-top: 20px;
  background-color: #fcfcfc;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1px #dfdfdf;
  font-size: 23px;
`;

export default RecentPosts;
