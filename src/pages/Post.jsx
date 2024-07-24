import React from "react";
import { AchievementRate } from "../components/AchievementRate";
import { CommentList } from "../components/CommentList";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Post = () => {
  return (
    <>
      <AchievementRate />
      <CommentList />
    </>
  );
};

export default Post;
