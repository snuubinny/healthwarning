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

const Percent = styled.div`
  width: 60%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  background-color: #f8f6e9;
  margin: auto;
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

const CommentField = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: 15px;
  padding-left: 30px;
  &:focus {
    outline: 2px solid #ff832b;
  }
  margin-bottom: 20px;
`;

const CommentButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 80px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;
  font-weight: bold;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
  margin-bottom: 20px;
`;

const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  margin-left: 10px;
`;

const CommentButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <Percent>
          <p>여기에는 달성률 이미지 붙일 예정</p>
        </Percent>
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
