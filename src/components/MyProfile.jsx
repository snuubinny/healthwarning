import React from "react";
import styled from "styled-components";
import lionImage from "../img/lion.png";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-left: 280px;
`;

const LionIcon = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
`;

const PencilIcon = styled.svg`
  width: 40px;
  height: 40px;
  fill: ${(props) => (props.isActive ? "#ff832b" : "black")};
  cursor: pointer;
  margin-top: 130px;
  margin-left: -15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  height: 400px;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
`;

const TitleWrap = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-top: 12px;
  margin-left: 15px;
  line-height: 2;
`;

const TextWrap = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  margin-left: 300px;
  color: black;
  line-height: 2;
`;

const MyProfile = ({ isEditable, setIsEditable, name, id }) => {
  const handleIconClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <Wrapper>
      <ProfileContainer>
        <Header>
          <TitleWrap>내 프로필</TitleWrap>
        </Header>
        <IconWrapper>
          <LionIcon src={lionImage} />
          <PencilIcon
            isActive={isEditable}
            onClick={handleIconClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
          </PencilIcon>
        </IconWrapper>
        <TextWrap>
          이름: {name}
          <br />
          ID: {id}
        </TextWrap>
      </ProfileContainer>
    </Wrapper>
  );
};

export { MyProfile };
