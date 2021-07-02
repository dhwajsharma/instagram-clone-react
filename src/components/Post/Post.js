import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

const Posts = ({ username, imageUrl, caption }) => {
  return <div className="post">
    <div className="post__header">
      <Avatar className="post__avatar" alt="dhwajsharmaa" src="" />
      <h3>{username}</h3>
    </div>

    <img className="post__image" src={imageUrl} alt="post" />

    <h4 className="post__text"> <strong>{username}:</strong> {caption}</h4>

  </div>;
};

export default Posts;
