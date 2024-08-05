import React from "react";
import styled from "styled-components";
import githubIcon from "../img/github.png";
import footerLogo from "../img/Footer_Logo.png";

const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 12px;
  height: 130px;
  position: relative;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const ContentWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const FooterIcon = styled.img`
  width: 60px;
  height: 50px;
  fill: currentColor;
  margin-right: 4px;
  transform: scale(2);
  margin-top: 4px;
  margin-left: 0px;
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
  font-size: 13px;
  line-height: 1.3;
`;

const GithubWrapper = styled.div`
  font-size: 15px;
  text-align: right;
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Footer = () => {
  return (
    <WrapFooter>
      <ContentWrapper>
        <IconWrapper>
          <FooterIcon src={footerLogo} />
          <TitleWrapper>
            <h2>
              다했슈<span style={{ color: "#ff832b" }}>(DHS)</span>
            </h2>
          </TitleWrapper>
        </IconWrapper>
        <TextWrapper>
          <div>
            다했슈(DHS) | 대표자: 김지후(FE), 전수빈(FE), 김민경(BE),
            손가영(BE), 심성민(BE)
            <br />
            문의전화: 010-1234-5678 <br />
            e-mail: 12345678@inha.edu <br />
            instagram:@likelion_inha
          </div>
          <GithubWrapper>
            <GithubLink
              href="https://github.com/InHelion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon src={githubIcon} alt="GitHub" />
              Go to GitHub
            </GithubLink>
          </GithubWrapper>
        </TextWrapper>
      </ContentWrapper>
    </WrapFooter>
  );
};

export default Footer;
