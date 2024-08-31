import axios from "axios";
import React from "react";
import styled from "styled-components";

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
  width: 83%;
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

const SexButton = styled.button`
  padding: 3px;
  font-size: 12px;
  height: 20px;
  width: 60px;
  background-color: ${(props) => (props.active ? "#ff832b" : "#fee5ce")};
  color: ${(props) => (props.active ? "white" : "#ff832b")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: ${(props) => (props.active ? "#ff7a2b" : "#ffd6b0")};
    color: ${(props) => (props.active ? "white" : "#ff832b")};
  }
`;

const SexButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  margin-left: -80px;
`;

const TextWrap = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 15px;
  color: white;
  margin-top: 5px;
  padding: 3px 15px;
`;

const FormBox = styled.input`
  height: 25px;
  width: 200px;
  font-size: 10px;
  background-color: #feecdb;
  border: none;
  border-color: #f8efe6;
  outline-color: #ffe3c8;
  border-radius: 10px;
  padding: 0 10px;
  flex: 1;
  box-sizing: border-box;
  margin-bottom: 0;

  &::placeholder {
    font-size: 10px;
    color: #aaa;
    padding-left: 1px;
  }
`;

const FormBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 10px;
  width: 100%;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  align-items: center;
  width: 100%;
  margin-bottom: 3px;
  margin-left: -40px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 12px;
  width: 120px;
  margin-left: -5px;
  text-align: right;
  margin-top: 0px;
`;

const DuplicateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-size: 10px;
  height: 17px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
  white-space: nowrap;
  text-align: center;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const MyInformation = ({ isEditable, userData, setUserData }) => {
  const { username, identifier, email, password, confirmPassword } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIdDuplicate = async () => {
    try {
      const response = await axios.post(
        "https://healthwarning.kro.kr/users/check_identifier/",
        { identifier }
      );

      if (response.status === 200) {
        alert("사용가능한 아이디입니다.");
      } else {
        alert("이미 사용중인 아이디입니다.");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("이미 사용중인 아이디입니다.");
      } else {
        alert("중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handlePasswordValidation = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("비밀번호가 일치합니다.");
    }
  };

  const handleEmailDuplicate = async () => {
    try {
      const requestData = { email };
      const response = await axios.post(
        "https://healthwarning.kro.kr/users/check_email/",
        requestData
      );

      if (response.status === 200) {
        alert("사용가능한 이메일입니다.");
      } else {
        alert("이미 사용중인 이메일입니다.");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("이미 사용중인 이메일입니다.");
      } else {
        alert("중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <Wrapper>
      <ProfileContainer>
        <Header>
          <TextWrap>사용자 정보</TextWrap>
        </Header>
        <FormBoxContainer>
          <InputContainer>
            <Label htmlFor="username">피보호자 이름:</Label>
            <FormBox
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              disabled={!isEditable}
            />
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label htmlFor="identifier">아이디:</Label>
            <FormBox
              id="identifier"
              name="identifier"
              value={identifier}
              onChange={handleChange}
              disabled={!isEditable}
            />
            <DuplicateButton onClick={handleIdDuplicate}>
              중복확인
            </DuplicateButton>
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label>이메일:</Label>
            <FormBox
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              readOnly={!isEditable}
            />
            <DuplicateButton onClick={handleEmailDuplicate}>
              중복확인
            </DuplicateButton>
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label htmlFor="password">새 비밀번호:</Label>
            <FormBox
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              disabled={!isEditable}
            />
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label htmlFor="confirmPassword">비밀번호 확인:</Label>
            <FormBox
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              disabled={!isEditable}
            />
            <DuplicateButton onClick={handlePasswordValidation}>
              일치확인
            </DuplicateButton>
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label>생년월일:</Label>
            <FormBox
              type="text"
              name="birth"
              value={userData.birth}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </InputContainer>
          <Divider />
          <SexButtonContainer>
            <Label>성별:</Label>
            <SexButton
              active={userData.gender === "m"}
              onClick={() =>
                isEditable && setUserData({ ...userData, gender: "m" })
              }
            >
              남
            </SexButton>
            <SexButton
              active={userData.gender === "w"}
              onClick={() =>
                isEditable && setUserData({ ...userData, gender: "w" })
              }
            >
              여
            </SexButton>
          </SexButtonContainer>
        </FormBoxContainer>
      </ProfileContainer>
    </Wrapper>
  );
};

export default MyInformation;
