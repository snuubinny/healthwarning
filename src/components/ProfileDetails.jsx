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

const InfoContainer = styled.div`
  width: 84%;
  height: 220px;
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

const TextWrap = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 15px;
  color: white;
  margin-top: 5px;
  padding: 3px 15px;
`;

const FormBox = styled.input`
  height: 20px;
  background-color: #feecdb;
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  margin: 10px 0;
  padding: 0 10px;
  width: 30px;
`;
const Label = styled.label`
  font-size: 13px;
  width: auto;
  margin-left: 0px;
  text-align: right;
  margin-top: 0px;
  margin: 0 4px;
  white-space: nowrap;
`;

const FormBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 110px;
  padding: 40px 10px 0px;
  margin-top: -20px;
  margin-left: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: -5px;
  margin-left: 30px;
`;

const InlineLabel = styled.label`
  margin: 0 7px;
  font-size: 13px;
  flex-shrink: 0;
  width: 100px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
`;

const ProfileDetails = ({ isEditable, userData, setUserData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleKeyDown = (e) => {
    if (e.key === "-" || e.key === "e" || e.key === "E") {
      e.preventDefault(); // 음수와 지수 표기(e, E) 입력 방지
    }
  };

  return (
    <Wrapper>
      <InfoContainer>
        <Header>
          <TextWrap>필수정보</TextWrap>
        </Header>
        <FormBoxContainer>
          <InputContainer>
            <Label>목표 수면시간은</Label>
            <FormBox
              type="number"
              name="sleep"
              value={userData.sleep}
              onChange={handleChange}
              readOnly={!isEditable}
              onKeyDown={handleKeyDown}
            />
            <InlineLabel>시간 입니다.</InlineLabel>
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label>약 복용횟수는</Label>
            <FormBox
              type="number"
              name="medications"
              value={userData.medications}
              onChange={handleChange}
              readOnly={!isEditable}
              onKeyDown={handleKeyDown}
            />
            <InlineLabel>회 입니다.</InlineLabel>
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label>목표 운동시간은</Label>
            <FormBox
              type="number"
              name="exercises"
              value={userData.exercises}
              onChange={handleChange}
              readOnly={!isEditable}
              onKeyDown={handleKeyDown}
            />
            <InlineLabel>분 입니다.</InlineLabel>
          </InputContainer>
          <Divider />
          <InputContainer>
            <Label>하루 목표 식사횟수는</Label>
            <FormBox
              type="number"
              name="meals"
              value={userData.meals}
              onChange={handleChange}
              readOnly={!isEditable}
              onKeyDown={handleKeyDown}
            />
            <InlineLabel>끼입니다.</InlineLabel>
          </InputContainer>
        </FormBoxContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default ProfileDetails;
