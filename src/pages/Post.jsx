import React from "react";
import AchievementRate from "../components/AchievementRate";
import CommentList from "../components/CommentList";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
  const { post_id, userId } = useParams(); // URL에서 post_id와 userId를 가져옴
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const handleDeletePost = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://dahaessyu.kro.kr/blog/posts/${post_id}/delete/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("게시글이 삭제되었습니다!");
      navigate(`/PostList/${userId}`);
    } catch (error) {
      console.error(
        "Failed to delete post:",
        error.response ? error.response.data : error.message
      );
      alert("게시글 삭제에 실패했습니다.");
    }
  };

  return (
    <>
      <AchievementRate />
      <DeleteButton onClick={handleDeletePost}>게시글 삭제</DeleteButton>
      <CommentList />
    </>
  );
};

export default Post;
