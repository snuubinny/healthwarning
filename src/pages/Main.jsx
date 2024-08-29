import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState } from "react";
import MainButton from "../components/MainButton";
import LoginButton from "../components/LoginButton";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  opacity: 1;
  transform: translateY(0);
`;

const AlarmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  background-color: #fff5bf;
  box-sizing: border-box;
  margin-top: 50px;
`;

const AlarmContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 12px;
  height: 130px;
  position: relative;
  padding-top: 20px;
  padding-bottom: 40px;
  z-index: 10;
`;
const ContentWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const TextWrapper = styled.div`
  text-align: center;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  font-size: 8px;
  line-height: 1.3;
  z-index: 10;
`;

const CloudCircle = styled.div`
  width: 400px;
  height: 900px;
  background-color: white;
  border-radius: 300px;
  position: absolute;
  bottom: 0;
`;

const CloudLeft = styled(CloudCircle)`
  left: -150px;
  top: 140px;
`;

const CloudRight = styled(CloudCircle)`
  right: -180px;
  top: 95px;
`;

const Main = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <Wrapper>
        <AlarmContainer></AlarmContainer>
        <AlarmContainer2></AlarmContainer2>
        <MainButton></MainButton>
        <LoginButton></LoginButton>
        <WrapFooter>
          <CloudLeft />
          <CloudRight />
          <ContentWrapper>
            <TextWrapper>
              삐용삐용(bbiyong) | 대표자: 김지후(FE), 전수빈(FE), 김민경(BE),
              손가영(BE)
              <br />
              문의전화: 010-1234-5678 <br />
              e-mail: 12345678@inha.edu <br />
              instagram:@bbiyong_bbiyong
            </TextWrapper>
          </ContentWrapper>
        </WrapFooter>
      </Wrapper>
    </div>
  );
};

export default Main;
