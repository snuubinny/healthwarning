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
  width: 700px;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  background:#ffffff;
  border: 2px solid #fee5ce;
  /* background: linear-gradient(to right, #ff832b, #ffb74d);
  color:white; */
  border-radius: 20px;
  margin-top: 30px;
  font-size: 30px;
  /* box-shadow: 0px 0px 10px 1px #fee5ce; */
`;

const AchievementRate = styled.div`
  width:100px;
  height: 55px;
  /* background-color: #fee5ce; */
  border-radius: 20px;
  margin-left: 15px;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  color: #ff832b;
`;

const PostList = () => {
  const navigate = useNavigate();

  const [tenDaysAverage, setTenDaysAverage] = useState(100);

  // useEffect(() => {
  //   axios.get('/users/main/')
  //     .then(response => {
  //       setTenDaysAverage(response.data.TenDaysAverage);
  //     })
  //     .catch(error => {
  //       console.error("There was an error fetching the data!", error);
  //     });
  // }, []);


  // useEffect(() => {
    
  // }, []);


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