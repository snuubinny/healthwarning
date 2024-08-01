import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  height: 540px;
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
const SexButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: ${(props) => (props.active ? "#ff832b" : "#fee5ce")};
  color: ${(props) => (props.active ? "white" : "#ff832b")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 2px;
  font-weight: bold;
  border: 1px solid #ffe3c8;
  margin-bottom: 20px;
`;

const SexButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 250px;
`;
const TextWrap = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-top: 12px;
  margin-left: 15px;
  line-height: 2;
`;

const FormBox = styled.input`
  height: 45px;
  background-color: #feecdb;
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  margin: 10px 0;
  padding: 0 10px;
  width: 60%;
`;

const FormBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 70px;
  padding: 70px 10px 10px;
  margin-top: -20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  width: 100px;
  margin-right: 10px;
  text-align: right;
`;

const MyInformation = ({ isEditable, onSave, initialData, onSexChange }) => {
  const [name, setName] = useState(initialData.name);
  const [id, setId] = useState(initialData.id);
  const [password, setPassword] = useState(initialData.password);
  const [email, setEmail] = useState(initialData.email);
  const [birthdate, setBirthdate] = useState(initialData.birthdate);
  const [sex, setSex] = useState(initialData.sex);

  const handleSave = () => {
    onSave(name, id);
    onSexChange(sex);
  };

  /*
 useEffect(() => {
    setName(initialData.name);
    setId(initialData.id);
    setPassword(initialData.password);
    setEmail(initialData.email);
    setBirthdate(initialData.birthdate);
    setSex(initialData.sex);
  }, [initialData]);

  const handleSaveClick = () => {
    onSave(name, id, password, email, birthdate, sex);
  };
  */

  return (
    <Wrapper>
      <ProfileContainer>
        <Header>
          <TextWrap>내정보</TextWrap>
        </Header>
        <FormBoxContainer>
          <InputContainer>
            <Label>이름:</Label>
            <FormBox
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={initialData.name}
              readOnly={!isEditable}
            />
          </InputContainer>
          <InputContainer>
            <Label>아이디:</Label>
            <FormBox
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder={initialData.id}
              readOnly={!isEditable}
            />
          </InputContainer>
          <InputContainer>
            <Label>비밀번호:</Label>
            <FormBox
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={initialData.password}
              readOnly={!isEditable}
            />
          </InputContainer>
          <InputContainer>
            <Label>이메일:</Label>
            <FormBox
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={initialData.email}
              readOnly={!isEditable}
            />
          </InputContainer>
          <InputContainer>
            <Label>생년월일:</Label>
            <FormBox
              type="text"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder={initialData.birthdate}
              readOnly={!isEditable}
            />
          </InputContainer>
          <SexButtonContainer>
            <Label>성별:</Label>
            <SexButton
              active={sex === "남"}
              onClick={() => isEditable && setSex("남")}
            >
              남
            </SexButton>
            <SexButton
              active={sex === "여"}
              onClick={() => isEditable && setSex("여")}
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

/*
Wrapper isEditable={isEditable}

*/
