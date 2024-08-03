import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import RecentPostCard from "./RecentPostCard";

const MainContainer = styled.div`
  display: grid;
  display: flex;
  flex-direction: row;
  grid-template-rows: 1fr, 1fr, 1fr;
  align-items: center;
  width: 100%;
  height: 400px;
`;

const RecentPostsContainer = styled.div`
  grid-row: 2 / 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 12px;
  width: 66.67%;
  gap: 20px;
`;

const LeftButton = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);

  &:hover{
    width: 63px;
    height: 63px;
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
  grid-row: 3 / 4;
  width:150px;
  height:120px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  margin-left: 160px;
  margin-top: 200px;
  cursor: pointer;

  &:hover {
    content: url('${process.env.PUBLIC_URL}/missyou-1.png');
    width: 200px;
    height: 160px;
    margin-left: 140px;
    margin-top: 140px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const RecentPosts = () => {
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

  return (
    <MainContainer> 
      <RecentPostsContainer>
        <LeftButton src={`${process.env.PUBLIC_URL}/leftbutton.png`} alt="left" onClick={handleLeftClick}/>
        {posts.length > 0  && (
          <RecentPostCard post={posts[currentIndex]}/>
        )}
        <RightButton src={`${process.env.PUBLIC_URL}/rightbutton.png`} alt="right" onClick={handleRightClick}/>
      </RecentPostsContainer>
      <MissYouButton src={`${process.env.PUBLIC_URL}/missyou-2.png`} alt="heart" onClick={handleMissYouClick}/>
    </MainContainer>
  );
};

export default RecentPosts;
