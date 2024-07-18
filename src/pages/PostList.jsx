import React from "react";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const DatehBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 150px;
`;

const LeftButton = styled.img`
  background-color: #f8f6e9;
  height: 30px;
  border-style: none;
  cursor: pointer;
`;

const RightButton = styled.img`
  background-color: #f8f6e9;
  height: 30px;
  border-style: none;
  cursor: pointer;
`;

const MonthText = styled.h1`
  margin: 0;
  color:#373737;
  font-size: 50px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, auto);
  gap: 16px;
  padding: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content:flex-end;
`;

const GoToPost = styled.button`
  width: 130px;
  height: 45px;
  margin-right: 30px;
  margin-bottom: 20px;
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
  const [cards, setCards] = useState(Array(31).fill({}));

  useEffect(() => {
    
  }, []);
  
  return (
      <div>
         <DatehBox>
            <LeftButton src={`${process.env.PUBLIC_URL}/left.png`} alt="left"/>
            <MonthText>JULY</MonthText>
            <RightButton src={`${process.env.PUBLIC_URL}/right.png`} alt="right"/>
         </DatehBox> 
         <GridContainer>
         {cards.map((_, index) => (
        <Card key={index} />
      ))}
         </GridContainer>
         <ButtonContainer>
            <GoToPost onClick={handleCreatePostClick}>글쓰기</GoToPost>
         </ButtonContainer>
      </div>
    );
  };
  
  export default PostList;
  