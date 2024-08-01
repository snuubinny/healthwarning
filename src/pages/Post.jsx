import React from "react";
import AchievementRate from "../components/AchievementRate";
import CommentList from "../components/CommentList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const DeleteButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: #ff832b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 680px;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: #fee5ce;
    color: #ff832b;
  }
  margin-bottom: 20px;
`;

const Post = () => {
  return (
    <>
      <AchievementRate />
      <DeleteButton>게시글 삭제</DeleteButton>
      <CommentList />
    </>
  );
};

export default Post;
