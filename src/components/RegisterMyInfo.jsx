import styled from "styled-components";
import axios from "axios";

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
  cursor: pointer;
  height: 650px;
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

const DuplicateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const DuplicateButton = styled.button`
  padding: 3px;
  font-size: 13px;
  height: 25px;
  width: 70px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #ffe3c8;
  margin-left: 10px;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const Label = styled.label`
  font-weight: bold;
  width: 110px;
  margin-right: 10px;
  text-align: right;
`;

const SexButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: ${(props) => (props.$active ? "#ff832b" : "#fee5ce")};
  color: ${(props) => (props.$active ? "white" : "#ff832b")};
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
  margin-right: 280px;
`;

const RegisterMyInfo = ({
  username,
  setUsername,
  identifier,
  setIdentifier,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  email,
  setEmail,
  birth,
  setBirth,
  gender,
  setGender,
}) => {
  const handleSexClick = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleIdDuplicate = async () => {
    try {
      const requestData = { identifier };
      const response = await axios.post(
        "https://dahaessyu.kro.kr/users/check_identifier/",
        requestData
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

  const handleEmailDuplicate = async () => {
    try {
      const requestData = { email };
      const response = await axios.post(
        "https://dahaessyu.kro.kr/users/check_email/",
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

  const handlePasswordMatch = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("비밀번호가 일치합니다.");
    }
  };

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
              placeholder="피보호자의 이름을 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <DuplicateWrapper>
            <InputContainer>
              <Label>아이디:</Label>
              <FormBox
                type="text"
                placeholder="아이디를 입력하세요"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
              <DuplicateButton onClick={handleIdDuplicate}>
                중복확인
              </DuplicateButton>
            </InputContainer>
          </DuplicateWrapper>
          <InputContainer>
            <Label>비밀번호:</Label>
            <FormBox
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>비밀번호 확인:</Label>
            <FormBox
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <DuplicateButton onClick={handlePasswordMatch}>
              일치확인
            </DuplicateButton>
          </InputContainer>
          <DuplicateWrapper>
            <InputContainer>
              <Label>이메일:</Label>
              <FormBox
                type="email"
                placeholder="보호자의 이메일로 작성해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <DuplicateButton onClick={handleEmailDuplicate}>
                중복확인
              </DuplicateButton>
            </InputContainer>
          </DuplicateWrapper>
          <InputContainer>
            <Label>생년월일:</Label>
            <FormBox
              type="date"
              placeholder="생년월일을 입력하세요"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </InputContainer>
          <SexButtonContainer>
            <Label>성별:</Label>
            <SexButton
              $active={gender === "m"}
              onClick={() => handleSexClick("m")}
            >
              남
            </SexButton>
            <SexButton
              $active={gender === "w"}
              onClick={() => handleSexClick("w")}
            >
              여
            </SexButton>
          </SexButtonContainer>
        </FormBoxContainer>
      </ProfileContainer>
    </Wrapper>
  );
};

export default RegisterMyInfo;
