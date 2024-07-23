import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Card from '../components/Card'
import { useNavigate } from "react-router-dom";

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
`;

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

const RecentPosts = styled.img`
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

const PostListContainer = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  padding: 0px;
`;

const PageButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap:10px;
`;

const LeftPageButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const RightPageButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const PageText = styled.h3`
  
`;

const PostButtonContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
`;

const PostButton = styled.button`
  width: 190px;
  height: 50px;
  margin-right: 140px;
  margin-top: 20px;
  font-size: large;
  font-weight: bold;
  border-radius: 10px;
  border-style: none;
  background-color:#ff832b;
  color: white;
  cursor: pointer;

&:hover {
  background-color: #fee5ce;
  color: #ff832b;
}

`;

const PostList = () => {
  const navigate = useNavigate();
  const handleCreatePostClick = () => {
    navigate('/CreatePost');
  };

  const [cards, setCards] = useState(Array(15).fill({}));

  useEffect(() => {
    
  }, []);


  return (
    <Wrapper>
      <HeadLine>최근 10일 내의 달성률은 <AchievementRate/>% 입니다.</HeadLine>
      <MainContainer> 
         <RecentPostsContainer>
          <LeftButton src={`${process.env.PUBLIC_URL}/leftbutton.png`} alt="left"/>
          <RecentPosts>
            {/* <Card></Card> */}
          </RecentPosts>
          <RightButton src={`${process.env.PUBLIC_URL}/rightbutton.png`} alt="right"/>
        </RecentPostsContainer>
        <MissYouButton src={`${process.env.PUBLIC_URL}/missyou-2.png`} alt="heart"/>
      </MainContainer>
      <PostListContainer>
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
      </PostListContainer>
      <PostButtonContainer>
        <PostButton onClick={handleCreatePostClick}>오늘의 글 작성</PostButton>    
      </PostButtonContainer>
      <PageButtonContainer>
        <LeftPageButton src={`${process.env.PUBLIC_URL}/leftbutton.png`} alt="left"/>
        <PageText>1</PageText>
        <RightPageButton src={`${process.env.PUBLIC_URL}/rightbutton.png`} alt="right"/>
      </PageButtonContainer>
    </Wrapper>
    );
  };
  
  export default PostList;
  