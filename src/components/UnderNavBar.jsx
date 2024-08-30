import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const NavBarBox = styled.div`
  width: 100%;
  height: 55px;
  background-color: #ff8f3e;
  margin-top: 20px;
  position: sticky;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const AIchatbox = styled.div`
  width: 45px;
  height: 45px;
  background-image: url("${process.env.PUBLIC_URL}/chatbot.png");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  filter: invert(100%) brightness(200%);
`;

const HomeBox = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${process.env.PUBLIC_URL}/home.png");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  filter: invert(100%) brightness(200%);
`;

const CreatePostBox = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${process.env.PUBLIC_URL}/post.png");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  filter: invert(100%) brightness(200%);
`;

const ChartBox = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${process.env.PUBLIC_URL}/chart-bar.png");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const UnderNavBar = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleChatBotClick = () => {
    navigate("/ChatBot");
  };

  const handleHomeClick = () => {
    navigate(`/PostList/${userId}`);
  };

  const handlePostClick = () => {
    navigate("/CreatePost");
  };

  return (
    <>
      <NavBarBox>
        <IconContainer>
          <AIchatbox onClick={handleChatBotClick} />
          <HomeBox onClick={handleHomeClick} />
          <CreatePostBox onClick={handlePostClick} />
          <ChartBox />
        </IconContainer>
      </NavBarBox>
    </>
  );
};

export default UnderNavBar;
