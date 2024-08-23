import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Pagination from "../components/Pagination";

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
  background: #ffffff;
  border: 2px solid #fee5ce;
  border-radius: 20px;
  margin-top: 30px;
  font-size: 30px;
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
  const { userId } = useParams(); // URL 파라미터에서 userId를 가져옴
  const [tenDaysAverage, setTenDaysAverage] = useState(null);
  const navigate = useNavigate();

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
          "https://dahaessyu.kro.kr/blog/main/",
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
    <Wrapper>
      <Pagination userId={userId} onPostClick={handlePostClick} />
    </Wrapper>
  );
};

export default PostList;
