import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import navBarLogo from "../img/NavBar_Logo.png";
import BlogImage from "../img/blog.png";
import InstagramImage from "../img/instagram.png";
import GithubImage from "../img/github.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: 100px;
  }
`;

const WrapNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: #ff832b;
  position: sticky;
  top: 0;
  z-index: 10000;
  margin: 0;
  border: none;
  cursor: pointer;
  transition: height 0.5s ease;
  &:hover .alarm-container {
    height: 100px;
    opacity: 1;
    animation: ${fadeIn} 0.5s ease forwards;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

const CustomLogo = styled.svg`
  width: 40px;
  height: 40px;
  fill: white;
`;

const TitleWrapper = styled.div`
  text-align: left;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NavBarIcon = styled.img`
  width: 50px;
  height: 40px;
  margin-right: 8px;
  transform: scale(2);
  margin-top: 3px;
  margin-right: 6px;
`;

const AlarmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #ff832b;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  height: 50px;
  opacity: 0;
  transition: opacity 0.5s ease, height 0.5s ease;
  z-index: 1000;
`;

const Alarmtext = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 25px;
  color: white;
  margin-top: 5px;
  cursor: pointer;
  margin-left: 30px;
`;

const IconLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 35px;
  margin: 0 10px;
  cursor: pointer;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const currentPath = window.location.pathname;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleHomeLogoClick = () => {
    try {
      if (currentPath === "/LoginForm") {
        navigate("/LoginForm");
        return;
      }

      navigate(`/PostList/${userId}`);
    } catch (error) {
      console.error("Error checking token:", error);
      alert("유저 정보를 가져오는 데 실패했습니다.");
    }
  };

  const handleEditLogoClick = async () => {
    try {
      if (currentPath === "/LoginForm" || currentPath === "/RegisterForm") {
        alert("먼저 로그인을 진행해주세요!");
        return;
      }

      navigate(`/EditProfile/${userId}`);
    } catch (error) {
      console.error("Error checking token:", error);
      alert("유저 정보를 가져오는 데 실패했습니다.");
    }
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleAlarmTextClick = () => {
    navigate("/");
  };

  return (
    <>
      <WrapNavBar
        className={isExpanded ? "expanded" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconWrapper onClick={handleHomeLogoClick}>
          <NavBarIcon src={navBarLogo} />
          <TitleWrapper>
            <span style={{ color: "#fbefa2" }}>다!</span> 했슈
          </TitleWrapper>
        </IconWrapper>
        <LogoWrapper onClick={handleEditLogoClick}>
          <CustomLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
              clipRule="evenodd"
            />
          </CustomLogo>
        </LogoWrapper>
        <AlarmContainer className="alarm-container">
          <Alarmtext onClick={handleAlarmTextClick}>
            다했슈 소개 페이지 바로가기 <br />
            구성원 소개
          </Alarmtext>
          <IconLinks>
            <a
              href="https://blog.naver.com/snuubinny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={BlogImage} alt="Blog" />
            </a>
            <a
              href="https://www.instagram.com/likelion_inha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={InstagramImage} alt="Instagram" />
            </a>
            <a
              href="https://github.com/InHelion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={GithubImage} alt="GitHub" />
            </a>
          </IconLinks>
        </AlarmContainer>
      </WrapNavBar>
    </>
  );
};

export default NavBar;
