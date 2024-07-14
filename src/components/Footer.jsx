import React from 'react';
import styled from 'styled-components';
import githubIcon from '../img/github.png';

const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white; 
  color: black; 
  font-size: 12px;
  height: 100px;
  position: relative;
`;

const ContentWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; 
`;

const Icon = styled.svg`
  width: 40px;
  height: 40px;
  fill: currentColor;
  margin-right: 8px; 
`;

const TitleWrapper = styled.div`
  text-align: left;
  font-size: 16px;
`;

const GithubIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const TextWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
`;

const GithubWrapper = styled.div`
  font-size: 16px;
  text-align: right;
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

function Footer() {
  return (
    <WrapFooter>
      <ContentWrapper>
        <IconWrapper>
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M7.491 5.992a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM7.49 11.995a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM7.491 17.994a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.24 3.745a.75.75 0 0 1 .75-.75h1.125a.75.75 0 0 1 .75.75v3h.375a.75.75 0 0 1 0 1.5H2.99a.75.75 0 0 1 0-1.5h.375v-2.25H2.99a.75.75 0 0 1-.75-.75ZM2.79 10.602a.75.75 0 0 1 0-1.06 1.875 1.875 0 1 1 2.652 2.651l-.55.55h.35a.75.75 0 0 1 0 1.5h-2.16a.75.75 0 0 1-.53-1.281l1.83-1.83a.375.375 0 0 0-.53-.53.75.75 0 0 1-1.062 0ZM2.24 15.745a.75.75 0 0 1 .75-.75h1.125a1.875 1.875 0 0 1 1.501 2.999 1.875 1.875 0 0 1-1.501 3H2.99a.75.75 0 0 1 0-1.501h1.125a.375.375 0 0 0 .036-.748H3.74a.75.75 0 0 1-.75-.75v-.002a.75.75 0 0 1 .75-.75h.411a.375.375 0 0 0-.036-.748H2.99a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </Icon>
          <TitleWrapper>
            <h2>다했슈<span style={{ color: '#ff832b' }}>(DHS)</span></h2>
          </TitleWrapper>
        </IconWrapper>
        <TextWrapper>
          <div>
            다했슈(DHS) | 대표자: 김지후(FE), 전수빈(FE), 김민경(BE), 손가영(BE), 심성민(BE)<br />
            문의전화: 010-1234-5678 <br />
            e-mail: 12345678@inha.edu
          </div>
          <GithubWrapper>
            <GithubLink href="https://github.com/InHelion" target="_blank" rel="noopener noreferrer">
              <GithubIcon src={githubIcon} alt="GitHub" />
              Go to GitHub
            </GithubLink>
          </GithubWrapper>
        </TextWrapper>
      </ContentWrapper>
    </WrapFooter>
  );
}

export default Footer;


