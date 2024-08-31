import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const WrapComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8px;
  width: 96.5%;
  padding-bottom: 20px;
  margin-left: 20px;
`;

const CommentContainer = styled.div`
  width: 70%;
  height: auto;
  transition: transform 0.2s;
  background-color: white;
  padding: 3px 7px;
  display: flex;
  margin-top: 10px;
  border: 0.5px solid #ff832b;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  &:hover {
    transform: scale(1.01);
  }
`;

const CommentText = styled.div`
  margin-left: 10px;
  font-size: 12px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const GuardianText = styled.span`
  padding: 0px;
  font-size: 11px;
  height: 20px;
  display: flex;
  align-items: center;
  background-color: #fee5ce;
  color: #ff832b;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: 10px;
`;

const DeleteButton = styled.button`
  padding: 3px;
  font-size: 11px;
  height: 18px;
  width: 30px;
  background-color: #ff832b;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const CommentField = styled.input`
  width: 80%;
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 10px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-left: 25px;
  padding-left: 10px;
  &:focus {
    outline: 1px solid #ff832b;
  }
  margin-bottom: 20px;
`;

const CommentButton = styled.button`
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  text-align: center;
  height: 25px;
  width: 40px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: -10px;
  margin-right: 20px;
  margin-left: 3px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
`;

const CommentFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  width: 100%;
  margin-left: 10px;
`;

const Label = styled.label`
  font-size: 12px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: -15px;
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
        `https://healthwarning.kro.kr/blog/posts/${post_id}/comments`,
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
        `https://healthwarning.kro.kr/blog/posts/${post_id}/comments/create/`,
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
      const url = `https://healthwarning.kro.kr/blog/posts/${post_id}/comments/${commentId}/delete/`;

      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchComments();
    } catch (error) {
      console.error(
        "Failed to delete comment:",
        error.response ? error.response.data : error.message
      );
      alert("댓글 삭제에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <>
      <CommentFieldWrapper>
        <Label>
          보호자
          <Checkbox
            type="checkbox"
            checked={isGuardian}
            onChange={handleGuardianChange}
          />
        </Label>
        <CommentField
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요."
        />
        <CommentButton onClick={handleCommentSubmit}>등록!</CommentButton>
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
