import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WrapComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  padding-bottom: 20px;
  margin-left: 10px;
`;

const CommentContainer = styled.div`
  width: 48.5%;
  height: auto;
  transition: transform 0.2s;
  background-color: white;
  padding: 10px;
  display: flex;
  margin-top: 10px;
  padding-bottom: 0px;
  border: 1px solid #ff832b;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const CommentText = styled.div`
  margin-left: 20px;
  flex: 1;
  .guardian {
    font-weight: bold;
    color: #ff832b;
    margin-right: 5px;
  }
`;

const GuardianText = styled.button`
  padding: 3px;
  font-size: 12px;
  width: 30%;
  font-size: 13px;
  height: 25px;
  width: 50px;
  background-color: #fee5ce;
  color: #ff832b;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
  gap: 5px;
`;

const DeleteButton = styled.button`
  padding: 3px;
  font-size: 12px;
  width: 30%;
  font-size: 13px;
  height: 25px;
  width: 50px;
  background-color: #ff832b;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const CommentField = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: 15px;
  padding-left: 30px;
  &:focus {
    outline: 2px solid #ff832b;
  }
  margin-bottom: 20px;
`;

const CommentButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 80px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;
  font-weight: bold;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
  margin-bottom: 20px;
`;

const CommentFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  margin-left: 10px;
`;

const CommentButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isGuardian, setIsGuardian] = useState(false);

  const handleCommentChange = (e) =>
    setComment(
      e.target.value
    ); /* 입력필드의 현재 값들을 comment에 저장하도록!!*/
  const handleGuardianChange = (e) => setIsGuardian(e.target.checked);

  const handleCommentSubmit = () => {
    if (comment.trim() === "") return;
    setComments([...comments, { text: comment, guardian: isGuardian }]);
    setComment(""); /*빈 입력필드로*/
    setIsGuardian(false);
  }; /* trim으로 앞뒤 공백 제거하기 빈 문자열이라면  함수종료*/
  /* ...comments를 통해 comments 배열의 모든 요소를 새로운 배열에 복사시킴!!*/

  return (
    <>
      <CommentFieldWrapper>
        <label>
          보호자
          <input
            type="checkbox"
            checked={isGuardian}
            onChange={handleGuardianChange}
          />
        </label>
        <CommentField
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요."
        />
        <CommentButtonWrapper>
          <CommentButton onClick={handleCommentSubmit}>등록!</CommentButton>
        </CommentButtonWrapper>
      </CommentFieldWrapper>
      <WrapComment>
        {comments.length > 0 &&
          comments.map((c, index) => (
            <CommentContainer key={index}>
              {c.guardian && <GuardianText>보호자</GuardianText>}

              <CommentText>{c.text}</CommentText>
              <ButtonContainer>
                <DeleteButton>삭제</DeleteButton>
              </ButtonContainer>
            </CommentContainer>
          ))}
      </WrapComment>
    </>
  );
};

export default CommentList;

/*댓글 수정/삭제

 useEffect(() => {
    // 댓글 목록을 불러오는 API 요청
    axios.get(`https://dahaessyu.kro.kr/blog/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error("댓글을 불러오는 데 실패했습니다:", error);
      });
  }, [postId]);

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleGuardianChange = (e) => setIsGuardian(e.target.checked);

  const handleCommentSubmit = () => {
    if (comment.trim() === "") return;

    axios.post(`https://dahaessyu.kro.kr/blog/posts/${postId}/comments/create`, {
      text: comment,
      guardian: isGuardian
    })
      .then(response => {
        setComments([...comments, response.data]);
        setComment("");
        setIsGuardian(false);
      })
      .catch(error => {
        console.error("댓글을 작성하는 데 실패했습니다:", error);
      });
  };

  const handleCommentDelete = (commentId) => {
    axios.delete(`https://dahaessyu.kro.kr/blog/posts/${postId}/comments/${commentId}/delete`)
      .then(() => {
        setComments(comments.filter(comment => comment.id !== commentId));
      })
      .catch(error => {
        console.error("댓글을 삭제하는 데 실패했습니다:", error);
      });
  };

  const handleCommentModify = (commentId, newText) => {
    // 서버에서 댓글을 수정하는 API 요청을 호출합니다.
    // 이 부분은 실제 API 명세에 맞게 조정해야 합니다.
    axios.put(`https://dahaessyu.kro.kr/blog/posts/${postId}/comments/${commentId}/modify`, {
      text: newText
    })
      .then(() => {
        setComments(comments.map(comment => 
          comment.id === commentId ? { ...comment, text: newText } : comment
        ));
      })
      .catch(error => {
        console.error("댓글을 수정하는 데 실패했습니다:", error);
      });
  };

  return (
    <>
      <CommentFieldWrapper>
        <label>
          보호자
          <input
            type="checkbox"
            checked={isGuardian}
            onChange={handleGuardianChange}
          />
        </label>
        <CommentField
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요."
        />
        <CommentButtonWrapper>
          <CommentButton onClick={handleCommentSubmit}>등록!</CommentButton>
        </CommentButtonWrapper>
      </CommentFieldWrapper>
      <WrapComment>
        {comments.length > 0 &&
          comments.map((c) => (
            <CommentContainer key={c.id}>
              {c.guardian && <GuardianText>보호자</GuardianText>}
              <CommentText>{c.text}</CommentText>
              <ButtonContainer>
                <ModifyButton
                  onClick={() => {
                    const newText = prompt("수정할 댓글을 입력하세요:", c.text);
                    if (newText !== null) {
                      handleCommentModify(c.id, newText);
                    }
                  }}
                >
                  수정
                </ModifyButton>
                <DeleteButton onClick={() => handleCommentDelete(c.id)}>삭제</DeleteButton>
              </ButtonContainer>
            </CommentContainer>
          ))}
      </WrapComment>
    </>
  );
};

export { CommentList };
*/
