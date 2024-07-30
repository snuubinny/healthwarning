import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  border: 1px solid #fee5ce;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px  #fee5ce(0, 0, 0, 0.1); */
  padding: 20px;
  padding-bottom: 0;
  gap: 10px;
  text-align: center;

  &:hover {
   border: 1px solid #ff832b;
   cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 160px;
  height: auto;
  border-radius: 8px;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Card = ({data}) => {
  return (
    <CardWrapper>
      <CardImage src={`${process.env.PUBLIC_URL}/percentcircle.png`} alt="Example" />
      <DateBox>2024-07-01</DateBox>
    
      {/* <CardImage>{data.achievement_rate}%</CardImage>
      <DateBox>{data.date}</DateBox> */}

    </CardWrapper>
  );
};

export default Card;