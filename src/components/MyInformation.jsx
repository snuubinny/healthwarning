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
  width: 100px; /* Set a fixed width for consistent alignment */
  margin-right: 10px;
  text-align: right; /* Align text to the right */
`;

const MyInformation = ({ isEditable, onSave, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [id, setId] = useState(initialData.id);
  const [password, setPassword] = useState(initialData.password);
  const [email, setEmail] = useState(initialData.email);
  const [birthdate, setBirthdate] = useState(initialData.birthdate);
  const [sex, setSex] = useState(initialData.sex);

  const handleSave = () => {
    onSave(name, id); // onSave 함수를 호출하여 부모 컴포넌트로 데이터를 전달합니다.
  };

  useEffect(() => {
    if (!isEditable) {
      handleSave();
    }
  }, [isEditable]);

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
          <InputContainer>
            <Label>성별:</Label>
            <FormBox
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              placeholder={initialData.sex}
              readOnly={!isEditable}
            />
          </InputContainer>
        </FormBoxContainer>
      </ProfileContainer>
    </Wrapper>
  );
};

export { MyInformation };
