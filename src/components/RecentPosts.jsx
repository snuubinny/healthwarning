import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const MainContainer = styled.div`
  display: grid;
  display: flex;
  flex-direction: row;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  width: 100%;
  height: 350px;
`;

const RecentPostsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 66.67%;
`;

const RecentPostsBox = styled.img`
  width:300px;
  height:300px;
  background-color: white;
`;

const LeftButton = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);
`;

const RightButton = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);
`;

const MissYouButton = styled.img`
  width:150px;
  height:120px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  margin-left: 160px;
  margin-top: 180px;
  cursor: pointer;

  &:hover {
    content: url('${process.env.PUBLIC_URL}/missyou-1.png');
    width: 200px;
    height: 160px;
    margin-left: 140px;
    margin-top: 120px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const RecentPosts = () => {

  return (
    <>
    <MainContainer> 
         <RecentPostsContainer>
          <LeftButton src={`${process.env.PUBLIC_URL}/leftbutton.png`} alt="left"/>
          <RecentPostsBox>
            {/* <Card></Card> */}
          </RecentPostsBox>
          <RightButton src={`${process.env.PUBLIC_URL}/rightbutton.png`} alt="right"/>
        </RecentPostsContainer>
        <MissYouButton src={`${process.env.PUBLIC_URL}/missyou-2.png`} alt="heart"/>
      </MainContainer>
    </>
  );
};

export default RecentPosts;