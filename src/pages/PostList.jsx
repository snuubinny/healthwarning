import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";
import Pagination from '../components/Pagination';
import RecentPosts from "../components/RecentPosts";
import axios from "axios";

const Wrapper = styled.div`
  background-color: #f8f6e9;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 30px;
  font-size: 30px;
  gap:5px;
  box-shadow: 0px 0px 10px 1px rgb(220, 220, 220);
`;

const AchievementRate = styled.div`
  width:100px;
  height: 55px;
  background-color: #fee5ce;
  font-size: 20px;
  border-radius: 20px;
  margin-left: 15px;
  text-align: center;
  font-size: 38px;
`;

const PostList = () => {
  const navigate = useNavigate();

  const [tenDaysAverage, setTenDaysAverage] = useState(0);

  useEffect(() => {
    axios.get('/users/main/')
      .then(response => {
        setTenDaysAverage(response.data.TenDaysAverage);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);


  useEffect(() => {
    
  }, []);


  return (
    <Wrapper>
      <HeadLine>
        최근 10일 내의 달성률은 
        <AchievementRate>{tenDaysAverage}</AchievementRate> 
        % 입니다.
      </HeadLine>
      <RecentPosts></RecentPosts>
      <Pagination></Pagination>
    </Wrapper>
    );
  };
  
  export default PostList;