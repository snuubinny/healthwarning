import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PercentContainer = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  height: 450px;
  margin-bottom: 20px;
  margin-top: 50px;
  &:hover {
    border: 1px solid #ff832b;
  }
`;

const TextWrap = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
  line-height: 2;
`;

const Highlight = styled.span`
  color: #ff832b;
`;

const ContentContainer = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  height: 300px;
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 8px;
  margin-left: 240px;
  margin-top: 40px;
`;

const AchievementRate = () => {
  const percentage = 75;
  const goalSleep = 8;
  const actualSleep = 6;
  const goalGym = 50;
  const acualGym = 30;

  return (
    <Wrapper>
      <PercentContainer>
        <CardImage
          src={`${process.env.PUBLIC_URL}/percentcircle.png`}
          alt="Example"
        />

        <TextWrap>
          잘하고 있어요! 목표의 <Highlight>{percentage}%</Highlight>를
          달성했어요!
        </TextWrap>
      </PercentContainer>
      <ContentContainer>
        <TextWrap>
          목표수면시간 {goalSleep}시간 중 <Highlight>{actualSleep}</Highlight>
          시간 수면하였습니다.
          <br />
          목표운동시간 {goalGym}분 중 <Highlight>{acualGym}</Highlight>분
          운동했습니다.
          <br />
          등등의 내용들...
        </TextWrap>
      </ContentContainer>
    </Wrapper>
  );
};

export { AchievementRate };
