import React from "react";
import styled from "styled-components";
import womanImage from "../img/woman.png";
import manImage from "../img/man.png";
import { useNavigate } from "react-router-dom";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 115px;
`;

const WomanIcon = styled.img`
  width: 120px;
  height: auto;
  margin-right: 20px;
`;

const ManIcon = styled.img`
  width: 120px;
  height: auto;
  margin-right: 20px;
`;

const PencilIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${(props) => (props.$isActive ? "#ff832b" : "black")};
  cursor: pointer;
  margin-top: 130px;
  margin-left: -15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const ProfileContainer = styled.div`
  width: 80%;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Header = styled.div`
  width: 100%;
  height: 35px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
`;

const TitleWrap = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  font-weight: bold;
  font-size: 13px;
  justify-content: space-between;
  color: white;
  margin-top: 5px;
  margin-left: 15px;
  line-height: 2;
`;

const TextWrap = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 13px;
  margin-left: 100px;
  color: black;
  line-height: 2;
`;

const LogoutIcon = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  fill: #ff8000;
`;

const MyProfile = ({
  isEditable,
  setIsEditable,
  username,
  identifier,
  gender,
}) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    alert("로그아웃이 진행됩니다.");
    navigate("/");
  };

  const handleIconClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <Wrapper>
      <ProfileContainer>
        <Header>
          <TitleWrap>
            보호자 프로필
            <LogoutIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
              onClick={handleLogoutClick}
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </LogoutIcon>
          </TitleWrap>
        </Header>
        <IconWrapper>
          {gender === "w" ? (
            <WomanIcon src={womanImage} />
          ) : (
            <ManIcon src={manImage} />
          )}
          <PencilIcon
            $isActive={isEditable}
            onClick={handleIconClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
          </PencilIcon>
        </IconWrapper>
        <TextWrap>
          이름: {username}
          <br />
          ID: {identifier}
        </TextWrap>
      </ProfileContainer>
    </Wrapper>
  );
};

export default MyProfile;
