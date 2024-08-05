import React from "react";
import styled from "styled-components";
import ZeroImage from "../img/0percent.png";
import TwentyfiveImage from "../img/25percent.png";
import FiftyImage from "../img/50percent.png";
import SeventyfiveImage from "../img/75percent.png";
import HundredImage from "../img/100percent.png";

const CardWrapper = styled.div`
  background: #fff;
  border: 1px solid #fee5ce;
  border-radius: 8px;
  padding-top: 15px;
  padding-bottom: 0;
  gap: 10px;
  text-align: center;
  border: 1px solid #e7d4c7;

  &:hover {
    border: 1px solid #ff832b;
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 8px;
`;

const DateBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Card = ({ data, onClick }) => {
  const handleClick = () => {
    onClick(data.id); // postId를 전달
  };

  const getAchievementImage = () => {
    const { achievement_rate } = data;
    if (achievement_rate === 0) return ZeroImage;
    if (achievement_rate <= 25) return TwentyfiveImage;
    if (achievement_rate <= 50) return FiftyImage;
    if (achievement_rate <= 75) return SeventyfiveImage;
    return HundredImage;
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardImage src={getAchievementImage()} alt="Achievement Percentage"/>
      <DateBox>{data.date}</DateBox>
    </CardWrapper>
  );
};

export default Card;
