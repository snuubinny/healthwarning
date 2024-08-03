import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  const { post_id } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isGuardian, setIsGuardian] = useState(false);

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://dahaessyu.kro.kr/blog/posts/${post_id}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [post_id]);

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleGuardianChange = (e) => setIsGuardian(e.target.checked);

  const handleCommentSubmit = async () => {
    if (comment.trim() === "") return;

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://dahaessyu.kro.kr/blog/posts/${post_id}/comments/create/`, // 여기에서 슬래시 추가
        {
          content: comment,
          protector: isGuardian,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("등록이 완료되었습니다!");
      fetchComments();
      setComment("");
      setIsGuardian(false);
    } catch (error) {
      console.error(
        "Failed to create comment:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://dahaessyu.kro.kr/blog/posts/${post_id}/comments/${commentId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchComments();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
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
              {c.protector && <GuardianText>보호자</GuardianText>}
              <CommentText>{c.content}</CommentText>
              <ButtonContainer>
                <DeleteButton onClick={() => handleDeleteComment(c.id)}>
                  삭제
                </DeleteButton>
              </ButtonContainer>
            </CommentContainer>
          ))}
      </WrapComment>
    </>
  );
};

export default CommentList;
