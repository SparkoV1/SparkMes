import React from "react";
import "./Post.scss";

const Post = (props) => {
  return (
    <div className="item">
      <img
        src="https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
