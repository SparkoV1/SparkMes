import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg"
        alt=""
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
