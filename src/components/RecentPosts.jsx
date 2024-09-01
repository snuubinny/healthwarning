import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import RecentPostCard from "./RecentPostCard";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  position: relative;
`;

const RecentPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
`;

const LeftButton = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 3px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);

  &:hover {
    width: 40px;
    height: 40px;
    margin-right: 0px;
    transition: all 0.1s ease-in-out;
  }
`;

const RightButton = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 3px;
  cursor: pointer;
  filter: invert(0.3) sepia(0.5) saturate(0.1) hue-rotate(0deg);

  &:hover {
    width: 40px;
    height: 40px;
    margin-right: 0;
    transition: all 0.1s ease-in-out;
  }
`;

const MissYouContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
`;

const HospitalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: -20px;
`;
const HospitalButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-color: #ead4c1;
  cursor: pointer;
  background-image: url("${process.env.PUBLIC_URL}/hostlink.png");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: #9cb3c9;
  }
`;
const HosiptalText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 60px;
  border-radius: 20px;
  font-size: 10px;
  background-color: #ead4c1;
  color: #000000;
`;

const MissYouButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-color: #ead4c1;
  cursor: pointer;
  background-image: url("${process.env.PUBLIC_URL}/missyou.png");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: #e2b8b8;
  }
`;

const MissYouText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 60px;
  border-radius: 20px;
  font-size: 10px;
  background-color: #ead4c1;
  color: #000000;
`;

const HighLight = styled.img`
  width: 25px;
  height: 25px;
  filter: invert(58%) sepia(96%) saturate(3000%) hue-rotate(-10deg) brightness(105%) contrast(90%);
`;

const RecentPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://healthwarning.kro.kr/blog/main/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          setPosts(response.data.posts.slice(0, 10));
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Authentication failed");
        } else {
          console.error("Failed to fetch data");
        }
      }
    };

    fetchData();
  }, []);

  const handleHospitalClick = () => {
    navigate("/Hospital");
  };
  const handleMissYouClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://healthwarning.kro.kr/blog/miss_email/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("보호자에게 이메일이 성공적으로 전송되었습니다.");
      } else {
        throw new Error("이메일 전송에 실패하였습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Not Found");
        alert("User not found");
      } else {
        console.error("An error occurred:", error);
        alert("An error occurred while sending the email");
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
        {posts.length > 0 ? (
          <RecentPostCard
            post={posts[currentIndex]}
            onClick={handlePostClick}
          />
        ) : (
          <EmptyBox>
            <HighLight src={`${process.env.PUBLIC_URL}/post.png`} alt="Post"/>버튼을 눌러 첫 게시글을
            작성해보세요!
          </EmptyBox> // 데이터를 불러오지 못했을 때 빈 박스 표시
        )}
      </RecentPostsContainer>
      <MissYouContainer>
        <MissYouButton onClick={handleMissYouClick} />
        <MissYouText>
          ‘보고싶어 버튼’은 버튼을 누르기만 해도
          <br />
          보호자에게 직접 연락이 닿도록 돕는 시스템이에요.
        </MissYouText>
      </MissYouContainer>
      <HospitalContainer>
        <HosiptalText>
          ‘핫라인 버튼’은 가까운 병원으로 연결되며,
          <br />
          해당 번호가 앱에 저장돼 언제든 연락할 수 있는 기능이에요.
        </HosiptalText>
        <HospitalButton onClick={handleHospitalClick} />
      </HospitalContainer>
    </MainContainer>
  );
};

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 335px;
  margin-left: 50px;
  margin-right: 50px;
  gap: 5px;
  height: 180px;
  margin-top: 20px;
  background-color: #fcfcfc;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1px #dfdfdf;
  font-size: 13px;
`;

export default RecentPosts;
