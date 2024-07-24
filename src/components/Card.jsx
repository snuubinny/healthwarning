import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-bottom: 0;
  gap: 10px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 160px;
  height: auto;
  border-radius: 8px;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Card = () => {
  return (
    <CardWrapper>
      <CardImage src={`${process.env.PUBLIC_URL}/percentcircle.png`} alt="Example" />
      <DateBox>2024.07.01</DateBox>
    </CardWrapper>
  );
};

export default Card;