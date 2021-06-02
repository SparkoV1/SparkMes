import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
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
